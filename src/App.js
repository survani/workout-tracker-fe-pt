import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation'

//components
import Onboarding from './components/onboarding/Onboard';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <div className='App'>
    <Navigation/>
      <Onboarding />
      <Dashboard />
    </div>
  );
}

export default App;
