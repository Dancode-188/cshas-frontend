import React, { useState } from "react";
import "./SettingsForm.scss";
import ProfileSettings from "../ProfileSettings/ProfileSettings";
import NotificationSettings from "../NotificationSettings/NotificationSettings";

const SettingsForm = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const [profileSettings, setProfileSettings] = useState({
    name: "",
    email: "",
    // Add more profile settings fields as needed
  });
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: false,
    pushNotifications: false,
    // Add more notification settings fields as needed
  });

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const handleProfileSettingsChange = (field, value) => {
    setProfileSettings((prevSettings) => ({
      ...prevSettings,
      [field]: value,
    }));
  };

  const handleNotificationSettingsChange = (field, value) => {
    setNotificationSettings((prevSettings) => ({
      ...prevSettings,
      [field]: value,
    }));
  };

  const handleSave = () => {
    // Perform saving logic based on the active section
    if (activeSection === "profile") {
      // Save profile settings
      console.log("Profile settings saved:", profileSettings);
      // Perform API call or update the backend with the modified profile settings
    } else if (activeSection === "notifications") {
      // Save notification settings
      console.log("Notification settings saved:", notificationSettings);
      // Perform API call or update the backend with the modified notification settings
    }
  };

  return (
    <div className="settings-form">
      <div className="settings-tabs">
        <div
          className={`settings-tab ${
            activeSection === "profile" ? "active" : ""
          }`}
          onClick={() => handleSectionChange("profile")}
        >
          Profile
        </div>
        <div
          className={`settings-tab ${
            activeSection === "notifications" ? "active" : ""
          }`}
          onClick={() => handleSectionChange("notifications")}
        >
          Notifications
        </div>
      </div>
      <div className="settings-content">
        {activeSection === "profile" && (
          <ProfileSettings
            profileSettings={profileSettings}
            onSettingsChange={handleProfileSettingsChange}
          />
        )}
        {activeSection === "notifications" && (
          <NotificationSettings
            notificationSettings={notificationSettings}
            onSettingsChange={handleNotificationSettingsChange}
          />
        )}
      </div>
      <button className="save-button" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default SettingsForm;
