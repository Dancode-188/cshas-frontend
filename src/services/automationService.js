import api from "./api";
import { API_AUTOMATIONS_ENDPOINT } from "../utils/constants";

// Fetch all automations
export const fetchAutomations = async () => {
  try {
    const response = await api.get(API_AUTOMATIONS_ENDPOINT);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch automations:", error);
    throw error;
  }
};

// Fetch a single automation by ID
export const fetchAutomationById = async (automationId) => {
  try {
    const response = await api.get(
      `${API_AUTOMATIONS_ENDPOINT}/${automationId}`
    );
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch automation with ID ${automationId}:`, error);
    throw error;
  }
};

// Create a new automation
export const createAutomation = async (automationData) => {
  try {
    const response = await api.post(API_AUTOMATIONS_ENDPOINT, automationData);
    return response.data;
  } catch (error) {
    console.error("Failed to create automation:", error);
    throw error;
  }
};

// Update an existing automation
export const updateAutomation = async (automationId, automationData) => {
  try {
    const response = await api.put(
      `${API_AUTOMATIONS_ENDPOINT}/${automationId}`,
      automationData
    );
    return response.data;
  } catch (error) {
    console.error(
      `Failed to update automation with ID ${automationId}:`,
      error
    );
    throw error;
  }
};

// Delete an automation
export const deleteAutomation = async (automationId) => {
  try {
    await api.delete(`${API_AUTOMATIONS_ENDPOINT}/${automationId}`);
  } catch (error) {
    console.error(
      `Failed to delete automation with ID ${automationId}:`,
      error
    );
    throw error;
  }
};
