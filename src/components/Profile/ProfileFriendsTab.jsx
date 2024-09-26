import React, { useEffect, useState } from "react";
import "./ProfileFriendsTab.scss";
import { useDispatch, useSelector } from "react-redux";
import { userAllFriendsAction } from "../../store/actions/userActions";
import { NavLink, useParams } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";

export default function ProfileFriendsTab() {
  const [skipItem, setSkipItem] = useState(0);
  const dispatch = useDispatch();
  const userAllFriends = useSelector(
    (state) => state.userReducer.userAllFriends
  );
  const lazyLoading = useSelector((state) => state.loadingReducer.lazyLoading);
  const { userId } = useParams();

  useEffect(() => {
    dispatch(userAllFriendsAction(userId, skipItem));
  }, []);

  return (
    <div className="friend-tab">
      {lazyLoading ? (
        <div className="text-center">
          <LoadingOutlined />
        </div>
      ) : (
        <div className="friend-tab-container">
          {userAllFriends.map((friend, index) => {
            return (
              <div className="friend-item" key={friend._id}>
                <NavLink to={`/profile/${friend._id}`} className="friend-link">
                  <img className="friend-avatar" src={friend.avatar} />
                  <span className="friend-name"> {friend.username} </span>
                </NavLink>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
