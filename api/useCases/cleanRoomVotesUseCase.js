import RoomRepository from '../external/repositories/room.repository.js'

const CleanRoomVotesUseCase = {

    run: (data) => {
        RoomRepository.cleanRoomVotes(data.room)
        RoomRepository.changeRoomVoteVisibility(data.room, false)
        return RoomRepository.getRoom(data.room)
    }

}

export default CleanRoomVotesUseCase