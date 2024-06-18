import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DeviceItem.scss";
import { controlDevice } from "../../services/deviceService";
import deviceIconLight from "../../assets/device-icon-light.svg";
import deviceIconThermostat from "../../assets/device-icon-thermostat.svg";
import deviceIconLock from "../../assets/device-icon-lock.svg";

const DeviceItem = ({ device }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleToggle = async () => {
    setIsLoading(true);
    const command = device.isOn ? "turn_off" : "turn_on";
    await controlDevice(device.id, command);
    setIsLoading(false);
  };

  const getDeviceIcon = () => {
    switch (device.type) {
      case "light":
        return deviceIconLight;
      case "thermostat":
        return deviceIconThermostat;
      case "lock":
        return deviceIconLock;
      default:
        return null;
    }
  };

  return (
    <div className="device-item">
      <div className="device-icon">
        <img src={getDeviceIcon()} alt={device.type} />
      </div>
      <div className="device-details">
        <h3 className="device-name">{device.name}</h3>
        <p className="device-type">{device.type}</p>
        <p className={`device-status ${device.isOn ? "on" : "off"}`}>
          {device.isOn ? "On" : "Off"}
        </p>
      </div>
      <div className="device-controls">
        <button
          className={`toggle-button ${device.isOn ? "on" : "off"}`}
          onClick={handleToggle}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : device.isOn ? "Turn Off" : "Turn On"}
        </button>
        <Link to={`/devices/edit/${device.id}`} className="edit-button">
          Edit
        </Link>
      </div>
    </div>
  );
};

export default DeviceItem;
