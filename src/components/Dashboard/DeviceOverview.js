import React from "react";
import "./DeviceOverview.scss";
import { FaLightbulb, FaThermometerHalf, FaLock } from "react-icons/fa";

const DeviceOverview = ({ devices }) => {
  const getDeviceIcon = (deviceType) => {
    switch (deviceType) {
      case "light":
        return <FaLightbulb />;
      case "thermostat":
        return <FaThermometerHalf />;
      case "lock":
        return <FaLock />;
      default:
        return null;
    }
  };

  return (
    <div className="device-overview">
      <h3 className="device-overview-title">Device Overview</h3>
      <div className="device-list">
        {devices.map((device) => (
          <div key={device.id} className="device-item">
            <div className="device-icon">{getDeviceIcon(device.type)}</div>
            <div className="device-details">
              <span className="device-name">{device.name}</span>
              <span
                className={`device-status ${
                  device.isActive ? "active" : "inactive"
                }`}
              >
                {device.isActive ? "Active" : "Inactive"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeviceOverview;
