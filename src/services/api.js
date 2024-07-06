import axios from "axios";
import { API_BASE_URL } from "../utils/constants";
import { getAuthToken, removeAuthToken } from "../utils/helpers";

// Create an instance of axios with base configuration
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Intercept requests to add authentication token
api.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Intercept responses to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error("API Error:", error.response.data);
      console.error("Status Code:", error.response.status);

      if (error.response.status === 401) {
        removeAuthToken();
        window.location.href = "/login";
      }
    } else if (error.request) {
      console.error("No response received from the server");
    } else {
      console.error("Error:", error.message);
    }
    return Promise.reject(error);
  }
);

// API functions

// User related functions
export const registerUser = (userData) =>
  api.post("/api/users/register", userData);
export const loginUser = (credentials) =>
  api.post("/api/users/login", credentials);
export const getUserProfile = () => api.get("/api/users/profile");

// Device related functions
export const getAllDevices = () => api.get("/api/devices");
export const getDeviceById = (deviceId) => api.get(`/api/devices/${deviceId}`);
export const addDevice = (deviceData) => api.post("/api/devices", deviceData);
export const updateDevice = (deviceId, deviceData) =>
  api.put(`/api/devices/${deviceId}`, deviceData);
export const deleteDevice = (deviceId) =>
  api.delete(`/api/devices/${deviceId}`);
export const controlDevice = (deviceId, command) =>
  api.post(`/api/devices/${deviceId}/control`, { command });
export const getDeviceTelemetry = (deviceId) =>
  api.get(`/api/devices/${deviceId}/telemetry`);
export const getDevicesByUser = (userId) =>
  api.get(`/api/devices/user/${userId}`);

// Automation related functions
export const getAllAutomations = () => api.get("/api/automations");
export const getAutomationById = (automationId) =>
  api.get(`/api/automations/${automationId}`);
export const createAutomation = (automationData) =>
  api.post("/api/automations", automationData);
export const updateAutomation = (automationId, automationData) =>
  api.put(`/api/automations/${automationId}`, automationData);
export const deleteAutomation = (automationId) =>
  api.delete(`/api/automations/${automationId}`);

export default api;
