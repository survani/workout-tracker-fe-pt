import React, { useState, useEffect } from 'react';
import "./signup.css"
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Signup(errors, touched, status){
    const history = useHistory();
    const [formState, setFormState] = useState([]);

    useEffect(status => {
        if (status) {
            setFormState([...formState, status]);}
    }, [formState]);


    return(
        <div className="signup_main">
            <Form id="signup_form">
                <Field
                component="input"
                type="text"
                name="username"
                placeholder="User Name"
                className="signup_input"
                />
                {touched.username && errors.username && (<p>{errors.username}</p>)}
                <Field
                component="input"
                type="email"
                name="email"
                placeholder="Email"
                className="signup_input"
                />
                {touched.email && errors.email && (<p>{errors.email}</p>)}
                <Field
                component="input"
                type="password"
                name="password"
                placeholder="Password"
                className="signup_input"
                />
                {touched.password && errors.password && (<p>{errors.password}</p>)}
                <button type="submit" className="signup_btn" onClick={() => history.push("/onboarding")}>Sign Up</button>
            </Form>
            {formState.map(form => (
                <p key={form.id}>Welcome {form.email}</p>
            ))}
        </div>
    )

};

const formikHOC=withFormik({
    mapPropsToValues({username, email, password}){
        return{
            userName: username || "",
            email: email || "",
            password: password || ""
        };
    },
    validationSchema: Yup.object().shape({
        userName: Yup.string()
        .required("User Name is required"),
        email: Yup.string()
        .email("Email not valid")
        .required("Email is required"),
        password: Yup.string()
        .required("Password is required")
    }),
    handleSubmit(values, {setStatus, resetForm}){
        axios
        .post("https://frozen-hamlet-18508.herokuapp.com/users/register", values)
        .then(res => {
            setStatus(res.data);
            resetForm()
        })
        .catch(err => console.log("Error: ", err))
    }
});

const SignupFormWithFormik = formikHOC(Signup);

export default SignupFormWithFormik;