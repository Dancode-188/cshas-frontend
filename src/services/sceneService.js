import api from "./api";

// Fetch all scenes
export const fetchScenes = () => api.getAllScenes();

// Fetch a single scene by ID
export const fetchSceneById = (sceneId) => api.getSceneById(sceneId);

// Create a new scene
export const createScene = (sceneData) => api.createScene(sceneData);

// Update an existing scene
export const updateScene = (sceneId, sceneData) =>
  api.updateScene(sceneId, sceneData);

// Delete a scene
export const deleteScene = (sceneId) => api.deleteScene(sceneId);

// Activate a scene
export const activateScene = (sceneId) => api.activateScene(sceneId);

// Deactivate a scene
export const deactivateScene = (sceneId) => api.deactivateScene(sceneId);
