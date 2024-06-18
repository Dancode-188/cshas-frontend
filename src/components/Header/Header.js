import React from "react";
import "./Header.scss";
import logo from "../../assets/logo.png";
import userProfile from "../../assets/user-profile.jpg";
import notificationIcon from "../../assets/notification-icon.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="CSHAS Logo" className="logo" />
      </div>
      <div className="user-profile">
        <img src={userProfile} alt="User Profile" className="profile-picture" />
        <span className="profile-name">John Doe</span>
        <div className="notification-icons">
          <img
            src={notificationIcon}
            alt="Notification"
            className="notification-icon"
          />
          <span className="notification-badge">3</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
