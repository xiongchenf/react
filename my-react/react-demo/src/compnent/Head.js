import React, { Component } from 'react';
import {Button} from 'antd-mobile'

class Head extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'header'}>
                <Button onClick={this.props.toHome.bind(this)} type='Primary'>Home</Button>
                <Button onClick={this.props.toLogin.bind(this)}>Login</Button>
                <Button onClick={this.props.toAbout.bind(this)}>About</Button>
            </div>
        );
    }
}

export default Head;