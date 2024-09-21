import { Fragment, useEffect } from "react";
import Header from "../../components/Home/Header";
import "./Profile.scss";
import { useParams, useSearchParams } from "react-router-dom";
import ProfilePostTab from "../../components/Profile/ProfilePostTab";
import ProfileFriendsTab from "../../components/Profile/ProfileFriendsTab";
import ProfileSettingsTab from "../../components/Profile/ProfileSettingsTab";
import { useDispatch, useSelector } from "react-redux";
import { selectTabAction } from "../../store/actions/tabActions";
import { PROFILE_TAB } from "../../config/constant";
import { userDetailAction } from "../../store/actions/userActions";

export default function Profile() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { userId } = useParams();
  const dispatch = useDispatch();
  const selectedTab = useSelector((state) => state.tabReducer.selectedTab);
  const userDetail = useSelector(state => state.userReducer.userDetail);
  console.log(userDetail);
  
  useEffect(() => {
    dispatch(userDetailAction(userId));
  }, []);

  const handleChangeTab = (value) => {
    setSearchParams({ tab: value });
    dispatch(selectTabAction(value));
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
                <h3>{userDetail?.username}</h3>
                <p>{userDetail?.listFriends.length} friends</p>
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
                      selectedTab === PROFILE_TAB.POST ? "active" : ""
                    }`}
                    onClick={() => handleChangeTab("posts")}
                  >
                    Posts
                  </span>
                </li>
                <li className="profile-tab-item">
                  <span
                    className={`profile-tab-link ${
                      selectedTab === PROFILE_TAB.FRIENDS ? "active" : ""
                    }`}
                    onClick={() => handleChangeTab("friends")}
                  >
                    Friends
                  </span>
                </li>
                <li className="profile-tab-item">
                  <span
                    className={`profile-tab-link ${
                      selectedTab === PROFILE_TAB.SETTINGS ? "active" : ""
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
          {selectedTab === PROFILE_TAB.POST && <ProfilePostTab />}
          {selectedTab === PROFILE_TAB.FRIENDS && <ProfileFriendsTab />}
          {selectedTab === PROFILE_TAB.SETTINGS && <ProfileSettingsTab />}
        </div>
      </div>
    </Fragment>
  );
}
