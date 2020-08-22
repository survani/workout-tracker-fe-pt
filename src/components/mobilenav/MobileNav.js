import React from "react";
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
  const Signout = () => {
    localStorage.clear();
  };
  
  return (
    <div className="container">
    <section className="menu menu--circle">
  <input type="checkbox" id="menu__active"/>
  <label htmlFor="menu__active" className="menu__active">
    <div className="menu__toggle">
      <div className="icon">
        <div className="hamburger"></div>
      </div>
    </div>
    <input type="radio" name="arrow--up" id="degree--up-0"/>
    <input type="radio" name="arrow--up" id="degree--up-1" />
    <input type="radio" name="arrow--up" id="degree--up-2" />
    <div className="menu__listings">
      <ul className="circle">
        <li>
          <div className="placeholder">
            <div className="upside">
                <NavLink to="/dashboard"><img src={Dashboard} className="button"/></NavLink>
            </div>
          </div>
        </li>
        <li>
          <div className="placeholder">
            <div className="upside">
            <NavLink to="/diets"><img src={Food} className="button"/></NavLink>
            </div>
          </div>
        </li>
        <li>
          <div className="placeholder">
            <div className="upside">
              <a href="#">&nbsp</a>
            </div>
          </div>
        </li>
        <li>
          <div className="placeholder">
            <div className="upside">
            <NavLink onClick={Signout}to="/"><img src={Logout} className="button"/></NavLink>
            </div>
          </div>
        </li>
        <li>
          <div className="placeholder">
            <div className="upside">
            <NavLink to="/createworkout"><img src={WorkoutForm} className="button"/></NavLink>
            </div>
          </div>
        </li>
        <li>
          <div className="placeholder">
            <div className="upside">
            <NavLink to="/createnutrition"><img src={NutritionForm} className="button"/></NavLink>
            </div>
          </div>
        </li>
        <li>
          <div className="placeholder">
            <div className="upside">
            <NavLink to="/calendar"><img src={Calendar} className="button"/></NavLink>
            </div>
          </div>
        </li>
        <li>
          <div className="placeholder">
            <div className="upside">
            <NavLink to="/feed"><img src={Feed} className="button"/></NavLink>
            </div>
          </div>
        </li>
        <li>
          <div className="placeholder">
            <div className="upside">
            <NavLink to="/workouts"><img src={Workout} className="button"/></NavLink>
            </div>
          </div>
        </li>
        <li>
          <div className="placeholder">
            <div className="upside">
            <NavLink to="/profile"><img src={Profile} className="button"/></NavLink>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div className="menu__arrow menu__arrow--top">
      <ul>
        <li>
          <label htmlFor="degree--up-0"><div className="arrow"></div></label>
          <label htmlFor="degree--up-1"><div className="arrow"></div></label>
          <label htmlFor="degree--up-2"><div className="arrow"></div></label>
        </li>
      </ul>
    </div>
  </label>
</section>
</div>

  );
};

export default MobileNav;
