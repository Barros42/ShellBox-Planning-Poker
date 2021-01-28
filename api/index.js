import { createServer } from "http";
import { Server } from "socket.io";
import bootstrap from './bootstrap/bootstrap.js'

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: true
});

await bootstrap(io, httpServer)