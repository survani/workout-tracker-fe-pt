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
import workout1 from "../../../assets/images/workouts/workout1.jpg";
import workout2 from "../../../assets/images/workouts/workout2.jpg";
import workout3 from "../../../assets/images/workouts/workout3.jpg";
import workout4 from "../../../assets/images/workouts/workout4.jpg";
import workout5 from "../../../assets/images/workouts/workout5.jpg";
import workout6 from "../../../assets/images/workouts/workout6.jpg";
import workout7 from "../../../assets/images/workouts/workout7.jpg";
import workout8 from "../../../assets/images/workouts/workout8.jpg";
import workout9 from "../../../assets/images/workouts/workout9.jpg";
import workout10 from "../../../assets/images/workouts/workout10.jpg";
import workout11 from "../../../assets/images/workouts/workout11.jpg";
import workout12 from "../../../assets/images/workouts/workout12.jpg";
import workout13 from "../../../assets/images/workouts/workout13.jpg";
import workout14 from "../../../assets/images/workouts/workout14.jpg";
import workout15 from "../../../assets/images/workouts/workout15.jpg";

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
             const images = [workout1, workout2, workout4, workout5, workout6, workout7, workout8, workout9, workout10, workout11, workout12, workout13, workout14, workout15];
            return (
              <CardBody key={item.entity_id}>
                <CardTitle>{item.workout_title}</CardTitle>
                <MediaContent src={images[(Math.floor((Math.random() * 15) - 1))]} />
                  <CardCategory>{item.workout_category}</CardCategory>
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
