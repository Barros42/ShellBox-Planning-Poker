import { IconButton, MenuItem, Menu as MainMenu } from '@material-ui/core';
import { Menu } from '@material-ui/icons'
import Dictionary from 'Core/Dictionary';
import React from 'react'
import { useHistory } from 'react-router-dom';
import { logoutUser } from '../../../Helpers';
import ShellPokerPages from '../../../Pages';

interface IMainMenToolbar {
    changeVoteVisibility: Function,
    cleanRoomVotes: Function,
    changeHistory: Function
    voteVisibility: boolean,
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
                <MenuItem onClick={() => { props.changeVoteVisibility(); handleClose() }}>{`${(props.voteVisibility) ? Dictionary.hide : Dictionary.show} ${Dictionary.votes}`}</MenuItem>
                <MenuItem onClick={() => { props.changeHistory(); handleClose(); }}>{Dictionary.changeHistory}</MenuItem>
                <MenuItem onClick={() => { props.cleanRoomVotes(); handleClose(); }}>{Dictionary.clearVotes}</MenuItem>
                <MenuItem onClick={() => { logoutAndRedirect(); }}>{Dictionary.logout}</MenuItem>
            </MainMenu>
        </>
    )


}

export default MainMenToolbar