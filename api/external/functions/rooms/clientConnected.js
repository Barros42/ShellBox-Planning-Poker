import ClientConnectedUseCase from '../../../useCases/clientConnectedUseCase.js'

const clientConnected = {

    run: (data) => {
       try {
         clientConnected.log(data)
         return ClientConnectedUseCase.run(data)
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