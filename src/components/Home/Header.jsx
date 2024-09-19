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
import { useEffect, useRef, useState } from "react";

library.add(faSearch, faHome, faUserFriends, faUser, faMessage, faList);

export default function Header() {
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const searchMobileRef = useRef(null);
  const searchMobileIconRef = useRef(null);
  const menuMobileRef = useRef(null);
  const menuMobileIconRef = useRef(null);
  const accountIconRef = useRef(null);
  const menuAccountRef = useRef(null);

  const handleCloseSearchMobile = (e) => {
    const element = e.target;
    if (!showMobileSearch) {
      if (
        element === searchMobileIconRef.current ||
        element.closest("span") === searchMobileIconRef.current
      ) {
        setShowMobileSearch(true);
      }
    } else {
      if (e.target !== searchMobileRef.current) setShowMobileSearch(false);
    }
  };

  const handleCloseMenuMobile = (e) => {
    const element = e.target;
    if (!showMobileMenu) {
      if (
        element === menuMobileIconRef.current ||
        element.closest("li") === menuMobileIconRef.current
      ) {
        setShowMobileMenu(true);
      }
    } else {
      if (e.target !== menuMobileRef.current) setShowMobileMenu(false);
    }
  };

  const handleCLoseAccountMenu = (e) => {
    const element = e.target;
    if (!showAccount) {
      if (
        element === accountIconRef.current ||
        element.closest("li") === accountIconRef.current
      ) {
        setShowAccount(true);
      }
    } else {
      if (e.target !== menuAccountRef.current) setShowAccount(false);
    }
  }
  
  useEffect(() => {
    window.addEventListener("click", handleCloseSearchMobile);
    window.addEventListener("click", handleCloseMenuMobile);
    window.addEventListener("click", handleCLoseAccountMenu);
    return () => {
      removeEventListener("click", handleCloseSearchMobile);
      removeEventListener("click", handleCloseMenuMobile);
      removeEventListener("click", handleCLoseAccountMenu);
    };
  });

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
            <div className="header-search--mobile">
              <span ref={searchMobileIconRef}>
                <FontAwesomeIcon icon="search" className="search-icon" />
              </span>
              {showMobileSearch && (
                <input
                  type="search"
                  name="keyword"
                  id="keyword"
                  placeholder="Search"
                  ref={searchMobileRef}
                />
              )}
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
              <li className="header-item d-flex d-sm-none" ref={menuMobileIconRef}>
                <NavLink className="header-link">
                  <FontAwesomeIcon icon="list" />
                </NavLink>
                {showMobileMenu && (
                  <div className="header-menu--mobile" ref={menuMobileRef}>
                    <ul className="header-menu--mobile-list">
                      <li className="header-menu--mobile-item">
                        <NavLink className="header-menu--mobile-link">
                          <FontAwesomeIcon icon="home" />
                          <p>Home</p>
                        </NavLink>
                      </li>
                      <li className="header-menu--mobile-item">
                        <NavLink className="header-menu--mobile-link">
                          <FontAwesomeIcon icon="user-friends" />
                          <p>Users</p>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li className="header-item">
                <NavLink className="header-link">
                  <FontAwesomeIcon icon="message" />
                </NavLink>
              </li>
              <li className="header-item" ref={accountIconRef}>
                <NavLink className="header-link">
                  <FontAwesomeIcon icon="user" />
                </NavLink>
                {
                  showAccount && <div className="header-account" ref={menuAccountRef}>
                    <ul className="header-account-list">
                      <li className="header-account-item">
                        <NavLink className="header-account-link">
                          Profile
                        </NavLink>
                      </li>
                      <li className="header-account-item">
                        <NavLink className="header-account-link">
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                }
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
