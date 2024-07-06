import {
  AUTH_TOKEN_KEY,
  AUTH_EXPIRATION_KEY,
  DEVICE_TYPE_LIGHT,
  DEVICE_TYPE_THERMOSTAT,
  DEVICE_TYPE_SENSOR,
} from "./constants";

// Formatting helpers
export function formatDate(date) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return new Date(date).toLocaleDateString("en-US", options);
}

export function formatTemperature(temperature, unit = "C") {
  return `${temperature}°${unit.toUpperCase()}`;
}

// Validation helpers
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isStrongPassword(password) {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  return passwordRegex.test(password);
}

// Authentication helpers
export function getAuthToken() {
  return localStorage.getItem(AUTH_TOKEN_KEY);
}

export function setAuthToken(token, expiresIn) {
  localStorage.setItem(AUTH_TOKEN_KEY, token);
  const expirationTime = Date.now() + expiresIn * 1000;
  localStorage.setItem(AUTH_EXPIRATION_KEY, expirationTime.toString());
}

export function removeAuthToken() {
  localStorage.removeItem(AUTH_TOKEN_KEY);
  localStorage.removeItem(AUTH_EXPIRATION_KEY);
}

export function isAuthenticated() {
  const token = getAuthToken();
  if (!token) {
    return false;
  }
  const expirationTime = localStorage.getItem(AUTH_EXPIRATION_KEY);
  const currentTime = Date.now();
  return currentTime < parseInt(expirationTime, 10);
}

// Device helpers
export function getDeviceIcon(deviceType) {
  switch (deviceType) {
    case DEVICE_TYPE_LIGHT:
      return "fa-lightbulb";
    case DEVICE_TYPE_THERMOSTAT:
      return "fa-thermometer-half";
    case DEVICE_TYPE_SENSOR:
      return "fa-sensor";
    default:
      return "fa-question-circle";
  }
}

export function getDeviceStateColor(deviceState) {
  return deviceState ? "green" : "red";
}

// New helper functions

export function truncateString(str, maxLength) {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + "...";
}

export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function formatFileSize(bytes) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

export function generateUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
