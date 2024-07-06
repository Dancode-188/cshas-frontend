import api from "./api";

// Fetch energy consumption data
export const fetchEnergyData = () => api.getEnergyConsumption();

// Fetch energy consumption data for a specific device
export const fetchDeviceEnergyData = (deviceId) =>
  api.getDeviceEnergyConsumption(deviceId);

// Fetch energy consumption data for a specific time range
export const fetchEnergyDataByDateRange = (startDate, endDate) =>
  api.getEnergyConsumptionByDateRange(startDate, endDate);
