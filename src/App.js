import React from 'react';
import './App.css';

//components
import Routes from './components/Router/Routes'
import Navigation from './components/Navigation/Navigation'

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes />
    </div>
  );
}

export default App;
