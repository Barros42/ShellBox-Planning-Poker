class SocketEventsInput {
    readonly refreshingRoom = 'refreshRoom'
    readonly cleaningVotes = 'cleanVotes'
}

class SocketEventsOutput {
    readonly userExiting = 'userExiting'
    readonly userVoted = 'newVote'
    readonly changeVoteVisibility = 'changeVoteVisibility'
    readonly cleanVotes = 'cleanVotes'
}


export default class SocketEvents {
    static readonly input: SocketEventsInput = new SocketEventsInput()
    static readonly output: SocketEventsOutput = new SocketEventsOutput()
}