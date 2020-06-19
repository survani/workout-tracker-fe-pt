import React from "react";
import { Route } from "react-router-dom";

//components
import Home from '../home/home';
import Onboarding from '../onboarding/Onboard';
import Dashboard from '../dashboard/Dashboard';
import Calendar from '../calendar/Calendar';
import LandingPage from '../landingpage/LandingPage';
import Profile from '../profile/Profile';
import { WorkoutForm } from "../dashboard/CreateWorkoutForm";

// protected comopnents will be used with PrivateRoute. You can look at what the code is doing later.
export default function Router(props) {
  return (
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/onboarding" component={Onboarding} />
      <Route exact path="/schedule" component={Calendar} />
      <Route exact path="/account" component={Home} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/createworkout" component={WorkoutForm} />
    </div>
  );
}
