import React, { useState } from "react";
import { axiosWithAuth } from "../../authentication/axiosWithAuth";
import NavigationBar from "../../navigationbar/navigationbar";
import MobileNav from "../../mobilenav/MobileNav";
import Food from "../../../assets/forms/food.svg";
import {
  Form,
  InnerForm,
  Title,
  TitleContainer,
  InputContainer,
  Label,
  Select,
  SelectFont,
  InputFont,
  Input,
  TextArea,
  ShareBox,
  ButtonContainer,
  Button,
  ShareLabel, FoodImg,
} from "./style";

const initialFormValue = {
  meal_date: "",
  meal_time: "",
  meal_category: "",
  food_name: "",
  food_quantity: "",
  food_measure: "",
  food_calories: "",
  food_fat: "",
  food_protein: "",
  food_carbs: "",
  food_fiber: "",
  meal_notes: "",
};

export const NutritionForm = () => {
  const [setNutrition] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValue);

  const onChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    axiosWithAuth()
      .post("https://frozen-hamlet-18508.herokuapp.com/api/diets", formValues)
      .then((res) => {
        console.log(res);
        setNutrition(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setFormValues({
          meal_date: "",
          meal_time: "",
          meal_category: "",
          food_name: "",
          food_quantity: "",
          food_measure: "",
          food_calories: "",
          food_fat: "",
          food_protein: "",
          food_carbs: "",
          food_fiber: "",
          meal_notes: "",
        });
      });
  };

  return (
    <>
      <MobileNav />
      <NavigationBar />
      <Form>
        <FoodImg src={Food}/>
        <InnerForm onSubmit={onSubmit}>
          <TitleContainer>
            <Title>Create a Food Entry</Title>
          </TitleContainer>

          <InputContainer>
            <Label>
              <Select
                name="meal_category"
                value={formValues.meal_category}
                onChange={onChange}
              >
                <SelectFont value="">Please select an category</SelectFont>
                <SelectFont value="breakfast">Breakfast</SelectFont>
                <SelectFont value="lunch">Lunch</SelectFont>
                <SelectFont value="dinner">Dinner</SelectFont>
                <SelectFont value="snacks">Snacks</SelectFont>
              </Select>
            </Label>
          </InputContainer>

          <InputContainer>
            <Label>Date</Label>
            <InputFont>
              <Input
                id="date"
                type="date"
                name="meal_date"
                placeholder="Date"
                onChange={onChange}
                value={formValues.meal_date}
              />
            </InputFont>
          </InputContainer>

          <InputContainer>
            <Label>Time</Label>
            <InputFont>
              <Input
                id="time"
                type="text"
                name="meal_time"
                placeholder="Meal Time"
                onChange={onChange}
                value={formValues.meal_time}
              />
            </InputFont>
          </InputContainer>

          <InputContainer>
            <Label>Food Item</Label>
            <InputFont>
              <Input
                id="name"
                type="text"
                name="food_name"
                placeholder="Food Item"
                onChange={onChange}
                value={formValues.food_name}
              />
            </InputFont>
          </InputContainer>

          <InputContainer>
            <Label>Quantity</Label>
            <InputFont>
              <Input
                id="quantity"
                type="text"
                name="food_quantity"
                placeholder="Quantity"
                onChange={onChange}
                value={formValues.food_quantity}
              />
            </InputFont>
          </InputContainer>

          <InputContainer>
            <Label>Measurement</Label>
            <InputFont>
              <Input
                id="measure"
                type="text"
                name="food_measure"
                placeholder="Cups, oz, or grams"
                onChange={onChange}
                value={formValues.food_measure}
              />
            </InputFont>
          </InputContainer>

          <InputContainer>
            <Label>Calories</Label>
            <InputFont>
              <Input
                id="calories"
                type="text"
                name="food_calories"
                placeholder="Calories"
                onChange={onChange}
                value={formValues.food_calories}
              />
            </InputFont>
          </InputContainer>

          <InputContainer>
            <Label>Total fat in grams</Label>
            <InputFont>
              <Input
                id="fat"
                type="text"
                name="food_fat"
                placeholder="Fat"
                onChange={onChange}
                value={formValues.food_fat}
              />
            </InputFont>
          </InputContainer>

          <InputContainer>
            <Label>Total protein in grams</Label>
            <InputFont>
              <Input
                id="protein"
                type="text"
                name="food_protein"
                placeholder="Protein"
                onChange={onChange}
                value={formValues.food_protein}
              />
            </InputFont>
          </InputContainer>

          <InputContainer>
            <Label>Carbs</Label>
            <InputFont>
              <Input
                id="carbs"
                type="text"
                name="food_carbs"
                placeholder="Total carbs in grams"
                onChange={onChange}
                value={formValues.food_carbs}
              />
            </InputFont>
          </InputContainer>

          <InputContainer>
            <Label>Fiber</Label>
            <InputFont>
              <Input
                id="fiber"
                type="text"
                name="food_fiber"
                placeholder="Total fiber in grams"
                onChange={onChange}
                value={formValues.food_fiber}
              />
            </InputFont>
          </InputContainer>

          <InputContainer>
            <Label>Notes</Label>
            <InputFont>
              <TextArea
                id="notes"
                type="text"
                name="workout_notes"
                placeholder="Notes"
                onChange={onChange}
                value={formValues.meal_notes}
              />
            </InputFont>
          </InputContainer>

          <br />
          <ShareBox>
            <input
              className="private-input"
              type="checkbox"
              name="private"
              onClick={() => console.log("Clicked!")}
            />
            <ShareLabel>Private</ShareLabel>
          </ShareBox>
          <ButtonContainer>
            <Button type="submit">Submit</Button>
          </ButtonContainer>
        </InnerForm>
      </Form>
    </>
  );
};
