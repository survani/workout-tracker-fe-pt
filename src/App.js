import React from "react";
import "./App.css";
import { render } from "@testing-library/react";
import Callback from "../src/components/Auth/Auth/Callback";
import Signup from "../src/components/Auth/Auth/Auth";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Signup} exact />
      <Route exact path="/callback" component={Callback} exact />
    </div>
  );
}

export default App;
