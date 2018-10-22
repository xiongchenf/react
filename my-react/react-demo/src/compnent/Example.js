import React, { Component } from 'react';

class Example extends Component {
    constructor() {
        super();
    }
    pushData() {
        let me = '';
        if (this.props.name) {
            me = 'I am '+ this.props.name + Math.random();
        }
        this.props.getData(me)
    }
    render() {
        return (
            <div className={'example'}>
                <h1>Example Component initial.</h1>
                <p>{this.props.name}, Welcome to Example page.</p>
                <button onClick={this.pushData.bind(this)}>向父组件推送数据</button>
            </div>
        )
    }
}

export default Example;