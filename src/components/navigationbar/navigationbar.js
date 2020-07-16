import React from "react";
import {
  NavigationContainer,
  Nav,
  NavLinks,
  LogoText2,
  Logo2,
} from "../dashboard/style";

const NavigationBar = () => {
  return (
    <NavigationContainer>
      <Logo2>
        Fit<LogoText2>Tracker</LogoText2>
      </Logo2>

      <Nav>
        <NavLinks to="/profile">Profile</NavLinks>
        <NavLinks to="/createworkout">Create a Workout</NavLinks>
        <NavLinks to="/public">View Workouts</NavLinks>
        <NavLinks to="/calendar">Calendar</NavLinks>
        {/* <NavLinks to="/diets">Meals</NavLinks> */}

        {/* Add a Back icon/button */}
        <NavLinks to="/dashboard">Go Back</NavLinks>
      </Nav>
    </NavigationContainer>
  );
};

export default NavigationBar;
