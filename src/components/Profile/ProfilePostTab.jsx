import React, { Fragment, useEffect } from "react";
import Post from "../../components/Post/Post";
import { NavLink, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectTabAction } from "../../store/actions/tabActions";
import { PROFILE_TAB } from "../../config/constant";

export default function ProfilePostTab() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

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
          <div className="profile-friends-body">
            <div className="profile-friends-item">
              <a className="profile-friends-link">
                <span className="profile-friends-avatar"></span>
                <span className="profile-friends-name">Thủy Phước Thịnh</span>
              </a>
            </div>
            <div className="profile-friends-item">
              <a className="profile-friends-link">
                <span className="profile-friends-avatar"></span>
                <span className="profile-friends-name">Thủy Phước Thịnh</span>
              </a>
            </div>
            <div className="profile-friends-item">
              <a className="profile-friends-link">
                <span className="profile-friends-avatar"></span>
                <span className="profile-friends-name">Thủy Phước Thịnh</span>
              </a>
            </div>
            <div className="profile-friends-item">
              <a className="profile-friends-link">
                <span className="profile-friends-avatar"></span>
                <span className="profile-friends-name">Thủy Phước Thịnh</span>
              </a>
            </div>
            <div className="profile-friends-item">
              <a className="profile-friends-link">
                <span className="profile-friends-avatar"></span>
                <span className="profile-friends-name">Thủy Phước Thịnh</span>
              </a>
            </div>
            <div className="profile-friends-item">
              <a className="profile-friends-link">
                <span className="profile-friends-avatar"></span>
                <span className="profile-friends-name">Thủy Phước Thịnh</span>
              </a>
            </div>
            <div className="profile-friends-item">
              <a className="profile-friends-link">
                <span className="profile-friends-avatar"></span>
                <span className="profile-friends-name">Thủy Phước Thịnh</span>
              </a>
            </div>
            <div className="profile-friends-item">
              <a className="profile-friends-link">
                <span className="profile-friends-avatar"></span>
                <span className="profile-friends-name">Thủy Phước Thịnh</span>
              </a>
            </div>
            <div className="profile-friends-item">
              <a className="profile-friends-link">
                <span className="profile-friends-avatar"></span>
                <span className="profile-friends-name">Thủy Phước Thịnh</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-posts">
        {/* create post component */}
        {/* list of post-components */}
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </Fragment>
  );
}
