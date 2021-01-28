import RoomRepository from '../external/repositories/room.repository.js'

const ClientDisconnectUseCase = {

    run: (data) => {

        const userAdded = RoomRepository.getUser(data.room, data.client.id)

        if(userAdded){
            RoomRepository.removeUser(data.room, data.client)
        }

        const usersFromFroom = RoomRepository.getAllUsersFromRoom(data.room)
        const hasUsersInRoom = (!usersFromFroom || !usersFromFroom.length)

        if(hasUsersInRoom){
            RoomRepository.changeRoomVoteVisibility(data.room, false)
        }
        
        return RoomRepository.getRoom(data.room)

    }

}

export default ClientDisconnectUseCase