import React from 'react';

const Home = (props) => {
    console.log(props);
    return(
        <h1>
            { props.name.name }
        </h1>
    )
}


export default Home;