import React from "react";
import "./AutomationStatus.scss";

const AutomationStatus = ({ automations }) => {
  return (
    <div className="automation-status">
      <h3 className="automation-status-title">Automation Status</h3>
      <ul className="automation-list">
        {automations.map((automation) => (
          <li key={automation.id} className="automation-item">
            <span className="automation-name">{automation.name}</span>
            <span
              className={`automation-status ${
                automation.isActive ? "active" : "inactive"
              }`}
            >
              {automation.isActive ? "Active" : "Inactive"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AutomationStatus;
