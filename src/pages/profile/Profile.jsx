import { Fragment, useEffect, useState } from "react";
import Header from "../../components/Home/Header";
import "./Profile.scss";
import { useSearchParams } from "react-router-dom";
import ProfilePostTab from "../../components/Profile/ProfilePostTab";
import ProfileFriendsTab from "../../components/Profile/ProfileFriendsTab";
import ProfileSettingsTab from "../../components/Profile/ProfileSettingsTab";

export default function Profile() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [tabName, setTabName] = useState("posts");

  useEffect(() => {
    setSearchParams({ "tab": tabName });
  }, []);

  const handleChangeTab = (value) => {
    setSearchParams({ "tab": value });
    setTabName(value);
  };

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
                  <span
                    className={`profile-tab-link ${
                      tabName === "posts" ? "active" : ""
                    }`}
                    onClick={() => handleChangeTab("posts")}
                  >
                    Posts
                  </span>
                </li>
                <li className="profile-tab-item">
                  <span
                    className={`profile-tab-link ${
                      tabName === "friends" ? "active" : ""
                    }`}
                    onClick={() => handleChangeTab("friends")}
                  >
                    Friends
                  </span>
                </li>
                <li className="profile-tab-item">
                  <span
                    className={`profile-tab-link ${
                      tabName === "settings" ? "active" : ""
                    }`}
                    onClick={() => handleChangeTab("settings")}
                  >
                    Settings
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="profile-body">
          {tabName === "posts" && <ProfilePostTab />}
          {tabName === "friends" && <ProfileFriendsTab />}
          {tabName === "settings" && <ProfileSettingsTab />}
        </div>
      </div>
    </Fragment>
  );
}
