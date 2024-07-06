import api from "./api";

// Fetch all devices
export const fetchDevices = () => api.getAllDevices();

// Fetch a single device by ID
export const fetchDeviceById = (deviceId) => api.getDeviceById(deviceId);

// Control a device
export const controlDevice = (deviceId, command) =>
  api.controlDevice(deviceId, command);

// Update a device
export const updateDevice = (deviceId, updates) =>
  api.updateDevice(deviceId, updates);

// Add a new device
export const addDevice = (deviceData) => api.addDevice(deviceData);

// Delete a device
export const deleteDevice = (deviceId) => api.deleteDevice(deviceId);

// Fetch device telemetry
export const fetchDeviceTelemetry = (deviceId) =>
  api.getDeviceTelemetry(deviceId);

// Fetch devices by user
export const fetchDevicesByUser = (userId) => api.getDevicesByUser(userId);
