import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../authentication/axiosWithAuth";
import "./style.css";

const ViewableWorkouts = () => {
  const [workout, setWorkout] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`https://frozen-hamlet-18508.herokuapp.com/api/workouts/public`)
      .then((response) => {
        console.log(response.data.message);
        setWorkout(response.data.message);
      })
      .catch((err) => {
        console.log("Error in ViewableWorkouts", err);
      });
  }, [setWorkout]);

  return (
    <div>
      <h1 className="card-row card-body">All Public Workouts</h1>

      {workout.map((item) => {
        return (
          <div className="card-body" key="id">
            <h1>Workout Title: {item.workout_title}</h1>
            <h3>Workout Category: {item.workout_category}</h3>
            <p>Workout Date: {item.workout_date}</p>
            <p>Workout Length: {item.workout_length}</p>
            <p>Workout Description: {item.workout_description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ViewableWorkouts;
