import NewClientVoteUseCase from '../../../useCases/newClientVoteUseCase.js'
import getDataFromHandshake from '../../../helpers/getDataFromHandshake.js'
import ClientEvents from '../../../domain/events/clientEvents.js'

const newClientVote = {

    run: (payload, socket, io) => {
      try {
        const dataFromHandShake = getDataFromHandshake(socket.handshake.query)
        const RefreshedRoom = NewClientVoteUseCase.run(dataFromHandShake, payload)
        io.to(dataFromHandShake.room).emit(ClientEvents.refreshRoom, RefreshedRoom)
        newClientVote.log(dataFromHandShake, payload)
      } catch (error) {
        console.log(`Error :: newClientVote :: run ::`, error)
      }
    },

    log: (data, payload) => {
      console.log(`----------------------------------------------------------------`)
        console.log(`-- Client Voted :: ${new Date().toUTCString()}`)
        console.log(`-- Room: ${data.room}`)
        console.log(`-- User: ${data.client.name}`)
        console.log(`-- Vote: ${payload.vote}`)
    }

}

export default newClientVote