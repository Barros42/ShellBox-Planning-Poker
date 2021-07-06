import ClientDisconnectUseCase from '../../../useCases/clientDisconnectUseCase.js'

const clientDisconnect = {

    run: (data) => {
        try {
            clientDisconnect.log(data)
            return ClientDisconnectUseCase.run(data)
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