import { Fragment, useEffect, useState } from "react";
import Header from "../../components/Home/Header";
import "./Profile.scss";
import { useParams, useSearchParams } from "react-router-dom";
import ProfilePostTab from "../../components/Profile/ProfilePostTab";
import ProfileFriendsTab from "../../components/Profile/ProfileFriendsTab";
import ProfileSettingsTab from "../../components/Profile/ProfileSettingsTab";
import { useDispatch, useSelector } from "react-redux";
import { selectTabAction } from "../../store/actions/tabActions";
import { PROFILE_TAB, STATUS_CODE } from "../../config/constant";
import { userDetailAction } from "../../store/actions/userActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { userService } from "../../services/UserService";
import { toast } from "react-toastify";
import Zoom from "react-medium-image-zoom";
import { Button } from "antd";
import Skeleton from "react-loading-skeleton";
import { setPostsByUserAction } from "../../store/actions/postActions";

library.add(faCamera);

export default function Profile() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { userId } = useParams();
  const dispatch = useDispatch();
  const selectedTab = useSelector((state) => state.tabReducer.selectedTab);
  const userDetail = useSelector((state) => state.userReducer.userDetail);
  const userLogin = useSelector((state) => state.userReducer.userLogin);
  const [blobImage, setBlobImage] = useState(null);
  const [previewCover, setPreviewCover] = useState("");
  const [previewAvatar, setPreviewAvatar] = useState("");
  const [saveUpload, setSaveUpload] = useState({
    isUpload: false,
    type: "",
  });
  const showLoading = useSelector((state) => state.loadingReducer.showLoading);
  const [uploadLoading, setUploadLoading] = useState(false);

  useEffect(() => {
    setSearchParams({ tab: selectedTab });
    dispatch(userDetailAction(userId));
    dispatch(selectTabAction(PROFILE_TAB.POST));
  }, [userId]);

  const handleChangeTab = (value) => {
    setSearchParams({ tab: value });
    dispatch(selectTabAction(value));
  };

  const handleUploadImage = (e) => {
    setSaveUpload({ isUpload: false, type: "" });
    const { name } = e.target;
    const file = e.target.files[0];
    setBlobImage(file);
    const url = URL.createObjectURL(file);
    setSaveUpload({ isUpload: true, type: name });
    if (name === "avatar") {
      setPreviewAvatar(url);
    } else if (name === "cover") {
      setPreviewCover(url);
    }
  };

  const displayCover = () => {
    let imgSrc = userDetail.cover;
    if (previewCover) imgSrc = previewCover;
    return imgSrc;
  };

  const displayAvatar = () => {
    let imgSrc = userDetail.avatar;
    if (previewAvatar) imgSrc = previewAvatar;
    return imgSrc;
  };

  const handleCancelUpload = () => {
    setSaveUpload({ isUpload: false, type: "" });
    setPreviewAvatar("");
    setPreviewCover("");
  };

  const handleSaveImage = async () => {
    if (saveUpload.isUpload && blobImage) {
      const imageType = saveUpload.type;
      const formData = new FormData();
      formData.append("userId", userDetail.id);
      formData.append(imageType, blobImage);
      try {
        setUploadLoading(true);
        let result;
        if (imageType === "avatar") {
          result = await userService.updateAvatar(formData);
        } else if (imageType === "cover") {
          result = await userService.updateCover(formData);
        }
        if (result.status === STATUS_CODE.SUCCESS) {
          toast.success(result.data.message);
          setSaveUpload({ isUpload: false, type: "" });
          dispatch(userDetailAction(userDetail.id));
        }
      } catch (error) {
        toast.error(error.data?.message);
      } finally {
        setUploadLoading(false);
      }
    }
  };

  return (
    <Fragment>
      <Header />
      {saveUpload.isUpload && (
        <div className="save-upload-modal">
          <Button type="primary" danger onClick={handleCancelUpload}>
            Cancel
          </Button>
          <Button
            loading={uploadLoading}
            type="primary"
            onClick={handleSaveImage}
          >
            Save
          </Button>
        </div>
      )}
      <div className="profile">
        <div className="profile-head">
          <div className="profile-head-container">
            <div className="profile-head-cover">
              {showLoading ? (
                <Skeleton width={"100%"} height={"100%"} />
              ) : (
                <>
                  <Zoom style={{ height: "100%" }}>
                    <img src={displayCover()} alt={displayCover()} />
                  </Zoom>
                  {!saveUpload.isUpload && userDetail.id === userLogin.id && (
                    <div className="profile-cover-button">
                      <label htmlFor="cover" className="btn">
                        <FontAwesomeIcon icon="fa-camera" />
                        <span className="d-md-inline d-none">Change cover</span>
                      </label>
                      <input
                        type="file"
                        name="cover"
                        id="cover"
                        hidden
                        onChange={handleUploadImage}
                      />
                    </div>
                  )}
                </>
              )}
            </div>
            <div className="profile-head-user">
              <div className="profile-avatar">
                {showLoading ? (
                  <Skeleton
                    width={"180px"}
                    height={"180px"}
                    borderRadius={"50%"}
                    style={{ border: "5px solid white" }}
                  />
                ) : (
                  <>
                    <div
                      className="profile-avatar-frame"
                      style={{
                        background: `url(${displayAvatar()}), white`,
                      }}
                    >
                      {!saveUpload.isUpload &&
                        userDetail.id === userLogin.id && (
                          <div className="profile-avatar-button">
                            <label htmlFor="avatar" className="btn">
                              <FontAwesomeIcon icon="fa-camera" />
                            </label>
                            <input
                              type="file"
                              name="avatar"
                              id="avatar"
                              hidden
                              onChange={handleUploadImage}
                            />
                          </div>
                        )}
                    </div>
                  </>
                )}
              </div>
              <div className="profile-basic-info">
                <h3>{userDetail?.username}</h3>
                {/* <p>{userDetail?.listFriends.length} friends</p> */}
              </div>
              {userLogin.id !== userDetail.id && (
                <div className="profile-actions">
                  <button className="btn btn-friends">Friends</button>
                  <button className="btn btn-message">Message</button>
                </div>
              )}
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
                {userLogin.id === userDetail.id && (
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
                )}
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
