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
  
  return (
    <div class="container">
    <section class="menu menu--circle">
  <input type="checkbox" id="menu__active"/>
  <label for="menu__active" class="menu__active">
    <div class="menu__toggle">
      <div class="icon">
        <div class="hamburger"></div>
      </div>
    </div>
    <input type="radio" name="arrow--up" id="degree--up-0"/>
    <input type="radio" name="arrow--up" id="degree--up-1" />
    <input type="radio" name="arrow--up" id="degree--up-2" />
    <div class="menu__listings">
      <ul class="circle">
        <li>
          <div class="placeholder">
            <div class="upside">
                <NavLink to="/dashboard"><img src={Dashboard} class="button"/></NavLink>
            </div>
          </div>
        </li>
        <li>
          <div class="placeholder">
            <div class="upside">
            <NavLink to="/diets"><img src={Food} class="button"/></NavLink>
            </div>
          </div>
        </li>
        <li>
          <div class="placeholder">
            <div class="upside">
              <a href="#">&nbsp</a>
            </div>
          </div>
        </li>
        <li>
          <div class="placeholder">
            <div class="upside">
            <NavLink to="/logout"><img src={Logout} class="button"/></NavLink>
            </div>
          </div>
        </li>
        <li>
          <div class="placeholder">
            <div class="upside">
            <NavLink to="/createworkout"><img src={WorkoutForm} class="button"/></NavLink>
            </div>
          </div>
        </li>
        <li>
          <div class="placeholder">
            <div class="upside">
            <NavLink to="/createnutrition"><img src={NutritionForm} class="button"/></NavLink>
            </div>
          </div>
        </li>
        <li>
          <div class="placeholder">
            <div class="upside">
            <NavLink to="/calendar"><img src={Calendar} class="button"/></NavLink>
            </div>
          </div>
        </li>
        <li>
          <div class="placeholder">
            <div class="upside">
            <NavLink to="/feed"><img src={Feed} class="button"/></NavLink>
            </div>
          </div>
        </li>
        <li>
          <div class="placeholder">
            <div class="upside">
            <NavLink to="/workouts"><img src={Workout} class="button"/></NavLink>
            </div>
          </div>
        </li>
        <li>
          <div class="placeholder">
            <div class="upside">
            <NavLink to="/profile"><img src={Profile} class="button"/></NavLink>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="menu__arrow menu__arrow--top">
      <ul>
        <li>
          <label for="degree--up-0"><div class="arrow"></div></label>
          <label for="degree--up-1"><div class="arrow"></div></label>
          <label for="degree--up-2"><div class="arrow"></div></label>
        </li>
      </ul>
    </div>
  </label>
</section>
</div>

  );
};

export default MobileNav;
