import React from 'react';
import NavItem from './NavItem';
import { withRouter } from 'react-router-dom';

class NavigationPopOut extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedItems: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
      },
    };
  }

  selectItem = (event) => {
    var selectedItems = {
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
    };

    selectedItems[event.target.id] = true;

    this.props.toggle();

    this.setState({
      selectedItems: selectedItems,
    });
  };

  signOut = () => {
    this.props.history.replace('/');
  };

  render() {
    const visible = {
      height: '100vh',
      width: '50%',
      maxWidth: '200px',
      position: 'fixed',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#FDF6F2',
    };

    const invisible = {
      height: '100vh',
      width: '50%',
      maxWidth: '200px',
      position: 'fixed',
      display: 'none',
      flexDirection: 'column',
      backgroundColor: '#FDF6F2',
    };

    return (
      <div
        style={this.props.active ? visible : invisible}
        className="NavigationPopOut"
      >
        <NavItem
          id="0"
          text="Weekly Schedule"
          destination="schedule"
          selectItem={this.selectItem}
          selected={this.state.selectedItems[0]}
        />
        <NavItem
          id="1"
          text="Dashboard"
          destination="dashboard"
          selectItem={this.selectItem}
          selected={this.state.selectedItems[1]}
        />
        <NavItem
          id="2"
          text="See Current Progress"
          destination="progress"
          selectItem={this.selectItem}
          selected={this.state.selectedItems[2]}
        />
        <NavItem
          id="3"
          text="Share Your Progress"
          destination="share"
          selectItem={this.selectItem}
          selected={this.state.selectedItems[3]}
        />
        <NavItem
          id="4"
          text="See Workout Library"
          destination="workouts"
          selectItem={this.selectItem}
          selected={this.state.selectedItems[4]}
        />
        <NavItem
          id="5"
          text="Settings"
          destination="settings"
          selectItem={this.selectItem}
          selected={this.state.selectedItems[5]}
        />
        <NavItem
          id="6"
          text="Logout"
          destination="/"
          selectItem={this.selectItem}
          selected={this.state.selectedItems[6]}
        />
      </div>
    );
  }
}

export default withRouter(NavigationPopOut);
