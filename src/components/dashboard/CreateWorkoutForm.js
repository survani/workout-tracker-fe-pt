import React, { useState } from "react";
import { axiosWithAuth } from "../authentication/axiosWithAuth";

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
    <form className="form-style" onSubmit={onSubmit}>
      <label>Category</label>
      <input
        id="category"
        type="text"
        name="workout_category"
        placeholder="Category"
        onChange={onChange}
        value={formValues.workout_category}
      />
      <label>Title</label>
      <input
        id="title"
        type="text"
        name="workout_title"
        placeholder="Title"
        onChange={onChange}
        value={formValues.workout_title}
      />
      <label>Date</label>
      <input
        id="date"
        type="date"
        name="workout_date"
        placeholder="Date"
        onChange={onChange}
        value={formValues.workout_date}
      />
      <label>Duration</label>
      <input
        id="length"
        type="text"
        name="workout_length"
        placeholder="Duration"
        onChange={onChange}
        value={formValues.workout_length}
      />
      <label>Description</label>
      <textarea
        id="description"
        type="text"
        name="workout_description"
        placeholder="Description"
        onChange={onChange}
        value={formValues.workout_description}
      />
      <br />
      <div className="share">
        <input
          className="share-input"
          type="checkbox"
          name="Share Workout"
          onClick={() => console.log("Clicked!")}
        />
        <label>Share Workout</label>
      </div>
      <button className="manage-button" type="submit">
        Submit
      </button>
    </form>
  );
};
