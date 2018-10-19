import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './Login'

export default class App extends React.Component {
    render() {
        return (
            <div className={'Home'}>
                <div>This is Home page.</div>
                <BrowserRouter>
                    <Route path="/login" component={Login}/>
                </BrowserRouter>
            </div>
        );
    }
}