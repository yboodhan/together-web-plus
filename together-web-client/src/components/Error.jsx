import React from 'react';

import {ReactComponent as ErrorImage} from '../static/404_page_not_found.svg';

const style = {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent:'center'
}

const Error = props => {
    return (
        <div>
            <h1 className="text-center">Oops, something went wrong.</h1>
            <div className="p-5" style={style}>
                <ErrorImage width={300}/>
            </div>
            <h2 className="text-center">This page is not available.</h2>
            <div className="NavItem text-center">
                <a href="/">Back to home page</a>
            </div>
        </div>

    )
}

export default Error