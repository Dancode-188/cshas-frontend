import api from "./api";

const notificationService = {
  updateNotificationSettings: async (notificationSettings) => {
    try {
      const response = await api.put(
        "/users/notification-settings",
        notificationSettings
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to update notification settings");
    }
  },
  // Add more notification-related service methods as needed
};

export default notificationService;
