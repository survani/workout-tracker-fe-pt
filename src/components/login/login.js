import React, { useState } from "react";
import { axiosWithAuth } from "../authentication/axiosWithAuth";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export default function Login(props) {
  const history = useHistory();

  const { errors } = useForm();

  const [user, getUser] = useState({
    email: "",
    password: "",
  });

  const handleChanges = (e) => {
    getUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post("/api/login", user)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        history.push("/dashboard");
        console.log("login form submitted");
      })
      .catch((err) => {
        localStorage.removeItem("token");
        console.log("Invalid Login", err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:&nbsp;
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={handleChanges}
          value={user.email}
        />
      </label>
      {errors.email && <p>This is required</p>}

      <label>
        Password:&nbsp;
        <input
          type="text"
          placeholder="password"
          name="password"
          onChange={handleChanges}
          value={user.password}
        />
      </label>
      {errors.password && <p>This is required</p>}

      <input type="submit" />
    </form>
  );
}
