import AppConfig from './config/AppConfig.js'

import { createServer } from "http";
import { Server } from "socket.io";

import clientConnected from './external/functions/rooms/clientConnected.js'
import clientDisconnect from './external/functions/rooms/clientDisconnect.js'
import newClientVote from './external/functions/rooms/newClientVote.js'
import changeVoteVisibility from './external/functions/rooms/changeVoteVisibility.js'
import cleanRoomVotes from './external/functions/rooms/cleanRoomVotes.js'

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: true
});

io.on("connection", (socket) => {
  clientConnected.run(socket, io)
  
  socket.on("disconnect", () => {
    clientDisconnect.run(socket, io)
  })

  socket.on("userExiting", () =>{
    clientDisconnect.run(socket, io)
  })

  socket.on('newVote', (payload) => {
    newClientVote.run(payload, socket, io)
  })

  socket.on('changeVoteVisibility', (action) => {
    changeVoteVisibility.run(action, socket, io)
  })

  socket.on('cleanVotes', () => {
    cleanRoomVotes.run(socket, io)
  })

});

httpServer.listen(AppConfig.API_PORT, () => {
  console.log('Server Listening in port 4000')
});