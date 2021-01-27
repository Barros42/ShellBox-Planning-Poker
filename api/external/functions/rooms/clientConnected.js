import ClientConnectedUseCase from '../../../useCases/clientConnectedUseCase.js'
import getDataFromHandshake from '../../../helpers/getDataFromHandshake.js'
import ClientEvents from '../../../domain/events/clientEvents.js'

const clientConnected = {

    run: (socket, io) => {
        const dataFromHandShake = getDataFromHandshake(socket.handshake.query)
        socket.join(dataFromHandShake.room)
        const RefreshedRoom = ClientConnectedUseCase.run(dataFromHandShake)
        io.to(dataFromHandShake.room).emit(ClientEvents.refreshRoom, RefreshedRoom)
    }

}

export default clientConnected