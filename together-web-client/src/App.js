import React from 'react';

// Import Router to navigate
import { BrowserRouter as Router } from 'react-router-dom';

// Import styles
import './css/App.css';

// Import components
import Content from './components/Content';
import NavBar from './components/NavBar';

// Main app
function App() {

  return (
    <Router>
      <div className="App">
        <main>
          <Content/>
        </main>
      </div>
    </Router>
  );
}

export default App;
