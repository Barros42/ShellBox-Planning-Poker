import ClientDisconnectUseCase from '../../../useCases/clientDisconnectUseCase.js'
import getDataFromHandshake from '../../../helpers/getDataFromHandshake.js'
import ClientEvents from '../../../domain/events/clientEvents.js'

const clientDisconnect = {

    run: (socket, io) => {
        try {
            const dataFromHandShake = getDataFromHandshake(socket.handshake.query)
            const RefreshedRoom = ClientDisconnectUseCase.run(dataFromHandShake)
            io.to(dataFromHandShake.room).emit(ClientEvents.refreshRoom, RefreshedRoom)
        } catch (error) {
            console.log(`Error :: clientDisconnect :: run ::`, error)
        }
    }

}

export default clientDisconnect