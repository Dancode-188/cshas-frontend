import {
  AUTH_TOKEN_KEY,
  AUTH_EXPIRATION_KEY,
  DEVICE_TYPE_LIGHT,
  DEVICE_TYPE_THERMOSTAT,
  DEVICE_TYPE_SENSOR,
} from "./constants";

// Formatting helpers
export function formatDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

export function formatTemperature(temperature, unit) {
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

export function setAuthToken(token) {
  localStorage.setItem(AUTH_TOKEN_KEY, token);
}

export function removeAuthToken() {
  localStorage.removeItem(AUTH_TOKEN_KEY);
}

export function isAuthenticated() {
  const token = getAuthToken();
  if (!token) {
    return false;
  }
  const expirationTime = localStorage.getItem(AUTH_EXPIRATION_KEY);
  const currentTime = Date.now();
  return currentTime < expirationTime;
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
