import LocalStorageKeys from "../Consts/localStorageKeys";
import User from "../Domain/user";

const getUserFromStorage = (): User => {
    const encodedData = localStorage.getItem(LocalStorageKeys.UserCredentials)!
    const user = Buffer.from(encodedData, 'base64').toString()
    return JSON.parse(user) as User
}

export { getUserFromStorage }