import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <button
        onClick={e => {
          e.preventDefault();
          props.lock.show();
        }}
      >
        Login
      </button>
    </div>
  );
}

export default App;
