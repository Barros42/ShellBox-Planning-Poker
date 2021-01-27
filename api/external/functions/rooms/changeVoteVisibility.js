import getDataFromHandshake from '../../../helpers/getDataFromHandshake.js'
import ChangeVoteVisibilityUseCase from '../../../useCases/changeVoteVisibilityUseCase.js'
import ClientEvents from '../../../domain/events/clientEvents.js'

const changeVoteVisibility = {
    run: (action, socket, io) => {
        const dataFromHandShake = getDataFromHandshake(socket.handshake.query)
        const RefreshedRoom = ChangeVoteVisibilityUseCase.run(dataFromHandShake.room, action)
        io.to(dataFromHandShake.room).emit(ClientEvents.refreshRoom, RefreshedRoom)
    }
}

export default changeVoteVisibility