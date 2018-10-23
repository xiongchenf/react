import React from 'react'
import {Button} from 'antd'
import { NavBar, Icon } from 'antd-mobile'
import Example from '../compnent/Example'
import '../style/home.scss'
import 'antd-mobile/dist/antd-mobile.css'

const Head = (props) => {
    return (
        <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={() => console.log('onLeftClick')}
            rightContent={[
                <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                <Icon key="1" type="ellipsis" />,
            ]}
        >NavBar</NavBar>
    );
};

const Headers = props => {
    return (
        <div className={'header'}>
            <Button type='Primary'>Home</Button>
            <Button>Login</Button>
            <Button onClick={props.toAbout}>About</Button>
        </div>
    )
};


export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            childMsg: ''
        };
    }

    handleClick() {
        this.props.history.push('/about');
    }

    toAbout(e) {
        this.props.history.push('/about')
    }

    getData(data) {
        this.setState({
            childMsg: data
        });
    }

    render() {
        return (
            <div className={'container'}>
                <Headers toAbout={this.toAbout.bind(this)}/>
                <Example name="bear.xiong" getData={this.getData.bind(this)}/>
                <p>childMsg：{this.state.childMsg}</p>
            </div>)
    }
}