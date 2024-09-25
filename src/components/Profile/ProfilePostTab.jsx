import React, { Fragment, useEffect, useRef, useState } from "react";
import Post from "../../components/Post/Post";
import { NavLink, useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectTabAction } from "../../store/actions/tabActions";
import { PROFILE_TAB } from "../../config/constant";
import Skeleton from "react-loading-skeleton";
import { LoadingOutlined } from "@ant-design/icons";
import {
  resetPostsByUserAction,
  setPostsByUserAction,
} from "../../store/actions/postActions";
import InfiniteScroll from "react-infinite-scroll-component";

export default function ProfilePostTab() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const showLoading = useSelector((state) => state.loadingReducer.showLoading);
  const userDetail = useSelector((state) => state.userReducer.userDetail);
  const postsByUser = useSelector((state) => state.postReducer.postsByUser);
  const [skipItem, setSkipItem] = useState(0);
  const { userId } = useParams();
  const loadMore = useSelector(state => state.postReducer.loadMore);

  console.log("loadMore: ", loadMore);

  useEffect(() => {
    dispatch(setPostsByUserAction(userId, skipItem));
    return () => {
      dispatch(resetPostsByUserAction());
    };
  }, []);

  const fetchData = () => {
    setSkipItem(skipItem + 2);
    dispatch(setPostsByUserAction(userId, skipItem + 2));
  };

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
                  <div className="profile-friends-item" key={friend._id}>
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
            {postsByUser.posts?.map((post, index) => {
              return (
                <Post
                  post={post}
                  username={postsByUser.user?.username}
                  key={post._id}
                />
              );
            })}
          </>
        )}
        <InfiniteScroll
          dataLength={postsByUser.posts} //This is important field to render the next data
          next={fetchData}
          hasMore={loadMore}
          loader={<LoadingOutlined className="text-center"/>}
        ></InfiniteScroll>
      </div>
    </Fragment>
  );
}
