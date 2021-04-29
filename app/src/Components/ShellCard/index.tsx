import React from 'react'
import { navigatorVibrate } from '../../Helpers'
import './index.css'

interface IShellCardProps {
    value: string,
    voteFunction: Function,
    currentVote: string | null,
    isVisible: boolean
}

const ShellCard = (props: IShellCardProps) => {

    const isVoteVisible = () => props.isVisible

    let cardClass = ((isVoteVisible())) ? 'disabled' : ''
    cardClass = (props.currentVote === props.value) ? 'selected' : cardClass
    
    const selectThisCard = (): void => {
        if((isVoteVisible())) return
        navigatorVibrate(100)
        props.voteFunction(props.value)
    }

    return(
        <div className={`shell-card ${cardClass}`} onClick={selectThisCard} title={`${props.value}`}>
            {props.value}
        </div>
    )

}

export default ShellCard