import api from "./api";
import { API_ENERGY_ENDPOINT } from "../utils/constants";

// Fetch energy consumption data
export const fetchEnergyData = async () => {
  try {
    const response = await api.get(API_ENERGY_ENDPOINT);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch energy data:", error);
    throw error;
  }
};
