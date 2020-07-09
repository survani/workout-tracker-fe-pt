import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { axiosWithAuth } from "../authentication/axiosWithAuth";
import {
  Logo,
  LogoText,
  LogoContainer,
  Title,
  FormContainer,
  Input,
  Circles,
  Label,
  Circles2,
  SignInButton,
  SignInButtonText,
  ErrorMessages,
  RegisterText,
  Span,
  StyledLink,
  LoginImage,
  Form,
  SmallCircle,
} from "./style";

import Circle from "../../assets/loginpage/circle.svg";
import CircleSmall from "../../assets/loginpage/circlesmall.svg";
import PasswordImage from "../../assets/loginpage/password.svg";
import SmFullCircle from "../../assets/loginpage/smfullsircle.svg";

export default function Login() {
  const history = useHistory();

  const [user, getUser] = useState({
    email: "",
    password: "",
  });

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (user, e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", {
        email: user.email,
        password: user.password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.id);
        localStorage.setItem("message", res.data.message);
        history.push("/dashboard");
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
        <LoginImage src={PasswordImage} />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Title> Login </Title>
          <Label htmlFor="email"> Email </Label>
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
          <SignInButton>
            <SignInButtonText type="submit"> Sign In </SignInButtonText>
          </SignInButton>
          <RegisterText>
            Don’t have an account?
            <StyledLink to="/register">
              <Span>Sign up</Span>
            </StyledLink>
          </RegisterText>
          <ErrorMessages>
            {errors.password && errors.password.message}
            <br />
            {errors.email && errors.email.message}
          </ErrorMessages>
        </Form>
      </FormContainer>
    </>
  );
}
