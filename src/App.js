import React from 'react';
import './App.css';

//components
import Onboarding from './components/onboarding/Onboard';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <div className='App'>
      <Onboarding />
      <Dashboard />
    </div>
  );
}

export default App;
