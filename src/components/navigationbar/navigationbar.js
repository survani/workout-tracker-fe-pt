import React from "react";
import { NavLink } from "react-router-dom";
import {
  NavigationContainer,
  Nav,
  LogoContainer2,
  LogoText,
  Logo2,
} from "../dashboard/style";

const NavigationBar = () => {
  return (
    <NavigationContainer>
      <LogoContainer2>
        <Logo2>
          Fit<LogoText>Tracker</LogoText>
        </Logo2>
      </LogoContainer2>
      <Nav>
        <NavLink
          to="/profile"
          style={{ textDecoration: "none", paddingBottom: "10%" }}
        >
          Profile
        </NavLink>
        <NavLink
          to="/createworkout"
          style={{ textDecoration: "none", paddingBottom: "10%" }}
        >
          Create a Workout
        </NavLink>
        <NavLink
          to="/public"
          style={{ textDecoration: "none", paddingBottom: "10%" }}
        >
          View Workouts
        </NavLink>
        <NavLink
          to="/calendar"
          style={{ textDecoration: "none", paddingBottom: "10%" }}
        >
          Calendar
        </NavLink>
        <NavLink
          to="/diets"
          style={{ textDecoration: "none", paddingBottom: "10%" }}
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
    </NavigationContainer>
  );
};

export default NavigationBar;
