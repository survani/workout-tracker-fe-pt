import React, { useEffect } from "react";
import "./style.css";
import Dashboard from "../../assets/mobilenav/dashboard.svg";
import Food from "../../assets/mobilenav/food.svg";
import Workout from "../../assets/mobilenav/workout.svg";
import Profile from "../../assets/mobilenav/profile.svg";
import Feed from "../../assets/mobilenav/feed.svg";
import Calendar from "../../assets/mobilenav/calendar.svg";
import NutritionForm from "../../assets/mobilenav/nutritionform.svg";
import WorkoutForm from "../../assets/mobilenav/workoutform.svg";
import Logout from "../../assets/mobilenav/logout.svg";
import { NavLink } from "react-router-dom";

const MobileNav = () => {
  const Logout = () => {
    localStorage.clear();
  };

  const select = () => {
    var burger = document.querySelector('.burger-container'),
        header = document.querySelector('.header');
    
    burger.onclick = function() {
        header.classList.toggle('menu-opened');
    }
};

useEffect(() => {
  select();
}, []);
  
  return (
    <div className="window">
  <div className="header">
    <div className="burger-container">
      <div id="burger">
        <div className="bar topBar"></div>
        <div className="bar btmBar"></div>
      </div>
    </div>
    <ul className="menu">
      <li className="menu-item"><NavLink to="/dashboard">Dashboard</NavLink></li>
      <li className="menu-item"><NavLink to="/profile">Profile</NavLink></li>
      <li className="menu-item"><NavLink to="/feed">Feed</NavLink></li>
      <li className="menu-item"><NavLink to="/createworkout">Create a Workout</NavLink></li>
      <li className="menu-item"><NavLink to="/createroutine">Create a Routine</NavLink></li>
      <li className="menu-item"><NavLink to="/createnutrition">Create a Food Entry</NavLink></li>
      <li className="menu-item"><NavLink to="/workouts">View Workouts</NavLink></li>
      <li className="menu-item"><NavLink to="/routines">View Routines</NavLink></li>
      <li className="menu-item"><NavLink to="/diets">View Food Diary</NavLink></li>
      <li className="menu-item"><NavLink to="/calendar">Calendar</NavLink></li>
      <li className="menu-item"><NavLink onClick={Logout} to="/">Logout</NavLink></li>
    </ul>
</div>
</div>

  );
};

export default MobileNav;
