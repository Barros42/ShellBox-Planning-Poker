import clientConnected from '../external/functions/rooms/clientConnected.js'
import clientDisconnect from '../external/functions/rooms/clientDisconnect.js'
import newClientVote from '../external/functions/rooms/newClientVote.js'
import changeVoteVisibility from '../external/functions/rooms/changeVoteVisibility.js'
import cleanRoomVotes from '../external/functions/rooms/cleanRoomVotes.js'
import SocketEvents from '../domain/events/socketEvents.js'
import AppConfig from '../config/AppConfig.js'

const bootstrap = async (io, httpServer) => {
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
            console.log(`${AppConfig.API_NAME} API @ Running on ${AppConfig.API_PORT}`)
        });
  
  } catch (error) {
        console.log('Error :: bootstrap :: ', error)
  }

}

export default bootstrap