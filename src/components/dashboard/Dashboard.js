import React from "react";
import { useHistory } from "react-router-dom";
import NavigationBar from "../navigationbar/navigationbar";
import {
  DashboardAlignment,
  DashboardButtonText,
  LogoContainer,
  Logo,
  LogoText,
  MobileButton,
} from "./style";
import WelcomeDashboard from "./WelcomeDashboard";

const Dashboard = () => {
  const history = useHistory();

  return (
    <div>
      <div>
        <NavigationBar />
        <WelcomeDashboard />
      </div>

      <DashboardAlignment>
        <LogoContainer>
          <Logo>
            Fit<LogoText>Tracker</LogoText>
          </Logo>
        </LogoContainer>
        <MobileButton>
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
        </MobileButton>
      </DashboardAlignment>
    </div>
  );
};

export default Dashboard;
