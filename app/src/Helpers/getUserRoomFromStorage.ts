import LocalStorageKeys from "../Consts/localStorageKeys";

const getUserRoomFromStorage = (): string => {
    const encodedRoom = localStorage.getItem(LocalStorageKeys.UserRoom)

    if(!encodedRoom){
        return 'null'
    }

    const room = Buffer.from(encodedRoom,'base64').toString()

    return room

}

export { getUserRoomFromStorage }