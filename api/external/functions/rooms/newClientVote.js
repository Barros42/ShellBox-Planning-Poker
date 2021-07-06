import NewClientVoteUseCase from '../../../useCases/newClientVoteUseCase.js'
import getDataFromHandshake from '../../../helpers/getDataFromHandshake.js'

const newClientVote = {

    run: (data) => {
      try {
        const RefreshedRoom = NewClientVoteUseCase.run(data)
        newClientVote.log(data)
        return RefreshedRoom
      } catch (error) {
        console.log(`Error :: newClientVote :: run ::`, error)
      }
    },

    log: (data) => {
      console.log(`----------------------------------------------------------------`)
        console.log(`-- Client Voted :: ${new Date().toUTCString()}`)
        console.log(`-- Room: ${data.room}`)
        console.log(`-- User: ${data.client.name}`)
        console.log(`-- Vote: ${data.vote}`)
    }

}

export default newClientVote