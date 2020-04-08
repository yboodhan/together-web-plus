import React from 'react';

import { Link } from 'react-router-dom';

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
                <ErrorImage height={300} width={300}/>
            </div>
            <h2 className="text-center">This page is not available.</h2>
            <div className="NavItem text-center">
                    <a><Link to="/">Back to home page</Link></a>
            </div>
        </div>

    )
}

export default Error