const getDataFromHandshake = (handShakeData) => {

    const room = handShakeData.room
    const clientId = handShakeData.clientId
    const clientName = handShakeData.clientName

    return {
        room, 
        client: {
            id:  clientId,
            name: clientName
        }
    }
    
}

export default getDataFromHandshake