import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import appBootstrap from '../Helpers/appBootstrap'
import ShellPokerPages from '../Pages'
import LoggedRoute from './LoggedRoute'

const ShellRouter = () => {

    useEffect(() => {
        appBootstrap()
    })

    return(
        <Router>
            <Switch>
                <LoggedRoute path={ShellPokerPages.DashboardPage.path} component={ShellPokerPages.DashboardPage.component} />
                <Route path={ShellPokerPages.WelcomePage.path} component={ShellPokerPages.WelcomePage.component} />
            </Switch>
        </Router>
    )
}

export default ShellRouter