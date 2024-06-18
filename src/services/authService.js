import api from "./api";
import { AUTH_TOKEN_KEY, AUTH_EXPIRATION_KEY } from "../utils/constants";
import { setAuthToken, removeAuthToken } from "../utils/helpers";

// Login user
export async function login(email, password) {
  try {
    const response = await api.post("/auth/login", { email, password });
    const { token, expiresIn } = response.data;
    setAuthToken(token);
    localStorage.setItem(AUTH_EXPIRATION_KEY, expiresIn);
    return true;
  } catch (error) {
    console.error("Login failed:", error);
    return false;
  }
}

// Logout user
export function logout() {
  removeAuthToken();
  localStorage.removeItem(AUTH_EXPIRATION_KEY);
}

// Check if user is authenticated
export function isAuthenticated() {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);
  const expiresIn = localStorage.getItem(AUTH_EXPIRATION_KEY);
  if (!token || !expiresIn) {
    return false;
  }
  const expirationTime = new Date(expiresIn);
  return expirationTime > new Date();
}
