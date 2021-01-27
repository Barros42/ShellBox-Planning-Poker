import { v4 } from 'uuid'

export default class RegisterUserService { 

    registerUser(userName: string): Promise<any>{
        return new Promise((res, rej) => {
            res({
                userName,
                userId: v4()
            })
        })
    }

}