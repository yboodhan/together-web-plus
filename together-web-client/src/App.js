import React from 'react';

// Import Router to navigate
import { BrowserRouter as Router } from 'react-router-dom';

// Import styles
import './css/App.css';

// Import components
import Content from './components/Content';

// Main app
function App() {

  return (
    <Router>
      <div className="App">
        <Content/>
      </div>
    </Router>
  );
}

export default App;
