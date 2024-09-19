import { Fragment } from "react";
import Header from "../../components/Home/Header";
import "./Profile.scss";

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
            <div className="profile-head-tabs"></div>
          </div>
        </div>
        <div className="profile-body"></div>
      </div>
    </Fragment>
  );
}
