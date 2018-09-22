import React from 'react';

export default class Login extends React.Component {
    constructor (props) {
        super(props);
        this.userInfo = {name: '', password: ''};
        this.nameInput = this.nameInput.bind(this);
    }

    nameInput(e) {
        this.setState({userInfo: e.target.value});
    }

    render() {
        return (
            <div className='login'>
                <input name='name' type="text" onChange={this.nameInput} value={this.userInfo.name} />
            </div>
        );
    }
}