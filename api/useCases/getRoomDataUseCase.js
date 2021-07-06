import RoomRepository from '../external/repositories/room.repository.js'

const GetRoomDataUseCase = {

    run: (data) => {
        const currentRoom = data.room
        return RoomRepository.getRoom(currentRoom)
    }

}

export default GetRoomDataUseCase