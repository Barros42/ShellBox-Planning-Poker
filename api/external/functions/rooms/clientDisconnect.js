import ClientDisconnectUseCase from '../../../useCases/clientDisconnectUseCase.js'
import getDataFromHandshake from '../../../helpers/getDataFromHandshake.js'
import ClientEvents from '../../../domain/events/clientEvents.js'

const clientDisconnect = {

    run: (socket, io) => {
        try {
            const dataFromHandShake = getDataFromHandshake(socket.handshake.query)
            const RefreshedRoom = ClientDisconnectUseCase.run(dataFromHandShake)
            io.to(dataFromHandShake.room).emit(ClientEvents.refreshRoom, RefreshedRoom)
            clientDisconnect.log(dataFromHandShake)
        } catch (error) {
            console.log(`Error :: clientDisconnect :: run ::`, error)
        }
    },

    log: (data) => {
        console.log(`----------------------------------------------------------------`)
        console.log(`-- New Client Disconnected :: ${new Date().toUTCString()}`)
        console.log(`-- Room: ${data.room}`)
        console.log(`-- User: ${data.client.name}`)
      }

}

export default clientDisconnect