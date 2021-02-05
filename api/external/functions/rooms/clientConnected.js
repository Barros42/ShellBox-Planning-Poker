import ClientConnectedUseCase from '../../../useCases/clientConnectedUseCase.js'
import getDataFromHandshake from '../../../helpers/getDataFromHandshake.js'
import ClientEvents from '../../../domain/events/clientEvents.js'

const clientConnected = {

    run: (socket, io) => {
       try {
         const dataFromHandShake = getDataFromHandshake(socket.handshake.query)
         socket.join(dataFromHandShake.room)
         const RefreshedRoom = ClientConnectedUseCase.run(dataFromHandShake)
         io.to(dataFromHandShake.room).emit(ClientEvents.refreshRoom, RefreshedRoom)
         clientConnected.log(dataFromHandShake)
       } catch (error) {
         console.log(`Error :: clientConnected :: run ::`, error)
       }
    },

    log: (data) => {
      console.log(`----------------------------------------------------------------`)
      console.log(`-- New Client Connected :: ${new Date().toUTCString()}`)
      console.log(`-- Room: ${data.room}`)
      console.log(`-- User: ${data.client.name}`)
    }

}

export default clientConnected