import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage'
import SetState from './components/SetState'
import ReduxSection from './components/ReduxSection'
import ServerPage from './components/ServerPage'


export default (
    <Switch>
        <Route exact path ='/' component={HomePage}/>
        <Route path ='/setstate' component={SetState}/>
        <Route path ='/reduxsection' component={ReduxSection}/>
        <Route path ='/serverpage' component={ServerPage}/>
    </Switch>
)