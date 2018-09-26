import React, {Component} from 'react';
import './App.css';
import Home from './component/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '100'};
    }

    render() {
        return (
                <Router>
                    <Route path={'/'} component={Home} />
                </Router>
        );
    }
}

export default App;
