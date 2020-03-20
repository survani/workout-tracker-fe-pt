import React from "react";
import { withRouter } from "react-router-dom";
import auth0Client from "../Auth/Auth/Auth";

class NavItem extends React.Component {
  constructor() {
    super();
  }

  itemSelected(e) {
    this.props.selectItem(e);
    if (this.props.destination === "") {
      console.log("logout");
      auth0Client.signOut();
    }
    this.props.history.push(this.props.destination);
  }

  render() {
    const selected = {
      backgroundColor: "blue",
      marginBottom: "10px",
      marginTop: "5px"
    };

    const notSelected = {
      backgroundColor: "white",
      marginBottom: "10px",
      marginTop: "5px"
    };

    return (
      <div
        id={this.props.id}
        onClick={this.itemSelected.bind(this)}
        destination={this.props.destination}
        style={this.props.selected ? selected : notSelected}
      >
        {this.props.text}
      </div>
    );
  }
}

export default withRouter(NavItem);
