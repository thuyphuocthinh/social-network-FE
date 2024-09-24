import React from "react";
import { NavLink } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Post.scss";
import {
  faMessage,
  faShare,
  faThumbsUp,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";

library.add(faEllipsis, faThumbsUp, faMessage, faShare);

export default function Post(props) {
  const { username, post } = props;
  return (
    <div className="post">
      <div className="post-container">
        <>
          <div className="post-header">
            <div className="post-user">
              <div className="post-user-avatar"></div>
              <div className="post-user-info">
                <NavLink> {username} </NavLink>
                <span className="post-time">16 November 2022</span>
              </div>
            </div>
            <div className="post-header-actions">
              <span>
                <FontAwesomeIcon icon="fa-ellipsis" />
              </span>
            </div>
          </div>
          <div className="post-body">
            <div className="post-content">
              {post.content}
            </div>
          </div>
          <div className="post-footer">
            <div className="post-footer-actions">
              <div className="post-like">
                <FontAwesomeIcon icon="fa-thumbs-up" />
                <span>Like</span>
              </div>
              <div className="post-comment">
                <FontAwesomeIcon icon="fa-message" />
                <span>Comment</span>
              </div>
              <div className="post-share">
                <FontAwesomeIcon icon="fa-share" />
                <span>Share</span>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}
