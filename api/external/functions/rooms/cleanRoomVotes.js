import getDataFromHandshake from '../../../helpers/getDataFromHandshake.js'
import CleanRoomVotesUseCase from '../../../useCases/cleanRoomVotesUseCase.js'
import ClientEvents from '../../../domain/events/clientEvents.js'

const cleanRoomVotes = {
    run: (socket, io) => {
        const dataFromHandShake = getDataFromHandshake(socket.handshake.query)
        const RefreshedRoom = CleanRoomVotesUseCase.run(dataFromHandShake.room)
        io.to(dataFromHandShake.room).emit(ClientEvents.cleanVotes)
        io.to(dataFromHandShake.room).emit(ClientEvents.refreshRoom, RefreshedRoom)
    }
}

export default cleanRoomVotes