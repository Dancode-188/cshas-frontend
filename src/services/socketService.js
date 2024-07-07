import io from "socket.io-client";

class SocketService {
  constructor() {
    this.socket = null;
  }

  connect(userId) {
    this.socket = io(
      process.env.REACT_APP_BACKEND_URL || "http://localhost:3000"
    );

    this.socket.on("connect", () => {
      console.log("Connected to server");
      this.socket.emit("authenticate", userId);
    });

    this.socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }

  on(event, callback) {
    if (this.socket) {
      this.socket.on(event, callback);
    }
  }

  off(event, callback) {
    if (this.socket) {
      this.socket.off(event, callback);
    }
  }
}

const socketServiceInstance = new SocketService();

export default socketServiceInstance;
