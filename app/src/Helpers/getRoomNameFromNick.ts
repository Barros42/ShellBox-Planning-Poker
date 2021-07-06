import LocalStorageKeys from "../Consts/localStorageKeys"
import RoomList from "../Domain/roomList"

const getRoomNameFromNick = (): string => {
    const encodedStorageRoom = localStorage.getItem(LocalStorageKeys.UserRoom)!
    const storageRoom = Buffer.from(encodedStorageRoom, 'base64').toString()
    return RoomList.find(room => room.nick === storageRoom)!.name
}

export { getRoomNameFromNick }