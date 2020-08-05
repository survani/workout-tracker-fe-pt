import React from "react";
import {
  NavigationContainer,
  Nav,
  NavLinks,
  LogoText2,
  Logo2,
} from "../dashboard/style";

const NavigationBar = () => {
  const Logout = () => {
    localStorage.clear();
  };
  return (
    <NavigationContainer>
      <Logo2 href="/dashboard">
        Fit<LogoText2>Tracker</LogoText2>
      </Logo2>

      <Nav>
        <NavLinks to="/dashboard">Dashboard</NavLinks>
        <NavLinks to="/profile">Profile</NavLinks>
        <NavLinks to="/feed">Feed</NavLinks>
        <NavLinks to="/createworkout">Create a Workout</NavLinks>
        <NavLinks to="/createroutine">Create a Routine</NavLinks>
        <NavLinks to="/createnutrition">Create a Diet Plan</NavLinks>
        <NavLinks to="/public">View Workouts</NavLinks>
        <NavLinks to="/calendar">Calendar</NavLinks>
        <NavLinks onClick={Logout} to="/">
          Logout
        </NavLinks>
        {/* <NavLinks to="/diets">Meals</NavLinks> */}
      </Nav>
    </NavigationContainer>
  );
};

export default NavigationBar;
