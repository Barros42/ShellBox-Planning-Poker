import { createServer } from "http"
import { Server } from "socket.io"
import express from 'express'

import clientConnected from '../external/functions/rooms/clientConnected.js'
import clientDisconnect from '../external/functions/rooms/clientDisconnect.js'
import newClientVote from '../external/functions/rooms/newClientVote.js'
import changeVoteVisibility from '../external/functions/rooms/changeVoteVisibility.js'
import cleanRoomVotes from '../external/functions/rooms/cleanRoomVotes.js'
import SocketEvents from '../domain/events/socketEvents.js'
import AppConfig from '../config/AppConfig.js'
import appLogger from '../helpers/appLogger.js'
import registerHttpRoutes from "../external/routes/registerRoutes.js"


const bootstrap = async () => {

    const expressApp = express()
    registerHttpRoutes(expressApp)
    const httpServer = createServer(expressApp)
    const io = new Server(httpServer, {
        cors: AppConfig.USE_CORS
    });
      
    try {
        io.on(SocketEvents.newConnection, (socket) => {

            clientConnected.run(socket, io)
            
            socket.on(SocketEvents.clientDisconnect, () => {
                clientDisconnect.run(socket, io)
            })
            
            socket.on(SocketEvents.userExiting, () =>{
                clientDisconnect.run(socket, io)
            })
            
            socket.on(SocketEvents.userSendNewVote, (payload) => {
                newClientVote.run(payload, socket, io)
            })
            
            socket.on(SocketEvents.userChangeVoteVisibility, (action) => {
                changeVoteVisibility.run(action, socket, io)
            })
            
            socket.on(SocketEvents.userCleanRoomVotes, () => {
                cleanRoomVotes.run(socket, io)
            })
        });
        
        httpServer.listen(AppConfig.API_PORT, () => {
            appLogger()
        });
  
  } catch (error) {
        console.log('Error :: bootstrap :: ', error)
  }

}

export default bootstrap