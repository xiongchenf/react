import React from 'react'

export default class Home extends React.Component {

    handleClick() {
        this.props.history.push('/about');
    }

    render() {
        return (
            <div className={'home'}>
                <button onClick={this.handleClick.bind(this)}>Go to About.</button>
            </div>
        )
    }
}