import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faHome,
  faUserFriends,
  faUser,
  faMessage,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";

library.add(faSearch, faHome, faUserFriends, faUser, faMessage, faList);

export default function Header() {
  return (
    <div className="header">
      <div className="container-fluid">
        <div className="header-container">
          <div className="header-left">
            <span className="header-logo">
              <NavLink to={"/"}>TPT</NavLink>
            </span>
            <div className="header-search">
              <FontAwesomeIcon icon="search" />
              <input
                type="search"
                name="keyword"
                id="keyword"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="header-middle d-sm-block d-none">
            <ul className="header-list">
              <li className="header-item">
                <NavLink className="header-link">
                  <FontAwesomeIcon icon="home" />
                </NavLink>
              </li>
              <li className="header-item">
                <NavLink className="header-link">
                  <FontAwesomeIcon icon="user-friends" />
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="header-right">
            <ul className="header-list">
              <li className="header-item d-flex d-sm-none">
                <NavLink className="header-link">
                  <FontAwesomeIcon icon="list" />
                </NavLink>
              </li>
              <li className="header-item">
                <NavLink className="header-link">
                  <FontAwesomeIcon icon="message" />
                </NavLink>
              </li>
              <li className="header-item">
                <NavLink className="header-link">
                  <FontAwesomeIcon icon="user" />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
