import React, { useState, useEffect } from 'react';

// Integrate socket.io
import socketIOClient from "socket.io-client";

const Watch = props => {
    // Set states
    let [endpoint, setEndpoint] = useState('http://localhost:3001/watch');

    // Catch events
    useEffect(() => {
    // Monitor endpoint
    const socket = socketIOClient(endpoint);
    socket.on('connected', function(response) {
        console.log(response.msg);
        socket.emit('eventName1');
        socket.emit('eventName2');
        });
    });

    return (
        <div>
            <h1>Video!</h1>

        </div>
    )
}

export default Watch