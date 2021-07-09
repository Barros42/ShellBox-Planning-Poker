import RoomRepository from '../external/repositories/room.repository.js'

const ChangeStoryNameUseCase = {
    run: (data) => {
        RoomRepository.updateRoomStory(data.room, data.storyName)
        RoomRepository.cleanRoomVotes(data.room)
        return RoomRepository.getRoom(data.room)
    }
}

export default ChangeStoryNameUseCase