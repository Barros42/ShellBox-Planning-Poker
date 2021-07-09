import initializeRoom from '../../helpers/initializeRoom.js'

const users = []

const RoomRepository = {
    
    addUser: (room, user) => {
        if(!users[room]){
            users[room] = initializeRoom()
        }
        users[room].users.push({...user, vote: null})
    },

    removeUser: (room, user) => {
        if(!users[room]){
            users[room] = initializeRoom()
        }
        users[room].users = users[room].users.filter(u => u.id !== user.id)
    },

    getUser: (room, userId) => {
        if(!users[room]) return false
        if(!users[room].users) return false
        return users[room].users.find(u => u.id === userId)
    },

    getAllUsersFromRoom: (room) => {
        if(!users[room]){
            users[room] = initializeRoom()
        }
        return users[room].users
    },

    getRoom: (room) => {
        if(!users[room]){
            users[room] = initializeRoom()
        }
        return users[room]
    },

    setUserVote: (room, user, vote) => {
        users[room].users = users[room].users.map(u => {
            if(u.id == user){
                u.vote = vote
            }
            return u
        })
    },

    changeRoomVoteVisibility: (room, action) => {
        users[room].showVotes = action
    },

    cleanRoomVotes: (room) => {
        users[room].users = users[room].users.map(user => {
            user.vote = null
            return user
        })
    },

    updateRoomStory: (room, storyName) => {
        users[room].story = storyName
    }

}

export default RoomRepository