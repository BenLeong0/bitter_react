import React, { useContext } from "react";
import { AccountContext } from "../../../Account";

type Props = {
  setIsFollowingSuggested: React.Dispatch<React.SetStateAction<boolean>>;
  user_id: string;
};

const UnfollowButton: React.FC<Props> = (props) => {
  const { setIsFollowingSuggested, user_id } = props;

  const {
    myId,
    currId,
    setIsFollowing,
    deleteFollowEdge,
  }: {
    myId: string;
    currId: string;
    setIsFollowing: React.Dispatch<React.SetStateAction<boolean>>;
    deleteFollowEdge: (
      sourceId: string,
      destinationId: string
    ) => Promise<void>;
  } = useContext(AccountContext);

  const unfollow = async () => {
    if (myId !== user_id) {
      setIsFollowingSuggested(false);

      // Update userPage if same user
      if (user_id === currId) {
        setIsFollowing(false);
      }

      // update db
      deleteFollowEdge(myId, user_id);
    } else {
      console.log("can't unfollow yourself!");
    }
  };

  return (
    <button className="button-primary" onClick={unfollow}>
      Following
    </button>
  );
};

export default UnfollowButton;
