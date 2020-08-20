import React, { useEffect, useState } from "react";
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
import image1 from "../../../assets/images/diets/bacon.jpg";
import image2 from "../../../assets/images/diets/beets.jpg";
import image3 from "../../../assets/images/diets/brisket.jpg";
import image4 from "../../../assets/images/diets/brocolli.jpg";
import image5 from "../../../assets/images/diets/bulgogi.jpg";
import image6 from "../../../assets/images/diets/carrots.jpg";
import image7 from "../../../assets/images/diets/corn.jpg";
import image8 from "../../../assets/images/diets/eggs.jpg";
import image9 from "../../../assets/images/diets/granola.jpg";
import image10 from "../../../assets/images/diets/greenbeans.jpg";
import image11 from "../../../assets/images/diets/ranch.jpg";
import image12 from "../../../assets/images/diets/salad.jpg";
import image13 from "../../../assets/images/diets/salmon.jpg";
import image14 from "../../../assets/images/diets/steak.jpg";
import image15 from "../../../assets/images/diets/yogurt.jpg";


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
    <NavCircle>
    <MobileNav />
    </NavCircle>
      <NavigationBar />
      <MainContent>
        <CardContent>
          {diet.map((item) => {
            const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15];
            return (
              <CardBody key="id">
                <CardTitle>{item.food_name}</CardTitle>
                <MediaContent src={images[Math.floor((Math.random() * 15) - 1)]} />
                  <CardCategory data-testid="test">{item.meal_category}</CardCategory>
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
