import React, { useState } from "react";
import { axiosWithAuth } from "../../authentication/axiosWithAuth";
import NavigationBar from "../../navigationbar/navigationbar";
import {
  Form,
  Title,
  TitleContainer,
  InputContainer,
  Label,
  InputFont,
  Input,
  TextArea,
  ShareBox,
  ButtonContainer,
  Button,
  ShareLabel,
} from "./style";

const initialFormValue = {
  workout_category: "",
  workout_title: "",
  workout_date: "",
  workout_length: "",
  workout_description: "",
};

export const WorkoutForm = () => {
  const [workout, setWorkout] = useState([]);
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
      .post(
        "https://frozen-hamlet-18508.herokuapp.com/api/workouts",
        formValues
      )
      .then((res) => {
        console.log(res);
        setWorkout(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setFormValues({
          workout_category: "",
          workout_title: "",
          workout_date: "",
          workout_length: "",
          workout_description: "",
        });
      });
  };

  return (
    <>
      <NavigationBar />
      <Form>
        <form onSubmit={onSubmit}>
          <TitleContainer>
            <Title>Create Workout Form</Title>
          </TitleContainer>

          <InputContainer>
            <Label>Category</Label>
            <InputFont>
              <Input
                id="category"
                type="text"
                name="workout_category"
                placeholder="Category"
                onChange={onChange}
                value={formValues.workout_category}
              />
            </InputFont>
          </InputContainer>

          <InputContainer>
            <Label>Title</Label>
            <InputFont>
              <Input
                id="title"
                type="text"
                name="workout_title"
                placeholder="Title"
                onChange={onChange}
                value={formValues.workout_title}
              />
            </InputFont>
          </InputContainer>

          <InputContainer>
            <Label>Date</Label>
            <InputFont>
              <Input
                id="date"
                type="date"
                name="workout_date"
                placeholder="Date"
                onChange={onChange}
                value={formValues.workout_date}
              />
            </InputFont>
          </InputContainer>

          <InputContainer>
            <Label>Duration</Label>
            <InputFont>
              <Input
                id="length"
                type="text"
                name="workout_length"
                placeholder="Duration"
                onChange={onChange}
                value={formValues.workout_length}
              />
            </InputFont>
          </InputContainer>

          <InputContainer>
            <Label>Description</Label>
            <InputFont>
              <TextArea
                id="description"
                type="text"
                name="workout_description"
                placeholder="Description"
                onChange={onChange}
                value={formValues.workout_description}
              />
            </InputFont>
          </InputContainer>

          <br />
          <ShareBox>
            <input
              className="share-input"
              type="checkbox"
              name="Share Workout"
              onClick={() => console.log("Clicked!")}
            />
            <ShareLabel>Share Workout</ShareLabel>
          </ShareBox>
          <ButtonContainer>
            <Button type="submit">Submit</Button>
          </ButtonContainer>
        </form>
      </Form>
    </>
  );
};
