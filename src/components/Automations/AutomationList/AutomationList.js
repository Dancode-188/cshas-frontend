import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AutomationList.scss";
import { fetchAutomations } from "../../services/automationService";
import AutomationItem from "../AutomationItem/AutomationItem";

const AutomationList = () => {
  const [automations, setAutomations] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const automationsData = await fetchAutomations();
      setAutomations(automationsData);
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleTypeFilter = (event) => {
    setSelectedType(event.target.value);
  };

  const handleStatusFilter = (event) => {
    setSelectedStatus(event.target.value);
  };

  const filteredAutomations = automations.filter((automation) => {
    const matchesSearch = automation.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "" || automation.type === selectedType;
    const matchesStatus =
      selectedStatus === "" || automation.enabled.toString() === selectedStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div className="automation-list">
      <div className="automation-list-header">
        <input
          type="text"
          placeholder="Search automations..."
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
            <option value="time">Time-based</option>
            <option value="event">Event-based</option>
          </select>
          <select
            value={selectedStatus}
            onChange={handleStatusFilter}
            className="filter-select"
          >
            <option value="">All Statuses</option>
            <option value="true">Enabled</option>
            <option value="false">Disabled</option>
          </select>
        </div>
      </div>
      <table className="automation-list-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredAutomations.map((automation) => (
            <AutomationItem key={automation.id} automation={automation} />
          ))}
        </tbody>
      </table>
      <Link to="/automations/add" className="add-automation-button">
        Add Automation
      </Link>
    </div>
  );
};

export default AutomationList;
