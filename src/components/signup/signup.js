import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { axiosWithAuth } from "../authentication/axiosWithAuth";
import {
  Circles,
  Circles2,
  FormContainer,
  Logo,
  LogoContainer,
  LogoText,
  SmallCircle,
  Form,
  Input,
  RegisterText,
  SignInButton,
  SignInButtonText,
  Span,
  StyledLink,
  Title,
  Label,
  SignUpImage,
} from "./style";
import Circle from "../../assets/loginpage/circle.svg";
import CircleSmall from "../../assets/loginpage/circlesmall.svg";
import SmFullCircle from "../../assets/loginpage/smfullsircle.svg";
import Activity from "../../assets/signuppage/activity.svg";

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
    <>
      <LogoContainer>
        <Logo>
          Fit<LogoText>Tracker</LogoText>
          <Circles src={Circle} />
          <Circles2 src={CircleSmall} />
          <SmallCircle src={SmFullCircle} />
        </Logo>
      </LogoContainer>
      <FormContainer>
        <SignUpImage src={Activity} />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Title> Sign Up </Title>
          <Label for="password"> Username </Label>
          <Input
            type="text"
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
          <Label for="password"> Email </Label>
          <Input
            type="text"
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
          <Label for="password"> Password </Label>
          <Input
            type="password"
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

          <SignInButton>
            <SignInButtonText type="submit"> Sign Up </SignInButtonText>
          </SignInButton>
          <RegisterText>
            Already have an account?
            <StyledLink to="/login">
              <Span>Sign in</Span>
            </StyledLink>
          </RegisterText>
        </Form>
      </FormContainer>
    </>
  );
}
