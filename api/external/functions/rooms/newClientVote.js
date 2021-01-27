import NewClientVoteUseCase from '../../../useCases/newClientVoteUseCase.js'
import getDataFromHandshake from '../../../helpers/getDataFromHandshake.js'
import ClientEvents from '../../../domain/events/clientEvents.js'

const newClientVote = {

    run: (payload, socket, io) => {
        const dataFromHandShake = getDataFromHandshake(socket.handshake.query)
        const RefreshedRoom = NewClientVoteUseCase.run(dataFromHandShake, payload)
        io.to(dataFromHandShake.room).emit(ClientEvents.refreshRoom, RefreshedRoom)
    }

}

export default newClientVote