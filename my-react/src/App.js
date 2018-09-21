import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

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
        this.state = {value: ''};
    }

    showEvent(e) {
        console.log(e);
        console.log(this);
    }

    handleInput(e) {
        this.setState({value: e.target.value});
        console.log(this.state)
    }

    render() {
        // 事件
        const logoDom = <img onClick={this.showEvent} src={logo} className="App-logo" alt="logo"/>;
        const user = {firstName: 'bear', name: 'xiong'};
        return (
            <div className="App">
                <header className="App-header">
                    {logoDom}
                    <p>{format(user)}</p>
                    <Map data="bear.xiong"/>
                </header>
                <div className='input'>
                    <input onChange={this.handleInput} type="text"/>
                </div>
            </div>
        );
    }
}

export default App;
