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
    {/* <div className="icon icon-apple"></div> */}
    <ul className="menu">
      <li className="menu-item"><NavLink to="/workouts">Workouts</NavLink></li>
      <li className="menu-item"><NavLink to="/dashboard">Dashboard</NavLink></li>
      <li className="menu-item"><a href="#">iPhone</a></li>
      <li className="menu-item"><a href="#">Watch</a></li>
      <li className="menu-item"><a href="#">TV</a></li>
      <li className="menu-item"><a href="#">Music</a></li>
      <li className="menu-item"><a href="#">Support</a></li>
      <li className="menu-item"><a href="#">Watch</a></li>
      <li className="menu-item"><a href="#">TV</a></li>
      <li className="menu-item"><a href="#">Music</a></li>
      <li className="menu-item"><a href="#">Support</a></li>
    </ul>
    {/* <div className="shop icon icon-bag"></div>
  </div>
  <div className="content"> <img src="https://images.apple.com/v/ipad-air-2/c/images/overview/performance_large.png" alt=""/> */}
</div>
</div>

  );
};

export default MobileNav;
