import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './component/Home'

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/" component={Home}/>
            </BrowserRouter>
        );
    }
}