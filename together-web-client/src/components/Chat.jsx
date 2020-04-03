import React, { useEffect, useState } from 'react';

// Integrate socket.io
import socketIOClient from "socket.io-client";


const Chat = props => {
    // Set states
    let [endpoint, setEndpoint] = useState('http://localhost:3001/chat');

    // Catch events
    useEffect(() => {
    // Monitor endpoint
    const socket = socketIOClient(endpoint);
    socket.on('connected', function(response) {
        console.log(response.msg);
    });
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