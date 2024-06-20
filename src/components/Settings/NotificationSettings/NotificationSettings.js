import React, { useState } from "react";
import "./NotificationSettings.scss";
import notificationService from "../../../services/notificationService";

const NotificationSettings = ({ notificationSettings, onSettingsChange }) => {
  const [deviceAlerts, setDeviceAlerts] = useState(
    notificationSettings.deviceAlerts
  );
  const [automationTriggers, setAutomationTriggers] = useState(
    notificationSettings.automationTriggers
  );
  const [emailNotifications, setEmailNotifications] = useState(
    notificationSettings.emailNotifications
  );
  const [pushNotifications, setPushNotifications] = useState(
    notificationSettings.pushNotifications
  );
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleDeviceAlertsChange = (e) => {
    setDeviceAlerts(e.target.checked);
    onSettingsChange("deviceAlerts", e.target.checked);
  };

  const handleAutomationTriggersChange = (e) => {
    setAutomationTriggers(e.target.checked);
    onSettingsChange("automationTriggers", e.target.checked);
  };

  const handleEmailNotificationsChange = (e) => {
    setEmailNotifications(e.target.checked);
    onSettingsChange("emailNotifications", e.target.checked);
  };

  const handlePushNotificationsChange = (e) => {
    setPushNotifications(e.target.checked);
    onSettingsChange("pushNotifications", e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await notificationService.updateNotificationSettings({
        deviceAlerts,
        automationTriggers,
        emailNotifications,
        pushNotifications,
      });
      setSuccessMessage("Notification settings updated successfully");
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Failed to update notification settings");
    }
  };

  return (
    <div className="notification-settings">
      <h2 className="section-title">Notification Settings</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="deviceAlerts">Device Alerts:</label>
          <input
            type="checkbox"
            id="deviceAlerts"
            checked={deviceAlerts}
            onChange={handleDeviceAlertsChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="automationTriggers">Automation Triggers:</label>
          <input
            type="checkbox"
            id="automationTriggers"
            checked={automationTriggers}
            onChange={handleAutomationTriggersChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="emailNotifications">Email Notifications:</label>
          <input
            type="checkbox"
            id="emailNotifications"
            checked={emailNotifications}
            onChange={handleEmailNotificationsChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pushNotifications">Push Notifications:</label>
          <input
            type="checkbox"
            id="pushNotifications"
            checked={pushNotifications}
            onChange={handlePushNotificationsChange}
          />
        </div>
        <button type="submit" className="submit-button">
          Update Notification Settings
        </button>
      </form>
    </div>
  );
};

export default NotificationSettings;
