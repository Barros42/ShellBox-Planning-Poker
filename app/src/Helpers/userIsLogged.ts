import LocalStorageKeys from "../Consts/localStorageKeys"

const userIsLogged = () => {
    const encodedData = localStorage.getItem(LocalStorageKeys.UserCredentials)!
    const data = (encodedData) ? Buffer.from(encodedData,'base64').toString() : '{}'
    const UserData = JSON.parse(data)
    return (UserData && UserData.userName && UserData.userId)
}

export { userIsLogged }