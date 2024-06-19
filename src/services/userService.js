import api from "./api";
import { API_USER_ENDPOINT } from "../utils/constants";

const userService = {
  fetchUserProfile: async () => {
    try {
      const response = await api.get(`${API_USER_ENDPOINT}/profile`);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch user profile:", error);
      throw error;
    }
  },

  updateUserProfile: async (profileData) => {
    try {
      const response = await api.put(
        `${API_USER_ENDPOINT}/profile`,
        profileData
      );
      return response.data;
    } catch (error) {
      console.error("Failed to update user profile:", error);
      throw error;
    }
  },

  // Add more user-related service methods as needed
};

export default userService;
