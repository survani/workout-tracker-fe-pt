import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../../authentication/axiosWithAuth";
import {
  CardBody,
  CardCategory,
  CardContent,
  CardDescription,
  CardTitle,
  MainContent,
  MediaContent,
  WorkoutLength,
} from "./style";
import NavigationBar from "../../navigationbar/navigationbar";

const Diets = () => {
  const [diet, setDiet] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`https://frozen-hamlet-18508.herokuapp.com/api/diets/public`)
      .then((res) => {
        console.log(res.data);
        setDiet(res.data);
      })
      .catch((err) => {
        console.log("Error in Diets", err);
      });
  }, [setDiet]);

  return (
    <>
      <NavigationBar />
      <MainContent>
        <CardContent>
          {diet.map((item) => {
            return (
              <CardBody key="id">
                <CardTitle>{item.food_name}</CardTitle>
                <MediaContent>
                  <CardCategory>{item.meal_category}</CardCategory>
                </MediaContent>
                <CardDescription>
                  <p>{item.food_quantity}</p>
                  <p>{item.food_measure}</p>
                  <WorkoutLength> {item.food_calories} cal</WorkoutLength>
                </CardDescription>
              </CardBody>
            );
          })}
        </CardContent>
      </MainContent>
    </>
  );
};

export default Diets;
