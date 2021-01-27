import { IconButton, MenuItem, Menu as MainMenu } from '@material-ui/core';
import { Menu } from '@material-ui/icons'
import React from 'react'
import { useHistory } from 'react-router-dom';
import { logoutUser } from '../../../Helpers';
import ShellPokerPages from '../../../Pages';

interface IMainMenToolbar {
    changeVoteVisibility: Function,
    voteVisibility: boolean,
    cleanRoomVotes: Function
}

const MainMenToolbar = (props: IMainMenToolbar) => {

    const appHistory = useHistory()

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const logoutAndRedirect = () => {
        logoutUser();
        handleClose();
        appHistory.push(ShellPokerPages.WelcomePage.path)
    }

    return(
        <>
            <IconButton edge="start" color="inherit" aria-label="menu"  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} > 
                <Menu />
            </IconButton>

            <MainMenu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => { props.changeVoteVisibility(); handleClose() }}>{`${(props.voteVisibility) ? 'Esconder' : 'Mostrar'} Votos`}</MenuItem>
                <MenuItem onClick={() => { props.cleanRoomVotes(); handleClose(); }}>Limpar Votos</MenuItem>
                <MenuItem onClick={() => { logoutAndRedirect(); }}>Logout</MenuItem>
            </MainMenu>
        </>
    )


}

export default MainMenToolbar