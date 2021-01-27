import ClientDisconnectUseCase from '../../../useCases/clientDisconnectUseCase.js'
import getDataFromHandshake from '../../../helpers/getDataFromHandshake.js'
import ClientEvents from '../../../domain/events/clientEvents.js'

const clientDisconnect = {

    run: (socket, io) => {
        const dataFromHandShake = getDataFromHandshake(socket.handshake.query)
        const RefreshedRoom = ClientDisconnectUseCase.run(dataFromHandShake)
        io.to(dataFromHandShake.room).emit(ClientEvents.refreshRoom, RefreshedRoom)
    }

}

export default clientDisconnect