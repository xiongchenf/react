import React from 'react'
import { Button } from 'antd-mobile'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    handleClick() {

    }

    toAbout() {
        console.log(this)
    }

    render() {

        const Headers = props => {
            return (
                <div className={'header'}>
                    <Button type='Primary' onClick={this.handleClick.bind(this)}>Home</Button>
                    <Button onClick={this.handleClick.bind(this)}>Login</Button>
                    <Button onClick={this.toAbout.bind(this)}>About</Button>
                </div>
            )
        };
        return (
            <div>login</div>
        )
    }
}