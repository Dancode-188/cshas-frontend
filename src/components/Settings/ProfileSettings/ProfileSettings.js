import React, { useState } from "react";
import "./ProfileSettings.scss";
import userService from "../../services/userService";

const ProfileSettings = ({ profileSettings, onSettingsChange }) => {
  const [name, setName] = useState(profileSettings.name);
  const [email, setEmail] = useState(profileSettings.email);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
    onSettingsChange("name", e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    onSettingsChange("email", e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }
    try {
      await userService.updateProfile({ name, email, password });
      setSuccessMessage("Profile updated successfully");
      setPassword("");
      setConfirmPassword("");
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Failed to update profile");
    }
  };

  return (
    <div className="profile-settings">
      <h2 className="section-title">Profile Settings</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <button type="submit" className="submit-button">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default ProfileSettings;
