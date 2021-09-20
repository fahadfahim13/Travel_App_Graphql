import React from 'react';
import './App.css';

import Login from './components/Login';
import Navigation from './components/Navigation';

function App() {

  return (
    <div className="columns is-mobile">
      <div className="column is-half is-offset-one-quarter">
        <Navigation />
        <Login />
        
      </div>
    </div>
  );
}

export default App;
