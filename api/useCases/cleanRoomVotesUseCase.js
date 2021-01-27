import RoomRepository from '../external/repositories/room.repository.js'

const CleanRoomVotesUseCase = {

    run: (room) => {
        RoomRepository.cleanRoomVotes(room)
        RoomRepository.changeRoomVoteVisibility(room, false)
        return RoomRepository.getRoom(room)
    }

}

export default CleanRoomVotesUseCase