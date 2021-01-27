import RoomRepository from '../external/repositories/room.repository.js'

const ClientConnectedUseCase = {

    run: (data) => {

        const userAlreadyAdded = RoomRepository.getUser(data.room, data.client.id)

        if(!userAlreadyAdded){
            RoomRepository.addUser(data.room, data.client)
        }

        return RoomRepository.getRoom(data.room)

    }

}

export default ClientConnectedUseCase