import api from "./api";

const userService = {
  // Fetch user profile
  fetchUserProfile: () => api.getUserProfile(),

  // Register a new user
  registerUser: (userData) => api.registerUser(userData),

  // Login user
  loginUser: (credentials) => api.loginUser(credentials),

  // Update user profile
  updateUserProfile: (profileData) => api.updateUserProfile(profileData),
};

export default userService;
