import React from "react";
import {
  NavigationContainer,
  Nav,
  NavLinks,
  LogoText2,
  Logo2
} from "./style";

const MobileNav = () => {
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
        <NavLinks to="/createnutrition">Create a Food Entry</NavLinks>
        <NavLinks to="/workouts">View Workouts</NavLinks>
        <NavLinks to="/diets">View Food Diary</NavLinks>
        <NavLinks to="/calendar">Calendar</NavLinks>
        <NavLinks onClick={Logout} to="/">
          Logout
        </NavLinks>
        {/* <NavLinks to="/diets">Meals</NavLinks> */}
      </Nav>
    </NavigationContainer>
  );
};

export default MobileNav;
