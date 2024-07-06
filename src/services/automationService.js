import api from "./api";

// Fetch all automations
export const fetchAutomations = () => api.getAllAutomations();

// Fetch a single automation by ID
export const fetchAutomationById = (automationId) =>
  api.getAutomationById(automationId);

// Create a new automation
export const createAutomation = (automationData) =>
  api.createAutomation(automationData);

// Update an existing automation
export const updateAutomation = (automationId, automationData) =>
  api.updateAutomation(automationId, automationData);

// Delete an automation
export const deleteAutomation = (automationId) =>
  api.deleteAutomation(automationId);
