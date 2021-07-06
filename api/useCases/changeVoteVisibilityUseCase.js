import RoomRepository from '../external/repositories/room.repository.js'

const ChangeVoteVisibilityUseCase = {

    run: (data) => {
        RoomRepository.changeRoomVoteVisibility(data.room, data.showVotes)
        return RoomRepository.getRoom(data.room)
    }

}

export default ChangeVoteVisibilityUseCase