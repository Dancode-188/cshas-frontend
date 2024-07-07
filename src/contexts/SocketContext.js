import React, { createContext, useContext, useState, useEffect } from "react";
import socketServiceInstance from "../services/socketService";

const SocketContext = createContext();

export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId"); // Or however you store the user ID
    if (userId) {
      socketServiceInstance.connect(userId);

      socketServiceInstance.on("newNotification", (notification) => {
        console.log("New notification:", notification);
        setNotifications((prev) => [...prev, notification]);
        // You might want to show a toast or update UI here
      });

      socketServiceInstance.on("systemNotification", (notification) => {
        console.log("System notification:", notification);
        setNotifications((prev) => [...prev, notification]);
        // You might want to show a toast or update UI here
      });
    }

    return () => {
      socketServiceInstance.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ notifications, socketServiceInstance }}>
      {children}
    </SocketContext.Provider>
  );
};
