import api from "./api";

const userService = {
  updateProfile: async (profileData) => {
    try {
      const response = await api.put("/users/profile", profileData);
      return response.data;
    } catch (error) {
      throw new Error("Failed to update user profile");
    }
  },
  // Add more user-related service methods as needed
};

export default userService;
