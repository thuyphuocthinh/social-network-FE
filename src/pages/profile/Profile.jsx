import { Fragment } from "react";
import Header from "../../components/Home/Header";
import "./Profile.scss";
import { NavLink } from "react-router-dom";
import Post from "../../components/Post/Post";

export default function Profile() {
  return (
    <Fragment>
      <Header />
      <div className="profile">
        <div className="profile-head">
          <div className="profile-head-container">
            <div className="profile-head-cover"></div>
            <div className="profile-head-user">
              <div className="profile-avatar">
                <div></div>
              </div>
              <div className="profile-basic-info">
                <h3>Thủy Phước Thịnh</h3>
                <p>388 friends</p>
              </div>
              <div className="profile-actions">
                <button className="btn btn-friends">Friends</button>
                <button className="btn btn-message">Message</button>
              </div>
            </div>
            <div className="profile-head-tabs">
              <ul className="profile-tabs-list">
                <li className="profile-tab-item">
                  <span className="profile-tab-link active">Posts</span>
                </li>
                <li className="profile-tab-item">
                  <span className="profile-tab-link">Friends</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="profile-body">
          <div className="profile-friends">
            <div className="profile-friends-container">
              <div className="profile-friends-header">
                <span>Friends</span>
                <NavLink>See all friends</NavLink>
              </div>
              <div className="profile-friends-body">
                <div className="profile-friends-item">
                  <a className="profile-friends-link">
                    <span className="profile-friends-avatar"></span>
                    <span className="profile-friends-name">
                      Thủy Phước Thịnh
                    </span>
                  </a>
                </div>
                <div className="profile-friends-item">
                  <a className="profile-friends-link">
                    <span className="profile-friends-avatar"></span>
                    <span className="profile-friends-name">
                      Thủy Phước Thịnh
                    </span>
                  </a>
                </div>
                <div className="profile-friends-item">
                  <a className="profile-friends-link">
                    <span className="profile-friends-avatar"></span>
                    <span className="profile-friends-name">
                      Thủy Phước Thịnh
                    </span>
                  </a>
                </div>
                <div className="profile-friends-item">
                  <a className="profile-friends-link">
                    <span className="profile-friends-avatar"></span>
                    <span className="profile-friends-name">
                      Thủy Phước Thịnh
                    </span>
                  </a>
                </div>
                <div className="profile-friends-item">
                  <a className="profile-friends-link">
                    <span className="profile-friends-avatar"></span>
                    <span className="profile-friends-name">
                      Thủy Phước Thịnh
                    </span>
                  </a>
                </div>
                <div className="profile-friends-item">
                  <a className="profile-friends-link">
                    <span className="profile-friends-avatar"></span>
                    <span className="profile-friends-name">
                      Thủy Phước Thịnh
                    </span>
                  </a>
                </div>
                <div className="profile-friends-item">
                  <a className="profile-friends-link">
                    <span className="profile-friends-avatar"></span>
                    <span className="profile-friends-name">
                      Thủy Phước Thịnh
                    </span>
                  </a>
                </div>
                <div className="profile-friends-item">
                  <a className="profile-friends-link">
                    <span className="profile-friends-avatar"></span>
                    <span className="profile-friends-name">
                      Thủy Phước Thịnh
                    </span>
                  </a>
                </div>
                <div className="profile-friends-item">
                  <a className="profile-friends-link">
                    <span className="profile-friends-avatar"></span>
                    <span className="profile-friends-name">
                      Thủy Phước Thịnh
                    </span>
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
        </div>
      </div>
    </Fragment>
  );
}
