import React, { useState, useEffect } from "react";
import "./DeviceOverview.scss";
import { FaLightbulb, FaThermometerHalf, FaLock } from "react-icons/fa";
import { fetchDevices } from "../../services/deviceService";

const DeviceOverview = () => {
  const [devices, setDevices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadDevices = async () => {
      try {
        setIsLoading(true);
        const fetchedDevices = await fetchDevices();
        setDevices(fetchedDevices);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to fetch devices. Please try again later.");
        setIsLoading(false);
      }
    };

    loadDevices();
  }, []);

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

  if (isLoading) {
    return <div className="device-overview">Loading devices...</div>;
  }

  if (error) {
    return <div className="device-overview error">{error}</div>;
  }

  return (
    <div className="device-overview">
      <h3 className="device-overview-title">Device Overview</h3>
      <div className="device-list">
        {devices.length === 0 ? (
          <p>No devices found.</p>
        ) : (
          devices.map((device) => (
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
          ))
        )}
      </div>
    </div>
  );
};

export default DeviceOverview;
