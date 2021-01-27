const initializeRoom = () => {
    let room = {}
    room.users = []
    room.showVotes = false
    room.story = 'Some Story'
    return room
}

export default initializeRoom