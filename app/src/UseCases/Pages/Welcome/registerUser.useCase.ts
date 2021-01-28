import RegisterUserService from "../../../Services/RegisterUser/RegisterUser.service"
import LocalStorageKeys from '../../../Consts/localStorageKeys'
import { userIsLogged } from '../../../Helpers'

export default class RegisterUserUseCase {

    private readonly registerUserService: RegisterUserService

    constructor(){
        this.registerUserService = new RegisterUserService()
    }

    async registerUser(userName: string, userRoom: string): Promise<boolean> {
        localStorage.removeItem(LocalStorageKeys.UserLastVote)
        
        const userAlreadyLogged = userIsLogged()
        if(userAlreadyLogged) return true

        return this.registerUserService.registerUser(userName).then(res => {
            localStorage.setItem(LocalStorageKeys.UserCredentials, JSON.stringify(res))
            localStorage.setItem(LocalStorageKeys.UserRoom, userRoom)
            return true
        }).catch(err => {
            localStorage.removeItem(LocalStorageKeys.UserCredentials)
            localStorage.removeItem(LocalStorageKeys.UserRoom)
            return false
        })

    }

}