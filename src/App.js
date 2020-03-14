import React from "react";
import "./App.css";
import { render } from "@testing-library/react";
import Callback from "../src/components/Auth/Auth/Callback";
import Signup from "../src/components/Auth/Auth/Signup";
import { Route } from "react-router-dom";

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
