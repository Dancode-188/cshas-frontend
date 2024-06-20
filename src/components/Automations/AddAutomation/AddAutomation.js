import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddAutomation.scss";
import { createAutomation } from "../../../services/automationService";

const AddAutomation = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    trigger: "",
    action: "",
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
        await createAutomation(formData);
        navigate("/automations");
      } catch (error) {
        console.error("Failed to create automation:", error);
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
      errors.name = "Automation name is required";
    }
    if (!formData.trigger) {
      errors.trigger = "Trigger is required";
    }
    if (!formData.action) {
      errors.action = "Action is required";
    }
    return errors;
  };

  return (
    <div className="add-automation">
      <div className="add-automation-header">
        <h2>Add Automation</h2>
        <button
          className="close-button"
          onClick={() => navigate("/automations")}
        >
          Close
        </button>
      </div>
      <form className="add-automation-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Automation Name:</label>
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
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="trigger">Trigger:</label>
          <select
            id="trigger"
            name="trigger"
            value={formData.trigger}
            onChange={handleChange}
            className={errors.trigger ? "error" : ""}
          >
            <option value="">Select Trigger</option>
            <option value="device_state">Device State</option>
            <option value="schedule">Schedule</option>
          </select>
          {errors.trigger && (
            <span className="error-message">{errors.trigger}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="action">Action:</label>
          <select
            id="action"
            name="action"
            value={formData.action}
            onChange={handleChange}
            className={errors.action ? "error" : ""}
          >
            <option value="">Select Action</option>
            <option value="turn_on">Turn On</option>
            <option value="turn_off">Turn Off</option>
            <option value="set_value">Set Value</option>
          </select>
          {errors.action && (
            <span className="error-message">{errors.action}</span>
          )}
        </div>
        <button type="submit" className="submit-button" disabled={isLoading}>
          {isLoading ? "Creating..." : "Create Automation"}
        </button>
      </form>
    </div>
  );
};

export default AddAutomation;
