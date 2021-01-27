import LocalStorageKeys from "../Consts/localStorageKeys";

const getUserRoomFromStorage = (): string => {
    const room = localStorage.getItem(LocalStorageKeys.UserRoom)

    if(!room){
        return 'null'
    }

    return room

}

export { getUserRoomFromStorage }