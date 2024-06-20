import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddDevice.scss";
import { addDevice } from "../../../services/deviceService";

const AddDevice = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    room: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setIsLoading(true);
      try {
        await addDevice(formData);
        navigate("/devices");
      } catch (error) {
        console.error("Failed to add device:", error);
        // Display error feedback to the user
      }
      setIsLoading(false);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) {
      errors.name = "Device name is required";
    }
    if (!formData.type) {
      errors.type = "Device type is required";
    }
    if (!formData.room) {
      errors.room = "Room is required";
    }
    return errors;
  };

  return (
    <div className="add-device">
      <div className="add-device-header">
        <h2>Add Device</h2>
        <button className="close-button" onClick={() => navigate("/devices")}>
          Close
        </button>
      </div>
      <form className="add-device-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Device Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "error" : ""}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="type">Device Type:</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className={errors.type ? "error" : ""}
          >
            <option value="">Select Type</option>
            <option value="light">Light</option>
            <option value="thermostat">Thermostat</option>
            <option value="lock">Lock</option>
          </select>
          {errors.type && <span className="error-message">{errors.type}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="room">Room:</label>
          <input
            type="text"
            id="room"
            name="room"
            value={formData.room}
            onChange={handleChange}
            className={errors.room ? "error" : ""}
          />
          {errors.room && <span className="error-message">{errors.room}</span>}
        </div>
        <button type="submit" className="submit-button" disabled={isLoading}>
          {isLoading ? "Adding..." : "Add Device"}
        </button>
      </form>
    </div>
  );
};

export default AddDevice;
