import CleanRoomVotesUseCase from '../../../useCases/cleanRoomVotesUseCase.js'

const cleanRoomVotes = {
    run: (data) => {
      try {
        const RefreshedRoom = CleanRoomVotesUseCase.run(data)
        cleanRoomVotes.log(data)
        return RefreshedRoom
      } catch (error) {
        console.log(`Error :: cleanRoomVotes :: run ::`, error)
      }
    },

    log: (data) => {
      console.log(`----------------------------------------------------------------`)
      console.log(`-- Votes have been cleared :: ${new Date().toUTCString()}`)
      console.log(`-- Room: ${data.room}`)
      console.log(`-- User: ${data.client.name}`)
    }
}

export default cleanRoomVotes