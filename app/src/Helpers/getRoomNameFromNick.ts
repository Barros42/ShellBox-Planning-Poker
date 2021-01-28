import LocalStorageKeys from "../Consts/localStorageKeys"
import RoomList from "../Domain/roomList"

const getRoomNameFromNick = (): string => {
    const storageRoom = localStorage.getItem(LocalStorageKeys.UserRoom)!
    return RoomList.find(room => room.nick === storageRoom)!.name
}

export { getRoomNameFromNick }