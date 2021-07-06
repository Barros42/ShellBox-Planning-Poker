import LocalStorageKeys from "../Consts/localStorageKeys"

const getUserNameFromStorage = (arg: 'full' | 'partial'): string => {
    const UserDataEncoded = localStorage.getItem(LocalStorageKeys.UserCredentials)!
    
    if(!UserDataEncoded) return ''

    const UserData = JSON.parse(Buffer.from(UserDataEncoded,'base64').toString())

    let userName = UserData.userName
    
    if(arg === 'partial') {
        userName = userName.split(' ')[0]
    }

    return userName
}

export { getUserNameFromStorage }