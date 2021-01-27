import './index.css'
import React, { useState } from 'react'
import { Button, Card, Container, FormControl, MenuItem, Select, TextField, Typography } from '@material-ui/core'
import RegisterUserUseCase from '../../UseCases/Pages/Welcome/registerUser.useCase'
import { useHistory } from 'react-router-dom'
import ShellPokerPages from '..'
import { getUserNameFromStorage, getUserRoomFromStorage } from '../../Helpers'
 
const WelcomePage = () => {

    const registerUserUseCase = new RegisterUserUseCase()
    const appHistory = useHistory()
    const [userName, setUserName] = useState(getUserNameFromStorage('full'))
    const [userRoom, setUserRoom] = useState(getUserRoomFromStorage())

    const registerUser = async () => {
        registerUserUseCase.registerUser(userName, userRoom)
            .then((bool) => {
               if(bool) { appHistory.push(ShellPokerPages.DashboardPage.path) }
            })
    }

    const handleRoomChange = (e: any) => {
        setUserRoom(e.target.value)
    }

    return(
        <Container id='shell-main-container' maxWidth="lg">
            <Card id='shell-card'>
                <div id='shell-card-logo'></div>
                <Typography variant="h5" component="h2">
                    <b>ShellBox - Planning Poker</b>
                </Typography>

                <FormControl variant="outlined" id="shell-poker-form-control">

                    <TextField 
                        id="shell-input-username" 
                        label="Username" 
                        variant="outlined" 
                        fullWidth
                        value={userName}
                        style={{ marginTop: '20px' }}
                        onChange={e => setUserName(e.target.value)}
                        inputProps={{ maxLength: 10 }}
                    />

                    <Select
                    id="shell-input-room"
                    value={userRoom}
                    onChange={handleRoomChange}
                    style={{ marginTop: '20px' }}
                    >   
                        <MenuItem value={'null'} selected>Select a Room</MenuItem>
                        <MenuItem value={'vpower'}>V-Power</MenuItem>
                        <MenuItem value={'beta'}>Beta</MenuItem>
                        <MenuItem value={'aplha'}>Alpha</MenuItem>
                        <MenuItem value={'nafta'}>Nafta</MenuItem>
                        <MenuItem value={'system'}>System Team</MenuItem>
                        <MenuItem value={'vingadores'}>Vingadores</MenuItem>
                        <MenuItem value={'ligadajustica'}>Liga da Justiça</MenuItem>
                    </Select>
                </FormControl>

                <Button 
                    id='shell-enter-button' 
                    variant="contained" 
                    size="large" 
                    disabled={(!userName.length || userRoom === 'null')} 
                    disableElevation={(!userName.length)} 
                    disableTouchRipple={(!userName.length)} 
                    disableFocusRipple={(!userName.length)}
                    onClick={e => registerUser()}
                >
                    <b>Entrar</b>
                </Button>


            </Card>
        </Container>
    )
}

export default WelcomePage