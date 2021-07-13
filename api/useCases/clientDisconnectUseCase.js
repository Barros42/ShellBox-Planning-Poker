import RoomRepository from '../external/repositories/room.repository.js'
import initializeRoom from '../helpers/initializeRoom.js'

const ClientDisconnectUseCase = {

    run: (data) => {

        const userExists = RoomRepository.getUser(data.room, data.client.id)

        if(userExists){
            RoomRepository.removeUser(data.room, data.client)
        }

        const usersFromFroom = RoomRepository.getAllUsersFromRoom(data.room)
        const noUsersInRoom = (!usersFromFroom || !usersFromFroom.length)

        if(noUsersInRoom){
            const emptyRoom = initializeRoom()
            RoomRepository.changeRoomVoteVisibility(data.room, false)
            RoomRepository.updateRoomStory(data.room, emptyRoom.story)
        }
        
        return RoomRepository.getRoom(data.room)

    }

}

export default ClientDisconnectUseCase