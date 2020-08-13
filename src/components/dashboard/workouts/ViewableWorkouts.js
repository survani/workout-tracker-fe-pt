import React, { useEffect, useState, useContext } from "react";
import { decode } from "jsonwebtoken";
import { axiosWithAuth } from "../../authentication/axiosWithAuth";
import MobileNav from "../../mobilenav/MobileNav";
import {
  CardBody,
  CardCategory,
  CardContent,
  CardDescription,
  CardTitle,
  MainContent,
  MediaContent,
  WorkoutLength,
  NavCircle,
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
    <NavCircle>
       <MobileNav />
      </NavCircle>
      <NavigationBar />
      <MainContent>
        <CardContent>
          {workout.map((item, entity_id) => {
            return (
              <CardBody key={item.entity_id}>
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
