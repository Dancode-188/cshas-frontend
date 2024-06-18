import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./DeviceList.scss";
import { fetchDevices } from "../../services/deviceService";
import DeviceItem from "../DeviceItem/DeviceItem";

const DeviceList = () => {
  const [devices, setDevices] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const devicesData = await fetchDevices();
      setDevices(devicesData);
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleTypeFilter = (event) => {
    setSelectedType(event.target.value);
  };

  const handleRoomFilter = (event) => {
    setSelectedRoom(event.target.value);
  };

  const filteredDevices = devices.filter((device) => {
    const matchesSearch = device.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "" || device.type === selectedType;
    const matchesRoom = selectedRoom === "" || device.room === selectedRoom;
    return matchesSearch && matchesType && matchesRoom;
  });

  return (
    <div className="device-list">
      <div className="device-list-header">
        <input
          type="text"
          placeholder="Search devices..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-input"
        />
        <div className="filter-options">
          <select
            value={selectedType}
            onChange={handleTypeFilter}
            className="filter-select"
          >
            <option value="">All Types</option>
            <option value="light">Light</option>
            <option value="thermostat">Thermostat</option>
            <option value="lock">Lock</option>
          </select>
          <select
            value={selectedRoom}
            onChange={handleRoomFilter}
            className="filter-select"
          >
            <option value="">All Rooms</option>
            <option value="living-room">Living Room</option>
            <option value="bedroom">Bedroom</option>
            <option value="kitchen">Kitchen</option>
          </select>
        </div>
      </div>
      <div className="device-list-grid">
        {filteredDevices.map((device) => (
          <DeviceItem key={device.id} device={device} />
        ))}
      </div>
      <Link to="/devices/add" className="add-device-button">
        Add Device
      </Link>
    </div>
  );
};

export default DeviceList;
