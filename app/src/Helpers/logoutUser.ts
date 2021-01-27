import LocalStorageKeys from "../Consts/localStorageKeys"

const logoutUser = (): void => {
    localStorage.removeItem(LocalStorageKeys.UserCredentials)
    localStorage.removeItem(LocalStorageKeys.UserLastVote)
    localStorage.removeItem(LocalStorageKeys.UserRoom)
}

export { logoutUser }