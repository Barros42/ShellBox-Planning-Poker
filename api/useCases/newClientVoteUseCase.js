import RoomRepository from '../external/repositories/room.repository.js'

const NewClientVoteUseCase = {

    run: (data, payload) => {
        const currentRoom = data.room
        const currentUser = data.client.id
        const currentVote = payload.vote
        RoomRepository.setUserVote(currentRoom, currentUser, currentVote)
        const userWhoVoted = RoomRepository.getUser(currentRoom, currentUser)
        console.log(`[${currentRoom}] :: User => ${userWhoVoted.name} :: Voted => ${userWhoVoted.vote}`)
        return RoomRepository.getRoom(currentRoom)
    }

}

export default NewClientVoteUseCase