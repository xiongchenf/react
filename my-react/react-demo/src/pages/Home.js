import React from 'react'
import { NavBar, Icon } from 'antd-mobile'
import Example from '../compnent/Example'
import Headers from '../compnent/Head'
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

// const Headers = props => {
//     return (
//         <div className={'header'}>
//             <Button type='Primary'>Home</Button>
//             <Button>Login</Button>
//             <Button onClick={props.toAbout}>About</Button>
//         </div>
//     )
// };


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

    toHome() {
        this.props.history.push('/home');
    }

    toLogin() {
        this.props.history.push('/login');
    }

    toAbout() {
        this.props.history.push('/about');
    }

    getData(data) {
        this.setState({
            childMsg: data
        });
    }

    render() {
        return (
            <div className={'container'}>
                <Head/>
                <Headers toAbout={this.toAbout.bind(this)} toHome={this.toHome.bind(this)} toLogin={this.toLogin.bind(this)}/>
                <Example name="bear.xiong" getData={this.getData.bind(this)}/>
                <p>childMsg：{this.state.childMsg}</p>
            </div>)
    }
}