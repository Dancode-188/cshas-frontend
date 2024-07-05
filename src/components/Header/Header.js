import React, { useState, useEffect } from "react";
import "./Header.scss";
import logo from "../../assets/logo.png";
import defaultUserProfile from "../../assets/user-profile.jpg";
import notificationIcon from "../../assets/notification-icon.svg";
import userService from "../../services/userService";
import notificationService from "../../services/notificationService";

const Header = ({ toggleNav }) => {
  const [userProfile, setUserProfile] = useState(null);
  const [notificationCount, setNotificationCount] = useState(0);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const profile = await userService.fetchUserProfile();
        setUserProfile(profile);
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
      }
    };

    const fetchNotifications = async () => {
      try {
        const notifications = await notificationService.getNotifications();
        setNotificationCount(notifications.length);
      } catch (error) {
        console.error("Failed to fetch notifications:", error);
      }
    };

    fetchUserProfile();
    fetchNotifications();
  }, []);

  return (
    <header className="header">
      <div className="header-left">
        <button className="nav-toggle" onClick={toggleNav}>
          <span className="toggle-icon"></span>
        </button>
        <div className="logo-container">
          <img src={logo} alt="CSHAS Logo" className="logo" />
        </div>
      </div>
      <div className="user-profile">
        <img
          src={userProfile?.profilePicture || defaultUserProfile}
          alt="User Profile"
          className="profile-picture"
        />
        <span className="profile-name">
          {userProfile?.name || "Loading..."}
        </span>
        <div className="notification-icons">
          <img
            src={notificationIcon}
            alt="Notification"
            className="notification-icon"
          />
          <span className="notification-badge">{notificationCount}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
