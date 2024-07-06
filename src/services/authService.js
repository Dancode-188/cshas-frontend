import api from "./api";
import { AUTH_EXPIRATION_KEY } from "../utils/constants";
import {
  setAuthToken,
  removeAuthToken,
  isAuthenticated,
} from "../utils/helpers";

// Login user
export const login = async (email, password) => {
  try {
    const response = await api.loginUser({ email, password });
    const { token, expiresIn } = response.data;
    setAuthToken(token, expiresIn);
    return true;
  } catch (error) {
    console.error("Login failed:", error);
    return false;
  }
};

// Register user
export const register = async (userData) => {
  try {
    const response = await api.registerUser(userData);
    return response.data;
  } catch (error) {
    console.error("Registration failed:", error);
    throw error;
  }
};

// Logout user
export const logout = () => {
  removeAuthToken();
  localStorage.removeItem(AUTH_EXPIRATION_KEY);
};

// Export isAuthenticated directly from helpers
export { isAuthenticated };
