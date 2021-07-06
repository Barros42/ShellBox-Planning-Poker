import clientConnected from '../../external/functions/rooms/clientConnected.js'
import clientDisconnect from '../../external/functions/rooms/clientDisconnect.js'
import newClientVote from '../../external/functions/rooms/newClientVote.js'
import changeVoteVisibility from '../../external/functions/rooms/changeVoteVisibility.js'
import cleanRoomVotes from '../../external/functions/rooms/cleanRoomVotes.js'
import SocketEvents from '../../domain/events/socketEvents.js'
import getDataFromHandshake from '../../helpers/getDataFromHandshake.js'
import ClientEvents from '../../domain/events/clientEvents.js'
import extractDataFromEvent from '../../helpers/extractDataFromEvent.js'

const registerEvents = (io) => {

  io.on(SocketEvents.newConnection, (socket) => {

    /**
     * @ On Client Connect
     */
    const eventData = extractDataFromEvent(socket)
    const useCaseResponse = clientConnected.run(eventData)
    io.to(eventData.room).emit(ClientEvents.refreshRoom, useCaseResponse)
    socket.join(eventData.room)
   
    /**
     * @ On Client Disconnect
     */
    socket.on(SocketEvents.clientDisconnect, () => {
        const eventData = extractDataFromEvent(socket)
        const useCaseResponse = clientDisconnect.run(eventData)
        io.to(eventData.room).emit(ClientEvents.refreshRoom, useCaseResponse)    
    })

    /**
     * @ On Client Exit
     */
    socket.on(SocketEvents.userExiting, () =>{
        const eventData = extractDataFromEvent(socket)
        const useCaseResponse = clientDisconnect.run(eventData)
        io.to(eventData.room).emit(ClientEvents.refreshRoom, useCaseResponse)
    })
    
    /**
     * @ On New Client Vote
     */
    socket.on(SocketEvents.userSendNewVote, (payload) => {
        const eventData = extractDataFromEvent(socket, payload)
        const useCaseResponse = newClientVote.run(eventData)
        io.to(eventData.room).emit(ClientEvents.refreshRoom, useCaseResponse)
    })
    
    /**
     * @ On Change Vote Visibility Event
     */
    socket.on(SocketEvents.userChangeVoteVisibility, (payload) => {
        const eventData = extractDataFromEvent(socket, payload)
        const useCaseResponse = changeVoteVisibility.run(eventData)
        io.to(eventData.room).emit(ClientEvents.refreshRoom, useCaseResponse)
    })
    
    /**
     * @ On Clean Room Votes
     */
    socket.on(SocketEvents.userCleanRoomVotes, () => {
        const eventData = extractDataFromEvent(socket, null)
        const useCaseResponse = cleanRoomVotes.run(eventData)
        io.to(eventData.room).emit(ClientEvents.cleanVotes)
        io.to(eventData.room).emit(ClientEvents.refreshRoom, useCaseResponse)
    })
  });

}

export default registerEvents