import LocalStorageKeys from "../Consts/localStorageKeys"

const getUserNameFromStorage = (arg: 'full' | 'partial'): string => {
    const UserData = JSON.parse(localStorage.getItem(LocalStorageKeys.UserCredentials)!)
    
    if(!UserData) return ''

    let userName = UserData.userName
    
    if(arg === 'partial') {
        userName = userName.split(' ')[0]
    }

    return userName
}

export { getUserNameFromStorage }