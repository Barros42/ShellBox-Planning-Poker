import GetRoomDataUseCase from '../../../useCases/getRoomDataUseCase.js'

const getRoomData = {

    run: (data) => {
      try {
        const RefreshedRoom = GetRoomDataUseCase.run(data)
        getRoomData.log(data)
        return RefreshedRoom
      } catch (error) {
        console.log(`Error :: newClientVote :: run ::`, error)
      }
    },

    log: (data) => {
      console.log(`----------------------------------------------------------------`)
        console.log(`-- Getting Room Data :: ${new Date().toUTCString()}`)
        console.log(`-- Room: ${data.room}`)
    }

}

export default getRoomData