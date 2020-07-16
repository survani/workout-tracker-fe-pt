import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../../authentication/axiosWithAuth";
import {
  CardBody,
  CardCategory,
  CardContent,
  CardDescription,
  CardTitle,
  Header,
  MainContent,
  MediaContent,
  Title,
  WorkoutLength,
} from "./style";
import NavigationBar from "../../navigationbar/navigationbar";

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
    <>
      <NavigationBar />
      <MainContent>
        <CardContent>
          {workout.map((item) => {
            return (
              <CardBody key="id">
                <CardTitle>{item.workout_title}</CardTitle>
                <MediaContent>
                  <CardCategory>{item.workout_category}</CardCategory>
                </MediaContent>
                <CardDescription>
                  <p>{item.workout_description}</p>
                  <WorkoutLength> {item.workout_length}</WorkoutLength>
                </CardDescription>
              </CardBody>
            );
          })}
        </CardContent>
      </MainContent>
    </>
  );
};

export default ViewableWorkouts;
