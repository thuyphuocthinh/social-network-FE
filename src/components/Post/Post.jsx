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

export default function Post() {
  return (
    <div className="post">
      <div className="post-container">
        <div className="post-header">
          <div className="post-user">
            <div className="post-user-avatar"></div>
            <div className="post-user-info">
              <NavLink>Thuy Phuoc Thinh</NavLink>
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
            sunt facere blanditiis! Maiores officiis temporibus non architecto
            minus nisi quia ipsa assumenda nam ipsum aliquid rerum ullam fugiat
            voluptatem delectus odio tempore, quae commodi molestiae debitis
            doloribus error. Velit iste nobis cupiditate ullam culpa dignissimos
            tempore facere molestias quos perferendis.
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
      </div>
    </div>
  );
}
