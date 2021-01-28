import React from 'react'
import './index.css'

interface IUserItem{
    name: string,
    vote: string,
    showVotes: boolean
}

const UserItem = (props: IUserItem) => {

    const showVotesClass = (props.showVotes) ? 'voted' : ''
    const userVote = (props.vote) ? props.vote : '🤷'
    const containVotesClass = (props.vote) ? 'contain-votes' : ''

    return(
        <div className={`user-item ${containVotesClass} ${showVotesClass}`} title={`${props.name}`}>
            <div className='user-item-name'>{props.name}</div>
            <div className='user-item-nota' title={userVote}>{userVote}</div>
        </div>
    )
}

export default UserItem