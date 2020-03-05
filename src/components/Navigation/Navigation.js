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
        <div onClick={this.toggleNavMenu} style={{backgroundColor: 'black', color:"white", userSelect: "none", width:'40px', height:'40px'}}>☰</div>
        <NavigationPopOut active={this.state.menuActive}/>
      </div>
    );
  }
}

export default Navigation;
