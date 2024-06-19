import React from "react";
import "./QuickActions.scss";

const QuickActions = () => {
  const handleQuickAction = (action) => {
    switch (action) {
      case "turnOnLights":
        // Logic to turn on lights
        console.log("Turning on lights");
        break;
      case "turnOffLights":
        // Logic to turn off lights
        console.log("Turning off lights");
        break;
      case "adjustThermostat":
        // Logic to adjust thermostat
        console.log("Adjusting thermostat");
        break;
      default:
        break;
    }
  };

  return (
    <div className="quick-actions">
      <h3 className="quick-actions-title">Quick Actions</h3>
      <div className="action-list">
        <button
          className="action-item"
          onClick={() => handleQuickAction("turnOnLights")}
        >
          Turn On Lights
        </button>
        <button
          className="action-item"
          onClick={() => handleQuickAction("turnOffLights")}
        >
          Turn Off Lights
        </button>
        <button
          className="action-item"
          onClick={() => handleQuickAction("adjustThermostat")}
        >
          Adjust Thermostat
        </button>
      </div>
    </div>
  );
};

export default QuickActions;
