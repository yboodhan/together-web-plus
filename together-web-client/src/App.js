import React, { useState, useEffect } from 'react';

// Integrate socket.io
import socketIOClient from "socket.io-client";

// Import styles
import './css/App.css';

// Import components
import Chat from './components/Chat';

// Main app
function App() {
  // Set states
  let [endpoint, setEndpoint] = useState('http://localhost:3001');

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
    <div className="App">
      <Chat></Chat>
    </div>
  );
}

export default App;
