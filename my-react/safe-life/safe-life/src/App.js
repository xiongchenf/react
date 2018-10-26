import React  from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Index from './pages/Index'

import './style/app.scss'
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/'} component={Index}/>
            </Switch>
        </BrowserRouter>
    );
};


export default class App extends React.Component{
    render(){
        return <Routes/>
    }
}
