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
            <h1 className="text-center">Oops, this page cannot be found.</h1>
            <div className="p-5" style={style}>
                <ErrorImage height={300} width={300}/>
            </div>
        </div>

    )
}

export default Error