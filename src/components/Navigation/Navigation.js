import React from 'react';



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
      </div>
    );
  }
  
}

export default Navigation;
