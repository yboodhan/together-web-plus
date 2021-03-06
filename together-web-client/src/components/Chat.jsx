import React, { useState, useEffect } from 'react';

// Integrate socket.io
import socketIOClient from "socket.io-client";
let socket = socketIOClient('http://localhost:3001/chat');

const Chat = props => {
    // Set states
    let [message, setMessage] = useState('');
    let [allMessages, setAllMessages] = useState([]);

    // Catch events
    useEffect(() => {
        // Check socket has connected
        socket.on('connected', (response) => {
            console.log(response.msg);
            socket.emit('eventName1');
            socket.emit('eventName2');
        });

        // Add messages to display
        socket.on('displayMessage', (response) => {
            console.log('The message to add is:', response.message);
            setAllMessages([...allMessages, response.message]);
        });

    }, [allMessages]);

    const handleChange = (event) => {
        setMessage(event.target.value);
        console.log(`The message is now ${message}`);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`A message was submitted: ${message}`);

        // Socket
        socket.emit('messageSent', { message: message });

        // Clear field
        setMessage('');

    }

    
    return (
        <div>
            <h1>Chat</h1>
            <div>
                <p>Message history:</p>
                <div className="messageHistory overflow-auto border mb-2" style={{ height: "400px", width:"400px" }}>
                    {
                        allMessages.map( (msg, i) => {
                            return (
                                <div key={i}>{msg}</div>
                            );
                        })
                    }
                </div>
            </div>
            <form onSubmit={handleSubmit} >
                <div className="form-inline">
                    <input type="text" className="form-control" id="message" aria-describedby="message" value={message} onChange={handleChange}/>
                    <button type="submit" className="btn btn-primary mx-2">Submit</button>
                </div>
            </form>
        </div>

    )
}

export default Chat