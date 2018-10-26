import React from 'react'
import '../style/index.scss'
import Head from '../component/Head'
import Foot from '../component/Foot'

class Index extends React.Component {
    render() {
        return  (
            <div className={'container'}>
                <Head/>
                <div className='index'>
                    index page.
                </div>
                <Foot/>
            </div>
        )
    }
}

export default Index