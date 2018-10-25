import React  from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './component/Home'
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/'} component={Home}/>
                <Route path={'/home'} component={Home}/>
            </Switch>
        </BrowserRouter>
    );
};


export default class App extends React.Component{
    render(){
        return <Routes/>
    }
}
