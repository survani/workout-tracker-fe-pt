import React from 'react';
import NavigationPopOut from './NavigationPopOut';

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      menuActive: false,
    };
  }

  toggleNavMenu = () => {
    this.state.menuActive
      ? this.setState({ menuActive: false })
      : this.setState({ menuActive: true });
  };

  render() {
    return (
      <div className="navigation_main">
        <div
          onClick={this.toggleNavMenu}
          className="navMenu"
          style={{ userSelect: 'none' }}
        >
          ☰
        </div>
        <NavigationPopOut
          active={this.state.menuActive}
          toggle={this.toggleNavMenu}
        />
      </div>
    );
  }
}

export default Navigation;
