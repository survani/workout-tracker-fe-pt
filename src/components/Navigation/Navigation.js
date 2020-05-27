import React from './node_modules/react';


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

  
}

export default Navigation;
