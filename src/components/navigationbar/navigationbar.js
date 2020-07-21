import React from "react";
import Logout from "../logout/Logout";
import {
  NavigationContainer,
  Nav,
  NavLinks,
  LogoText2,
  Logo2,
} from "../dashboard/style";

const NavigationBar = () => {
  // const Logout = () => {
  //   localStorage.clear();
  // };
  return (
    <NavigationContainer>
      <Logo2 href="/dashboard">
        Fit<LogoText2>Tracker</LogoText2>
      </Logo2>

      <Nav>
        <NavLinks to="/dashboard">Dashboard</NavLinks>
        <NavLinks to="/profile">Profile</NavLinks>
        <NavLinks to="/createworkout">Create a Workout</NavLinks>
        <NavLinks to="/public">View Workouts</NavLinks>
        <NavLinks to="/calendar">Calendar</NavLinks>
        <NavLinks on onClick={Logout} to="/" style={{ paddingTop: "48%" }}>
          Logout
        </NavLinks>
        {/* <NavLinks to="/diets">Meals</NavLinks> */}
      </Nav>
    </NavigationContainer>
  );
};

export default NavigationBar;
