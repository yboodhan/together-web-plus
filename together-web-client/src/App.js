import React, { useState, useEffect } from 'react';

// Integrate socket.io
import socketIOClient from "socket.io-client";

// Import styles
import './css/App.css';

// Import components
import WatchChat from './components/WatchChat';

// Main app
function App() {
  // Set states
  let [endpoint, setEndpoint] = useState('http://127.0.0.1:3001');
    
  // Monitor endpoint
  const socket = socketIOClient(endpoint);

  // Catch events
  useEffect(() => {
    socket.on('connected', function(response) {
        console.log("hey", response.msg);
    });
  });

  return (
    <div className="App">
      <h1>Watch Chat Page</h1>
      <WatchChat></WatchChat>
    </div>
  );
}

export default App;
