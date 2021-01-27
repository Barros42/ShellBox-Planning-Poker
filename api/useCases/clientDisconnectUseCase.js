import RoomRepository from '../external/repositories/room.repository.js'

const ClientDisconnectUseCase = {

    run: (data) => {

        const userAdded = RoomRepository.getUser(data.room, data.client.id)

        if(userAdded){
            RoomRepository.removeUser(data.room, data.client)
        }

        return RoomRepository.getRoom(data.room)

    }

}

export default ClientDisconnectUseCase