import api from "./api";
import { API_DEVICES_ENDPOINT } from "../utils/constants";

// Fetch all devices
export async function fetchDevices() {
  try {
    const response = await api.get(API_DEVICES_ENDPOINT);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch devices:", error);
    return [];
  }
}

// Fetch a single device by ID
export async function fetchDeviceById(deviceId) {
  try {
    const response = await api.get(`${API_DEVICES_ENDPOINT}/${deviceId}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch device with ID ${deviceId}:`, error);
    return null;
  }
}

// Control a device
export async function controlDevice(deviceId, command) {
  try {
    await api.post(`${API_DEVICES_ENDPOINT}/${deviceId}/control`, { command });
    return true;
  } catch (error) {
    console.error(`Failed to control device with ID ${deviceId}:`, error);
    return false;
  }
}

// Update a device
export async function updateDevice(deviceId, updates) {
  try {
    await api.put(`${API_DEVICES_ENDPOINT}/${deviceId}`, updates);
    return true;
  } catch (error) {
    console.error(`Failed to update device with ID ${deviceId}:`, error);
    return false;
  }
}

// Add a new device
export async function addDevice(deviceData) {
  try {
    const response = await api.post(API_DEVICES_ENDPOINT, deviceData);
    return response.data;
  } catch (error) {
    console.error("Failed to add device:", error);
    throw error;
  }
}

// Delete a device
export async function deleteDevice(deviceId) {
  try {
    await api.delete(`${API_DEVICES_ENDPOINT}/${deviceId}`);
  } catch (error) {
    console.error(`Failed to delete device with ID ${deviceId}:`, error);
    throw error;
  }
}
