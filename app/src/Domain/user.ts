interface IUser {
    userId: string
    userName: string,
    vote: string
}

export default class User {
    userId: string
    userName: string
    vote: string

    constructor(payload: IUser){
        this.userId = payload.userId
        this.userName = payload.userName
        this.vote = payload.vote
    }

}