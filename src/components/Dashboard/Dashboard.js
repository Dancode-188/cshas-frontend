import React, { useState, useEffect } from "react";
import "./Dashboard.scss";
import DeviceOverview from "./DeviceOverview";
import AutomationStatus from "./AutomationStatus";
import EnergyConsumption from "./EnergyConsumption";
import QuickActions from "./QuickActions";
import { fetchDevices } from "../../services/deviceService";
import { fetchAutomations } from "../../services/automationService";
import { fetchEnergyData } from "../../services/energyService";

const Dashboard = () => {
  const [devices, setDevices] = useState([]);
  const [automations, setAutomations] = useState([]);
  const [energyData, setEnergyData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const devicesData = await fetchDevices();
        const automationsData = await fetchAutomations();
        const energyData = await fetchEnergyData();
        setDevices(devicesData);
        setAutomations(automationsData);
        setEnergyData(energyData);
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Smart Home Dashboard</h2>
      <div className="dashboard-grid">
        <div className="dashboard-item">
          <DeviceOverview devices={devices} />
        </div>
        <div className="dashboard-item">
          <AutomationStatus automations={automations} />
        </div>
        <div className="dashboard-item">
          <EnergyConsumption energyData={energyData} />
        </div>
        <div className="dashboard-item">
          <QuickActions />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
