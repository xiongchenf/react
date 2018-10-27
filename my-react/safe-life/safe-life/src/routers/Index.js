import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Index from '../pages/Index'

export default () => {
    return (
        <BrowserRouter>
            <div>
                <Route path={'/'} component={Index}/>
            </div>
        </BrowserRouter>
    )
}