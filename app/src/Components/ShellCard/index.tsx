import React from 'react'
import { navigatorVibrate } from '../../Helpers'
import './index.css'

interface IShellCardProps {
    value: string,
    voteFunction: Function,
    currentVote: string | null
}

const ShellCard = (props: IShellCardProps) => {

    let cardClass = (props.currentVote && (props.currentVote !== props.value)) ? 'disabled' : ''
    if(props.currentVote === props.value){
        cardClass = 'selected'
    }

    const selectThisCard = (): void => {
        if(props.currentVote) return
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