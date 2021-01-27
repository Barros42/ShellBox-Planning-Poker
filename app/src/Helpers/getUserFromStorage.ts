import LocalStorageKeys from "../Consts/localStorageKeys";
import User from "../Domain/user";

const getUserFromStorage = (): User => {
    return JSON.parse(localStorage.getItem(LocalStorageKeys.UserCredentials)!) as User
}

export { getUserFromStorage }