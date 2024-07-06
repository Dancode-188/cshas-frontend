// API endpoints
export const API_BASE_URL = "https://api-cshas-a8557b26a6f5.herokuapp.com";
export const API_DEVICES_ENDPOINT = "/api/devices";
export const API_AUTOMATIONS_ENDPOINT = "/api/automations";
export const API_USER_ENDPOINT = "/api/users";

// Authentication
export const AUTH_TOKEN_KEY = "cshas_auth_token";
export const AUTH_EXPIRATION_KEY = "cshas_auth_expiration";

// Device types
export const DEVICE_TYPE_LIGHT = "light";
export const DEVICE_TYPE_THERMOSTAT = "thermostat";
export const DEVICE_TYPE_SENSOR = "sensor";

// Automation triggers
export const TRIGGER_TIME_BASED = "time_based";
export const TRIGGER_DEVICE_STATE = "device_state";

// Device actions
export const ACTION_TURN_ON = "turn_on";
export const ACTION_TURN_OFF = "turn_off";
export const ACTION_SET_VALUE = "set_value";

// Specific API endpoints
export const API_REGISTER_ENDPOINT = `${API_USER_ENDPOINT}/register`;
export const API_LOGIN_ENDPOINT = `${API_USER_ENDPOINT}/login`;
export const API_USER_PROFILE_ENDPOINT = `${API_USER_ENDPOINT}/profile`;
export const API_DEVICE_CONTROL_ENDPOINT = (deviceId) =>
  `${API_DEVICES_ENDPOINT}/${deviceId}/control`;
export const API_DEVICE_TELEMETRY_ENDPOINT = (deviceId) =>
  `${API_DEVICES_ENDPOINT}/${deviceId}/telemetry`;
export const API_USER_DEVICES_ENDPOINT = (userId) =>
  `${API_DEVICES_ENDPOINT}/user/${userId}`;
