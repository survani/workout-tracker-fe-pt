import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { axiosWithAuth } from "../authentication/axiosWithAuth";

export default function Register() {
  const history = useHistory();

  const [user, getUser] = useState({
    email: "",
    username: "",
    password: "",
  });
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (user, e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/register", {
        email: user.email,
        username: user.username,
        password: user.password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.id);
        localStorage.setItem("message", res.data.message);
        history.push("/login");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Email"
        name="email"
        ref={register({
          required: "Required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "invalid email address",
          },
        })}
      />
      {errors.email && errors.email.message}

      <input
        type="text"
        placeholder="Username"
        name="username"
        ref={register({
          required: true,
          minLength: {
            value: 4,
            message: "Minimum length is 4",
          },
        })}
      />
      {errors.username && errors.username.message}

      <input
        type="password"
        placeholder="Password"
        name="password"
        ref={register({
          required: true,
          minLength: {
            value: 6,
            message: "Minimum length is 6",
          },
        })}
      />
      {errors.password && errors.password.message}

      <input type="submit" />
    </form>
  );
}
