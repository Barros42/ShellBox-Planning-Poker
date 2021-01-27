import React, { useState } from 'react'
import { Route, useHistory } from 'react-router-dom'
import { userIsLogged } from '../Helpers'
import ShellPokerPages from '../Pages'

const LoggedRoute = (props: any) => {

    const [userLogged] = useState(userIsLogged())
    const appHistory = useHistory()

    const goToHomePage = () =>{
        appHistory.push(ShellPokerPages.WelcomePage.path)
    }

    return(
        <>
        {
            userLogged 
            ? 
            <Route {...props} />
            :
            goToHomePage()
        }
        </>       
    )

}

export default LoggedRoute