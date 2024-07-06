import api from "./api";
import { API_DEVICES_ENDPOINT } from "../utils/constants";

// Fetch all devices
export async function fetchDevices() {
  try {
    const response = await api.getAllDevices();
    return response.data;
  } catch (error) {
    console.error("Failed to fetch devices:", error);
    throw error;
  }
}

// Fetch a single device by ID
export async function fetchDeviceById(deviceId) {
  try {
    const response = await api.getDeviceById(deviceId);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch device with ID ${deviceId}:`, error);
    throw error;
  }
}

// Control a device
export async function controlDevice(deviceId, command) {
  try {
    const response = await api.controlDevice(deviceId, command);
    return response.data;
  } catch (error) {
    console.error(`Failed to control device with ID ${deviceId}:`, error);
    throw error;
  }
}

// Update a device
export async function updateDevice(deviceId, updates) {
  try {
    const response = await api.updateDevice(deviceId, updates);
    return response.data;
  } catch (error) {
    console.error(`Failed to update device with ID ${deviceId}:`, error);
    throw error;
  }
}

// Add a new device
export async function addDevice(deviceData) {
  try {
    const response = await api.addDevice(deviceData);
    return response.data;
  } catch (error) {
    console.error("Failed to add device:", error);
    throw error;
  }
}

// Delete a device
export async function deleteDevice(deviceId) {
  try {
    await api.deleteDevice(deviceId);
    return true;
  } catch (error) {
    console.error(`Failed to delete device with ID ${deviceId}:`, error);
    throw error;
  }
}

// Fetch device telemetry
export async function fetchDeviceTelemetry(deviceId) {
  try {
    const response = await api.getDeviceTelemetry(deviceId);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch telemetry for device with ID ${deviceId}:`, error);
    throw error;
  }
}

// Fetch devices by user
export async function fetchDevicesByUser(userId) {
  try {
    const response = await api.getDevicesByUser(userId);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch devices for user with ID ${userId}:`, error);
    throw error;
  }
}