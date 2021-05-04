import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import AppConfig from '../../../Core/AppConfig'
import { getRoomNameFromNick, getUserNameFromStorage } from '../../../Helpers'
import MainMenToolbar from '../MainMenu'
import Dictionary  from '../../../Core/Dictionary'
import './index.css'

interface IMainToolbar{
    changeVoteVisibility: Function,
    voteVisibility: boolean,
    cleanRoomVotes: Function
}

const MainToolbar = (props: IMainToolbar) => {

    const [userName, setUserName] = useState('Visitante')
    const [roomName] = useState(getRoomNameFromNick())

    useEffect(() => {
        setUserName(getUserNameFromStorage('partial'))
    },[])

    return(
        <AppBar position="static">
            <Toolbar id='shell-poker-toolbar'>
                
                <MainMenToolbar 
                    changeVoteVisibility={props.changeVoteVisibility}
                    voteVisibility={props.voteVisibility}
                    cleanRoomVotes={props.cleanRoomVotes}
                />
                
                <div id='shellbox-toolbar-icon'></div>
                <Typography id="shell-poker-appname" className="only-desktop singleLineWithDots" variant="h5" component="h2" title={`${AppConfig.appName} | ${roomName} @ v${AppConfig.appVersion}`}><b>{`${AppConfig.appName}`} | {`${roomName}`}</b></Typography>
                <Typography id="shell-poker-appname" className="only-mobile" variant="h5" component="h2" title={`${AppConfig.appName} | ${roomName} @ v${AppConfig.appVersion}`}><b>{`${AppConfig.appName}`} <br/> {`${roomName}`}</b></Typography>
                <Typography id="shell-poker-username" variant="h6" component="h2" title={`${Dictionary.hello} ${userName}`}>{Dictionary.hello} {userName}</Typography>
            </Toolbar>
        </AppBar>
    )

}

export default MainToolbar