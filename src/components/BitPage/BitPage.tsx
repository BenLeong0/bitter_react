import React, { useState, useEffect, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import BitPreThread from "./PreThreadList";
import "./BitPage.css";
import { AccountContext } from "../Account";
import Bit from "../Shared/Bit/Bit";

import BitInfo from "../../Types/BitInfo";
import ContextProps from "../../Types/ContextProps";
import ReplyThread from "./ReplyThread";
import HttpService from "../core/HttpService";

const BitPage: React.FC<{}> = () => {
  const httpService = new HttpService();
  const emptyPost: BitInfo = {
    post_id: "",
    handle: "",
    post_time: "",
    content: "",
    dislikes: 0,
    likes: 0,
    replies: 0,
    reposts: 0,
  };
  const [post, setPost] = useState<BitInfo>(emptyPost);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [post_id, setPostId] = useState<string>(
    useLocation().pathname.slice(3)
  );

  document.title = (post.handle ? "@" + post.handle : "post") + " / Bitter";

  const { myHandle }: ContextProps = useContext(AccountContext);

  // Database call for post by post_id
  const fetchPost = async (post_id: string) => {
    setIsLoading(true);

    // Returns {post_id: '', handle: ''} if post not found
    const res = "/bits";
    let queryParams = { handle: myHandle, post_id };
    const resp: any = await httpService.makeGetRequest(res, queryParams);

    if (resp.code === "getSuccess") {
      const post: BitInfo = JSON.parse(resp.post);
      setPost(post);
    } else {
      setPost(emptyPost);
      console.error(resp);
    }

    setIsLoading(false);

    let elmnt = document.getElementsByClassName("thread-main-bit")[0];
    if (elmnt) elmnt.scrollIntoView();
  };

  // Load post on mount
  useEffect(() => {
    fetchPost(post_id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post_id, myHandle]);

  // Update when moving between post pages
  const history = useHistory();
  useEffect(() => {
    return history.listen((location) => {
      setPostId(location.pathname.slice(3));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="user-loader">
          <div className="loader" />
        </div>
      ) : (
        <div className="bit-page">
          {post.post_id !== "" ? (
            <>
              <BitPreThread bit={post} />
              <Bit {...post} classes="thread-main-bit" />
              {typeof post.reply_threads === "undefined" ? (
                <></>
              ) : (
                post.reply_threads.map((thread) => {
                  return (
                    <ReplyThread thread={thread} key={thread[0].post_id} />
                  );
                })
              )}
            </>
          ) : (
            <div className="user-not-found">Post could not be found.</div>
          )}
        </div>
      )}
    </>
  );
};

export default BitPage;