import RoomRepository from '../external/repositories/room.repository.js'

const ChangeVoteVisibilityUseCase = {

    run: (room, action) => {
        RoomRepository.changeRoomVoteVisibility(room, action)
        return RoomRepository.getRoom(room)
    }

}

export default ChangeVoteVisibilityUseCase