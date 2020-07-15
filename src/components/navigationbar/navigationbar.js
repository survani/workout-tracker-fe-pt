import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Logo, LogoText, LogoContainer } from "./style";

const NavigationBar = () => {
  return (
    <div>
      <LogoContainer>
        <Logo>
          Fit<LogoText>Tracker</LogoText>
        </Logo>
      </LogoContainer>
      <Nav>
        <NavLink style={{ textDecoration: "none" }} to="/createworkout">
          Create Workout
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/public">
          Viewable Workouts
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/calendar">
          Calendar
        </NavLink>
      </Nav>
    </div>
  );
};

export default NavigationBar;
