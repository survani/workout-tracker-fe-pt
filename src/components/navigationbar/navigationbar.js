import React from "react";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
    return(
        <div>
            <div>
                <h1>FitTracker</h1>
            </div>
            <nav>
                <NavLink to="/createworkout">Create Workout</NavLink>
                <NavLink to="/public">Viewable Workouts</NavLink>
                <NavLink to="/calendar">Calendar</NavLink>
            </nav>
        </div>

    )
}

export default NavigationBar;