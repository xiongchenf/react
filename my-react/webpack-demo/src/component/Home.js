import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './Login'

const Header = <div>This is Header.</div>;

export default class App extends React.Component {
    render() {
        return (
            <div className={'Home'}>
                <Header />
                <BrowserRouter>
                    <Route path="/login" component={Login}/>
                </BrowserRouter>
            </div>
        );
    }
}