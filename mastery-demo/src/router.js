import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage'
import SetState from './components/SetState'
import ReduxSection from './components/ReduxSection'
import ServerPage from './components/ServerPage'

const Test = ({ test }) => (
    <div>
        <h2>Home {test}</h2>
    </div>
)


export default (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/setstate' component={SetState} />
        <Route path='/reduxsection' component={ReduxSection} />
        <Route path='/serverpage' component={ServerPage} />
        <Route path='/:home' component={HomePage}/>
        <Route path='/there' render={(props) => {
            return <div>You are here</div>
        }} />
    </Switch>
)