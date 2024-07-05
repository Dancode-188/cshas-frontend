import React, { useState, useEffect } from "react";
import "./QuickActions.scss";
import {
  fetchDevices,
  controlDevice,
  updateDevice,
} from "../../services/deviceService";

const QuickActions = () => {
  const [devices, setDevices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [thermostatTemp, setThermostatTemp] = useState(22);

  useEffect(() => {
    loadDevices();
  }, []);

  const loadDevices = async () => {
    try {
      setIsLoading(true);
      const fetchedDevices = await fetchDevices();
      setDevices(fetchedDevices);
      setIsLoading(false);
    } catch (error) {
      setError("Failed to fetch devices. Please try again later.");
      setIsLoading(false);
    }
  };

  const handleQuickAction = async (action) => {
    try {
      switch (action) {
        case "turnOnLights":
          await turnOnLights();
          break;
        case "turnOffLights":
          await turnOffLights();
          break;
        case "adjustThermostat":
          await adjustThermostat();
          break;
        default:
          break;
      }
    } catch (error) {
      console.error(`Error performing action ${action}:`, error);
      setError(`Failed to perform ${action}. Please try again.`);
    }
  };

  const turnOnLights = async () => {
    const lightDevices = devices.filter((device) => device.type === "light");
    for (const device of lightDevices) {
      await controlDevice(device.id, { state: "on" });
    }
    console.log("Turning on lights");
  };

  const turnOffLights = async () => {
    const lightDevices = devices.filter((device) => device.type === "light");
    for (const device of lightDevices) {
      await controlDevice(device.id, { state: "off" });
    }
    console.log("Turning off lights");
  };

  const adjustThermostat = async () => {
    const thermostat = devices.find((device) => device.type === "thermostat");
    if (thermostat) {
      await updateDevice(thermostat.id, { temperature: thermostatTemp });
      console.log(`Adjusting thermostat to ${thermostatTemp}°C`);
    } else {
      console.log("No thermostat device found");
    }
  };

  const handleThermostatTempChange = (e) => {
    setThermostatTemp(Number(e.target.value));
  };

  if (isLoading) {
    return <div className="quick-actions">Loading devices...</div>;
  }

  if (error) {
    return <div className="quick-actions error">{error}</div>;
  }

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
        <div className="thermostat-control">
          <input
            type="number"
            value={thermostatTemp}
            onChange={handleThermostatTempChange}
            min="15"
            max="30"
            step="0.5"
          />
          <span>°C</span>
          <button
            className="action-item"
            onClick={() => handleQuickAction("adjustThermostat")}
          >
            Adjust Thermostat
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
