import appConfig from '../appConfig.json'

const RoomList: {nick: string, name: string}[] = appConfig.ROOMS.map(r => {
    r.nick = r.nick.split(' ').join('-')
    return r
})

export default RoomList