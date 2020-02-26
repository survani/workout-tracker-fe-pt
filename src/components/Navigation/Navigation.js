import React from 'react';
import NavigationPopOut from './NavigationPopOut'

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      menuActive: true,
    }
  }

  toggleNavMenu = () => {
    this.state.menuActive ? this.setState({menuActive: false}):this.setState({menuActive: true});
  }


  render() {
    return (
      <div style={{backgroundColor:"black"}}>
        <button onClick={this.toggleNavMenu}/>
        <NavigationPopOut active={this.state.menuActive}/>
        <p style={{color:"white"}}>lorem ipsum</p>
      </div>
    );
  }
}

export default Navigation;
