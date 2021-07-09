import ChangeVoteVisibilityUseCase from '../../../useCases/changeVoteVisibilityUseCase.js'

const changeVoteVisibility = {
    run: (data) => {
        try {
            const RefreshedRoom = ChangeVoteVisibilityUseCase.run(data)
            changeVoteVisibility.log(data)
            return RefreshedRoom
        } catch (error) {
            console.log(`Error :: changeVoteVisibility :: run ::`, error)
        }
    }, 

    log: (data, showVotes) => {
        console.log(`----------------------------------------------------------------`)
        console.log(`-- Votes visibility has been changed to [${data.showVotes}] :: ${new Date().toUTCString()}`)
        console.log(`-- Room: ${data.room}`)
        console.log(`-- User: ${data.client.name}`)
    }
}

export default changeVoteVisibility