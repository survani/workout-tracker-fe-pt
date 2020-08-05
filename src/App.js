import React from "react";
import { Route, Switch } from "react-router-dom";

//components
import Register from "./components/register/register";
import Login from "./components/login/login";
import ProtectedRoute from "./components/authentication/ProtectedRoute";
import Dashboard from "./components/dashboard/Dashboard";
import { WorkoutForm } from "./components/dashboard/createworkout/CreateWorkoutForm";
import Calendar from "./components/calendar/Calendar";
import Profile from "./components/profile/Profile";
import LandingPage from "./components/landingpage/LandingPage";
import ViewableWorkouts from "./components/dashboard/workouts/ViewableWorkouts";
import ProfileForm from "./components/profile/form/ProfileForm";
import { NutritionForm } from "./components/dashboard/createnutrition/NutritionForm";
import Feed from './components/feed/feed';
import HeadFeed from "./components/feed/feedcomponents/HeadFeed";
import Routine from "./components/dashboard/createroutine/Routine";

function App() {
  return (
    <div className="App">
      <div className="childRoutes">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route exact path="/feed">
            <Feed />
          </Route>

          <ProtectedRoute exact path="/createroutine" component={Routine}>
          </ProtectedRoute>

          <Route exact path="/feed/:id" component={HeadFeed} />

          <ProtectedRoute path="/dashboard">
            <Dashboard />
          </ProtectedRoute>

          <ProtectedRoute path="/public">
            <ViewableWorkouts />
          </ProtectedRoute>

          <ProtectedRoute path="/createworkout">
            <WorkoutForm />
          </ProtectedRoute>

          <ProtectedRoute path="/createnutrition">
            <NutritionForm />
          </ProtectedRoute>

          <ProtectedRoute path="/profile">
            <Profile />
          </ProtectedRoute>

          <ProtectedRoute path="/editprofile">
            <ProfileForm />
          </ProtectedRoute>

          <ProtectedRoute path="/calendar">
            <Calendar />
          </ProtectedRoute>
        </Switch>
      </div>
    </div>
  );
}

export default App;
