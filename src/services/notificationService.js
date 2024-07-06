import api from "./api";

const notificationService = {
  updateNotificationSettings: (notificationSettings) =>
    api.updateNotificationSettings(notificationSettings),

  getNotifications: () => api.getNotifications(),

  markNotificationAsRead: (notificationId) =>
    api.markNotificationAsRead(notificationId),

  deleteNotification: (notificationId) =>
    api.deleteNotification(notificationId),
};

export default notificationService;
