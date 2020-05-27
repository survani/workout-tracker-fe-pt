import React from 'react';
import { withRouter } from 'react-router-dom';

class NavItem extends React.Component {
  itemSelected(e) {
    this.props.selectItem(e);
    if (this.props.destination === '/') {
      console.log('logout');
      localStorage.removeItem('token');
      localStorage.removeItem('authKey');
      localStorage.removeItem('currentUser');
      localStorage.removeItem('profile');
    }
    this.props.history.replace(this.props.destination);
  }

  render() {
    const selected = {
      backgroundColor: '#804523',
      color: 'white',
      marginBottom: '10px',
      marginTop: '5px',
      padding: '10px',
    };

    const notSelected = {
      backgroundColor: '#FDF6F2',
      marginBottom: '10px',
      marginTop: '5px',
      padding: '10px',
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
