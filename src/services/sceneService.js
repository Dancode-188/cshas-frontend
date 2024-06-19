import api from "./api";
import { API_SCENES_ENDPOINT } from "../utils/constants";

// Fetch all scenes
export const fetchScenes = async () => {
  try {
    const response = await api.get(API_SCENES_ENDPOINT);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch scenes:", error);
    throw error;
  }
};

// Fetch a single scene by ID
export const fetchSceneById = async (sceneId) => {
  try {
    const response = await api.get(`${API_SCENES_ENDPOINT}/${sceneId}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch scene with ID ${sceneId}:`, error);
    throw error;
  }
};

// Create a new scene
export const createScene = async (sceneData) => {
  try {
    const response = await api.post(API_SCENES_ENDPOINT, sceneData);
    return response.data;
  } catch (error) {
    console.error("Failed to create scene:", error);
    throw error;
  }
};

// Update an existing scene
export const updateScene = async (sceneId, sceneData) => {
  try {
    const response = await api.put(
      `${API_SCENES_ENDPOINT}/${sceneId}`,
      sceneData
    );
    return response.data;
  } catch (error) {
    console.error(`Failed to update scene with ID ${sceneId}:`, error);
    throw error;
  }
};

// Delete a scene
export const deleteScene = async (sceneId) => {
  try {
    await api.delete(`${API_SCENES_ENDPOINT}/${sceneId}`);
  } catch (error) {
    console.error(`Failed to delete scene with ID ${sceneId}:`, error);
    throw error;
  }
};

// Activate a scene
export const activateScene = async (sceneId) => {
  try {
    await api.post(`${API_SCENES_ENDPOINT}/${sceneId}/activate`);
  } catch (error) {
    console.error(`Failed to activate scene with ID ${sceneId}:`, error);
    throw error;
  }
};

// Deactivate a scene
export const deactivateScene = async (sceneId) => {
  try {
    await api.post(`${API_SCENES_ENDPOINT}/${sceneId}/deactivate`);
  } catch (error) {
    console.error(`Failed to deactivate scene with ID ${sceneId}:`, error);
    throw error;
  }
};
