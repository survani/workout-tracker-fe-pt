import React, { Component } from "react";
import logo from "../../../logo.svg";
import "../../../App.css";
import auth0Client from "./Auth";

class Signout extends Component {
  signOut = () => {
    auth0Client.signOut();
    this.props.history.replace("/");
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {auth0Client.isAuthenticated() && (
            <div>
              <p>Welcome!</p>
              <label className="mr-2 text-white">
                {auth0Client.getProfile().name}
              </label>
              <br />
              <button
                className="btn btn-dark"
                onClick={() => {
                  this.signOut();
                }}
              >
                Sign Out
              </button>
            </div>
          )}
        </header>
      </div>
    );
  }
}

export default Signout;
