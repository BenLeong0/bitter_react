import React, { useState, useEffect, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import UserHeader from "../components/UserPage/UserHeader";
import UserBitList from "../components/UserPage/UserBitList";
import UserNotFound from "../components/UserPage/UserNotFound";
import "../components/UserPage/UserPage.css";
import { AccountContext } from "../components/Account";

import User from "../Types/User";
// interface User {
//   user_id: number;
//   handle?: string;
//   display_name?: string;
//   created_on?: string;
//   bio?: string;
//   follower_count?: number;
//   following_count?: number;
// }

const UserPage: React.FC<{}> = () => {
  const [user, setUser] = useState<User>({ user_id: -1 });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [listState, setListState] = useState<any>(
    <UserBitList replies={false} />
  );

  const {
    API_URL,
    currId,
    setCurrId,
  }: {
    API_URL: string;
    currId: number;
    setCurrId: React.Dispatch<React.SetStateAction<number>>;
  } = useContext(AccountContext);

  const handle: string = useLocation().pathname.slice(3);

  // Database call for user by handle
  const fetchUser = async (handle: string) => {
    setIsLoading(true);
    // Returns {user_id: -1} if user not found
    const fetchUser = await fetch(`${API_URL}user/get?handle=${handle}`);
    const data: User = await fetchUser.json();
    setUser(data);
    setCurrId(data.user_id);
    setIsLoading(false);
  };

  // Load info on mount
  useEffect(() => {
    fetchUser(handle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update when moving between user pages
  const history = useHistory();
  useEffect(() => {
    return history.listen((location) => {
      fetchUser(location.pathname.slice(3));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // }, [history]);

  // Change view between bits / bits+replies / following / followers / likes
  function updatePageState(stateId: number): void {
    if (stateId === 0) {
      // Posts
      setListState(<UserBitList replies={false} />);
    } else if (stateId === 1) {
      // Posts and replies
      setListState(<UserBitList replies={true} />);
    } else if (stateId === 2) {
      // following list
      //
    } else if (stateId === 3) {
      // followers list
      //
    } else if (stateId === 4) {
      // like list
      //
    }
  }

  return (
    <>
      {isLoading ? (
        <div className="user-loader">
          <div className="loader" />
        </div>
      ) : (
        <div className="user-page">
          {currId !== -1 ? (
            <>
              <UserHeader updatePageState={updatePageState} user={user} />
              {listState}
            </>
          ) : (
            <UserNotFound handle={handle} />
          )}
        </div>
      )}
    </>
  );
};

export default UserPage;
