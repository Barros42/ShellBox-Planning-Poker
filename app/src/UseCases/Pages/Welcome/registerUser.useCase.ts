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
            const encodedCredentials = Buffer.from(JSON.stringify(res)).toString('base64')
            const encodedRoom = Buffer.from(userRoom).toString('base64')
            localStorage.setItem(LocalStorageKeys.UserCredentials, encodedCredentials)
            localStorage.setItem(LocalStorageKeys.UserRoom, encodedRoom)
            return true
        }).catch(err => {
            localStorage.removeItem(LocalStorageKeys.UserCredentials)
            localStorage.removeItem(LocalStorageKeys.UserRoom)
            return false
        })

    }

}