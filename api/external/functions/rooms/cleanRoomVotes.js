import getDataFromHandshake from '../../../helpers/getDataFromHandshake.js'
import CleanRoomVotesUseCase from '../../../useCases/cleanRoomVotesUseCase.js'
import ClientEvents from '../../../domain/events/clientEvents.js'

const cleanRoomVotes = {
    run: (socket, io) => {
      try {
        const dataFromHandShake = getDataFromHandshake(socket.handshake.query)
        const RefreshedRoom = CleanRoomVotesUseCase.run(dataFromHandShake.room)
        io.to(dataFromHandShake.room).emit(ClientEvents.cleanVotes)
        io.to(dataFromHandShake.room).emit(ClientEvents.refreshRoom, RefreshedRoom)
        cleanRoomVotes.log(dataFromHandShake)
      } catch (error) {
        console.log(`Error :: cleanRoomVotes :: run ::`, error)
      }
    },

    log: (data) => {
      console.log(`----------------------------------------------------------------`)
      console.log(`-- Votes have been cleared :: ${new Date().toUTCString()}`)
      console.log(`-- Room: ${data.room}`)
      console.log(`-- User: ${data.client.name}`)
    }
}

export default cleanRoomVotes