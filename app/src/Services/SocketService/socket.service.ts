import io from 'socket.io-client'
import AppConfig from '../../Core/AppConfig'
import SocketEvents from '../../Core/SocketEvents'

export default class SocketService {

    private readonly socket: SocketIOClient.Socket = io()

    constructor(room: string, clientId: string, clientName: string){
        console.log('SocketService :: connect')
       
        if(!this.socket.connected){
            this.socket = io(AppConfig.apiUrl, {
                query:{
                    room,
                    clientId,
                    clientName
                }
            })
        }
    }

    public disconnect(): void {
        console.log(`Socket Service :: disconnect`)
        this.emit(SocketEvents.output.userExiting, null)
        setTimeout(() => {
            this.socket.disconnect()
        }, 500)
    }

    public isConnected():boolean {
        return this.socket.connected
    }

    public on(event: string, callBack: Function): void {
        this.socket.on(event, (data: any) =>{
            callBack(data)
        })
    }

    public emit(event: string, payload: any): void {
        this.socket.emit(event, payload)
    }
    
}