import React, { useState, useEffect } from "react";
import "./AutomationStatus.scss";
import { fetchAutomations } from "../../services/automationService";

const AutomationStatus = () => {
  const [automations, setAutomations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAutomations = async () => {
      try {
        setIsLoading(true);
        const data = await fetchAutomations();
        setAutomations(data);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to fetch automations. Please try again later.");
        setIsLoading(false);
      }
    };

    loadAutomations();
  }, []);

  if (isLoading) {
    return <div className="automation-status">Loading automations...</div>;
  }

  if (error) {
    return <div className="automation-status error">{error}</div>;
  }

  if (automations.length === 0) {
    return <div className="automation-status">No automations available.</div>;
  }

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
