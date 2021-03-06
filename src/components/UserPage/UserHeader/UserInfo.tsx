import React, { useState } from "react";

import User from "../../../Types/User";
import CoreService from "../../core/CoreService";

interface Props {
  updatePageState: (stateId: number) => void;
  user: User;
}

const UserInfo: React.FC<Props> = ({ updatePageState, user }) => {
  const coreService = new CoreService();
  const [listId, setListId] = useState<number>(0);
  const printProps = () => console.log(user);

  const changeTab = (state: number): void => {
    setListId(state);
    updatePageState(state);
  };

  return (
    <div className="user-info">
      <div className="user-displayname" onClick={printProps}>
        {user.display_name}
      </div>
      <div id="user-joindate">
        {coreService.formatJoinDate(user.created_on)}
      </div>
      <div className="user-handle">{user.handle}</div>
      <div className="user-bio">{user.bio}</div>
      <div className="user-tabs">
        <div
          className={`user-tab-bits${listId === 0 ? " user-current-tab" : ""}`}
          onClick={() => changeTab(0)}
        >
          <b>{user.bits_count}</b> Bits
        </div>
        <div
          className={`user-tab-replies${
            listId === 1 ? " user-current-tab" : ""
          }`}
          onClick={() => changeTab(1)}
        >
          <b>{user.replies}</b> Bits and replies
        </div>
        <div
          className={`user-following${listId === 2 ? " user-current-tab" : ""}`}
          onClick={() => changeTab(2)}
        >
          <b>{user.following_count}</b> Following
        </div>
        <div
          className={`user-followers${listId === 3 ? " user-current-tab" : ""}`}
          onClick={() => changeTab(3)}
        >
          <b>{user.follower_count}</b> Followers
        </div>
        <div
          className={`user-likes${listId === 4 ? " user-current-tab" : ""}`}
          onClick={() => changeTab(4)}
        >
          <b>{user.likes}</b> Likes
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
