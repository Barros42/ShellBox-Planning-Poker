import { createServer } from "http";
import { Server } from "socket.io";
import bootstrap from './bootstrap/bootstrap.js'
import AppConfig from "./config/AppConfig.js";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: AppConfig.USE_CORS
});

await bootstrap(io, httpServer)