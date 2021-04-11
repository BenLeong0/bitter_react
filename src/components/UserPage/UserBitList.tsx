import React, { useState, useEffect, useContext } from "react";
import { AccountContext } from "../Account";
import BitList from "../Main/BitList/BitList";
import "./UserBitList.css";

import BitInfo from "../../Types/BitInfo";
// interface BitInfo {
//   content: string;
//   dislikes: number;
//   display_name: string;
//   handle: string;
//   index: number;
//   likes: number;
//   post_id: number;
//   post_time: string;
//   replies: number;
//   reply_to: number;
//   reposts: number;
//   status: number;
//   user_id: number;
// }

interface Props {
  replies: boolean;
}

const UserBitList: React.FC<Props> = ({ replies }) => {
  // fetch list of bits
  const [bits, setBits] = useState<Array<BitInfo>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    API_URL,
    currHandle,
    myHandle,
  }: { API_URL: string; currHandle: string; myHandle: string } = useContext(
    AccountContext
  );

  // Fetch posts every time the user changes
  useEffect(() => {
    fetchBits();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currHandle]);

  const fetchBits = async () => {
    setIsLoading(true);
    const data = await fetch(
      `${API_URL}/users/posts?handle=${currHandle}&myHandle=${myHandle}`
    );
    const items: Array<BitInfo> = await data.json();
    setBits(items);
    setIsLoading(false);
  };

  // pass into BitList
  return <BitList bits={bits} isLoading={isLoading} />;
};

export default UserBitList;