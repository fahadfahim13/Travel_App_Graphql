import React from 'react';
import './App.css';
import HolidayLists from './components/HolidayLists';
import Login from './components/Login';
import Navigation from './components/Navigation';

function App() {

  return (
    <div className="columns is-mobile">
      <div className="column is-half is-offset-one-quarter">
        <Navigation />
        <Login />
        <HolidayLists />
      </div>
    </div>
  );
}

export default App;
