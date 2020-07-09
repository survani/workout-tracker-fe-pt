import React from "react";
import { useHistory } from "react-router-dom";
import {
  DashboardAlignment,
  DashboardButtonText,
  LogoContainer,
  Logo,
  Title,
} from "./style";

const Dashboard = () => {
  const history = useHistory();

  return (
    <DashboardAlignment>
      <LogoContainer>
        <Logo>Fit Tracker</Logo>
        <Title>Home</Title>
      </LogoContainer>

      <DashboardButtonText
        type="submit"
        className="dashboard_btn"
        onClick={() => history.push("/createworkout")}
      >
        Create a workout plan
      </DashboardButtonText>
      <DashboardButtonText
        type="submit"
        className="dashboard_btn"
        onClick={() => history.push("/public")}
      >
        Find a workout plan
      </DashboardButtonText>
      <DashboardButtonText
        type="submit"
        className="dashboard_btn"
        onClick={() => history.push("/")}
      >
        Create a meal plan
      </DashboardButtonText>
      <DashboardButtonText
        type="submit"
        className="dashboard_btn"
        onClick={() => history.push("/")}
      >
        Find a meal plan
      </DashboardButtonText>
      <DashboardButtonText
        type="submit"
        className="dashboard_btn"
        onClick={() => history.push("/profile")}
      >
        Create your Profile
      </DashboardButtonText>
      <DashboardButtonText
        type="submit"
        className="dashboard_btn"
        onClick={() => history.push("/")}
      >
        Change settings
      </DashboardButtonText>
    </DashboardAlignment>
  );
};

export default Dashboard;
