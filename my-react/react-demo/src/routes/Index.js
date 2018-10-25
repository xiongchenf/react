import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import About from '../pages/About'

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/about' component={About}/>
        </Switch>
    </BrowserRouter>
)
