import React from 'react';

//components
import Routes from './components/Router/Routes';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/dashboard/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
