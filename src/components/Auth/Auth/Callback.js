import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import auth0Client from "./Auth";

class Callback extends Component {
  async componentDidMount() {
    await auth0Client.handleAuthentication(); //calls method to feth user info sent by auth0
    this.props.history.replace("/"); // redirects to home page
  }

  render() {
    return <p>Loading profile...</p>;
  }
}

export default withRouter(Callback); // gives callback access to this.props.history
