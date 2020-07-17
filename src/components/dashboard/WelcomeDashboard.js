import React from "react";
import Workout from "../../assets/workout.svg";
import { WelcomeTitle, Image, Dashboard } from "./style";

const WelcomeDashboard = () => {
  return (
    <Dashboard>
      <WelcomeTitle>
        This dashboard is your hub for staying on track. The navigation bar on
        the left side will help you find your way around.
      </WelcomeTitle>
      <Image src={Workout} alt="Man and woman exercising"></Image>
    </Dashboard>
  );
};

export default WelcomeDashboard;
