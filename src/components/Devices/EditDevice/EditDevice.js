import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditDevice.scss";
import { fetchDeviceById, updateDevice } from "../../../services/deviceService";

const EditDevice = () => {
  const navigate = useNavigate();
  const { deviceId } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    room: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDevice = async () => {
      try {
        const device = await fetchDeviceById(deviceId);
        setFormData(device);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch device:", error);
        navigate("/devices");
      }
    };

    fetchDevice();
  }, [deviceId, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setIsLoading(true);
      try {
        await updateDevice(deviceId, formData);
        navigate("/devices");
      } catch (error) {
        console.error("Failed to update device:", error);
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="edit-device">
      <div className="edit-device-header">
        <h2>Edit Device</h2>
        <button className="close-button" onClick={() => navigate("/devices")}>
          Close
        </button>
      </div>
      <form className="edit-device-form" onSubmit={handleSubmit}>
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
          {isLoading ? "Updating..." : "Update Device"}
        </button>
      </form>
    </div>
  );
};

export default EditDevice;
