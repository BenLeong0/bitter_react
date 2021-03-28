import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AccountContext } from "../../Account";
import SuggestedUserFollowButton from "./components/SuggestedUserFollowButton";

interface User {
  user_id: string;
  handle?: string;
  display_name?: string;
}

const UserSuggestion: React.FC<User> = (user) => {
  return (
    <>
      <hr className="solid"></hr>
      <div className="user-suggestion">
        <Link to={"/u/" + user.handle}>
          <div className="user-suggestion-pfp">
            <img src="https://via.placeholder.com/48" alt="profile pic"></img>
          </div>
          <div className="user-suggestion-info">
            <div className="user-suggestion-displayname">
              {user.display_name}
            </div>
            <div className="user-suggestion-handle">@{user.handle}</div>
          </div>
        </Link>
        <SuggestedUserFollowButton
          className="user-suggestion-follow"
          user_id={user.user_id}
        />
      </div>
    </>
  );
};

export default UserSuggestion;