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
        <NavLink
          to="/profile"
          style={{ textDecoration: "none", paddingBottom: "1%" }}
        >
          Profile
        </NavLink>
        <NavLink
          to="/createworkout"
          style={{ textDecoration: "none", paddingBottom: "1%" }}
        >
          Create a Workout
        </NavLink>
        <NavLink
          to="/public"
          style={{ textDecoration: "none", paddingBottom: "1%" }}
        >
          View Workouts
        </NavLink>
        <NavLink
          to="/calendar"
          style={{ textDecoration: "none", paddingBottom: "1%" }}
        >
          Calendar
        </NavLink>
        <NavLink
          to="/diets"
          style={{ textDecoration: "none", paddingBottom: "1%" }}
        >
          Meals
        </NavLink>
        <NavLink
          to="/dashboard"
          style={{
            textDecoration: "none",
            paddingTop: "50%",
            paddingBottom: "1%",
          }}
        >
          Back to Dashboard
        </NavLink>
      </Nav>
    </div>
  );
};

export default NavigationBar;
