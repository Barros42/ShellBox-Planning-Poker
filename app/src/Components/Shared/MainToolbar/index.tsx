import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import AppConfig from '../../../Core/AppConfig'
import { getUserNameFromStorage } from '../../../Helpers'
import MainMenToolbar from '../MainMenu'
import './index.css'

interface IMainToolbar{
    changeVoteVisibility: Function,
    voteVisibility: boolean,
    cleanRoomVotes: Function
}

const MainToolbar = (props: IMainToolbar) => {

    const [userName, setUserName] = useState('Visitante')

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
                <Typography id="shell-poker-appname" variant="h5" component="h2" title={AppConfig.appName}><b>{AppConfig.appName}</b></Typography>
                <Typography id="shell-poker-username" variant="h6" component="h2" title={`Olá, ${userName}`}>Olá, {userName}</Typography>
            </Toolbar>
        </AppBar>
    )

}

export default MainToolbar