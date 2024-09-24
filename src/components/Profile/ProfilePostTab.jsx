import React, { Fragment, useEffect } from "react";
import Post from "../../components/Post/Post";
import { NavLink, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectTabAction } from "../../store/actions/tabActions";
import { PROFILE_TAB } from "../../config/constant";
import Skeleton from "react-loading-skeleton";

export default function ProfilePostTab() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const showLoading = useSelector((state) => state.loadingReducer.showLoading);
  const userDetail = useSelector((state) => state.userReducer.userDetail);

  return (
    <Fragment>
      <div className="profile-friends">
        <div className="profile-friends-container">
          <div className="profile-friends-header">
            <span>Friends</span>
            <NavLink
              onClick={() => {
                setSearchParams({ tab: PROFILE_TAB.FRIENDS });
                dispatch(selectTabAction(PROFILE_TAB.FRIENDS));
              }}
            >
              See all friends
            </NavLink>
          </div>

          {showLoading ? (
            <Skeleton
              count={9}
              containerClassName="flex-1 profile-react-skeleton"
            />
          ) : (
            <div className="profile-friends-body">
              {userDetail.listFriends?.map((friend, index) => {
                return (
                  <div className="profile-friends-item" key={friend.id}>
                    <a className="profile-friends-link">
                      <img
                        src={friend.avatar}
                        alt={friend.username}
                        className="profile-friends-avatar"
                      />
                      <span className="profile-friends-name">
                        {friend.username}
                      </span>
                    </a>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="profile-posts">
        {/* create post component */}
        {/* list of post-components */}
        {showLoading ? (
          <div className="post">
            <Skeleton width={"150px"} />
            <Skeleton height={"150px"} />
          </div>
        ) : (
          <>
            {
              userDetail.listPosts?.map((post, index) => {
                return <Post post={post} username={userDetail.username} key={post.id} />
              })
            }
          </>
        )}
      </div>
    </Fragment>
  );
}
