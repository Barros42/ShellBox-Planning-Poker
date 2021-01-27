import LocalStorageKeys from "../Consts/localStorageKeys"

const userIsLogged = () => {
    const UserData = JSON.parse(localStorage.getItem(LocalStorageKeys.UserCredentials)!)
    return (UserData && UserData.userName && UserData.userId)
}

export { userIsLogged }