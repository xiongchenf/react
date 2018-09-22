import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Login from './component/Login';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {browserHistory} from 'react-router';

function format(user) {
    // 纯函数
    return user.firstName + '.' + user.name
}

function Map(props) {
    // 自定义组件
    let data = null;
    if (typeof props.data === 'string') {
        data = props.data.split('');
    }
    let dom = data.map((val, index) =>
        <span className="letter" key={index}>{val}</span>
    );
    return dom;
}

class App extends Component {
    constructor(props) {
        super(props);
        this.showEvent = this.showEvent.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.toHome = this.toHome.bind(this);
        this.state = {value: ''};
    }

    showEvent(e) {
        console.log(e);
    }

    handleInput(e) {
        this.setState({value: e.target.value});
        console.log(this.state)
    }

    toHome(e) {
        console.log(e);
        // browserHistory.push('/Home');
        // BrowserRouter.push();
    }

    render() {
        // 事件
        const logoDom = <img onClick={this.showEvent} src={logo} className="App-logo" alt="logo"/>;
        const user = {firstName: 'bear', name: 'xiong'};
        return (
            <div className="App">
                <header className="App-header">
                    {logoDom}
                    <Home name={user}/>
                    <Map data="bear.xiong"/>

                </header>
                <div className='input'>
                    <input onChange={this.handleInput} type="text"/>
                </div>
                <Router>
                    <div>
                        <Link to='/Home'>HOME</Link>
                        <p></p>
                        <Link to='/Login'>LOGIN</Link>
                        <p></p>
                        <a onClick={this.toHome} href="javascript:void(0);">TO HOME</a>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
