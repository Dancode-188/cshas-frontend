import React from "react";
import { Link } from "react-router-dom";
import "./AutomationItem.scss";
import { updateAutomation } from "../../../services/automationService";

const AutomationItem = ({ automation }) => {
  const { id, name, description, trigger, action, enabled } = automation;

  const handleToggle = async () => {
    try {
      await updateAutomation(id, { ...automation, enabled: !enabled });
    } catch (error) {
      console.error("Failed to update automation:", error);
    }
  };

  return (
    <tr className="automation-item">
      <td>
        <div className="automation-details">
          <h3 className="automation-name">{name}</h3>
          <p className="automation-description">{description}</p>
        </div>
      </td>
      <td>
        <div className="automation-trigger">
          <strong>Trigger:</strong> {trigger}
        </div>
      </td>
      <td>
        <div className="automation-action">
          <strong>Action:</strong> {action}
        </div>
      </td>
      <td>
        <div className="automation-controls">
          <label className="toggle-switch">
            <input type="checkbox" checked={enabled} onChange={handleToggle} />
            <span className="slider round"></span>
          </label>
          <Link to={`/automations/edit/${id}`} className="edit-button">
            Edit
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default AutomationItem;
