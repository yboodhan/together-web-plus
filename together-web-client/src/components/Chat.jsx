import React, { useEffect, useState } from 'react';

const Chat = props => {
    let newEndpoint = 'http://localhost:3001/chat';

    useEffect(() => {
        // Monitor endpoint
        props.handleEndpoint(newEndpoint);
    });
    
    return (
        <div>
            <h1>Chat</h1>
            <div>
                <p>Message history:</p>
                <div className="messageHistory overflow-auto border mb-2" style={{ height: "400px", width:"400px" }}>

                </div>
            </div>
            <form>
                <div className="form-inline">
                    <input type="text" className="form-control" id="message" aria-describedby="message"/>
                    <button type="submit" className="btn btn-primary mx-2">Submit</button>
                </div>
            </form>
        </div>

    )
}

export default Chat