import React from 'react';
import {Router, Route} from 'react-router';

export default class Home extends React.Component {
    constructor(props) {
        console.log(props);
        super();
    }

    render() {
        return (
            <div>
                <div>
                    THis is Home.
                </div>
            </div>
        );
    }
}