import io from "socket.io-client";

const SOCKET_URL = "http://localhost:3000";

class WSService {
  initalizeSocket = async () => {
    try {
      this.socket = io(SOCKET_URL, {
        transports: ["websocket"],
      });

      console.log("initializing socket", this.socket);

      this.socket.on("connect", (data) => {
        console.log("+++Client side socket connected+++");
      });

      this.socket.on("disconnect", (data) => {
        console.log("XXX Client side socket is Disconnected XXX");
      });

      this.socket.on("error", (data) => {
        console.log("CS Socket error", data);
      });
    } catch (err) {
      console.log("Error from frontend socket service is ", err);
    }
  };

  emit(event, data = {}) {
    this.socket.emit(event, data);
  }

  on(event, cb) {
    this.socket.on(event, cb);
  }

  removeListener(listenerName) {
    this.socket.removeListener(listenerName);
  }
}

const socketServices = new WSService();
export default socketServices;
