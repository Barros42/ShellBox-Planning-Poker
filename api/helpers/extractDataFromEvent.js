import getDataFromHandshake from "./getDataFromHandshake.js"

const extractDataFromEvent = (socket, payload = {}) => {
    const socketData = getDataFromHandshake(socket.handshake.query)
    return {
        ...socketData,
        ...payload,
    }
}

export default extractDataFromEvent