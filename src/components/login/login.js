import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Login(errors, touched, status){
    const history = useHistory();

    const [formState, setFormState] = useState([]);

    useEffect(status => {
        if (status) {
            setFormState([...formState, status]);}
    },[formState]);


    return(
        <div className="login_main">
            <Form id="login_form">
                <Field
                component="input"
                type="email"
                name="email"
                placeholder="Email"
                className="login_input"
                />
                {touched.email && errors.email && (<p>{errors.email}</p>)}
                <Field
                component="input"
                type="password"
                name="password"
                placeholder="Password"
                className="login_input"
                />
                {touched.password && errors.password && (<p>{errors.password}</p>)}
                <button type="submit" className="login_btn" onClick={() => history.push("/dashboard")}>Login</button>
            </Form>
            {formState.map(form => (
                <p key={form.id}>Welcome {form.email}</p>
            ))}
        </div>
    )

};

const formikHOC = withFormik({
    mapPropsToValues({email, password}){
        return{
            email: email || "",
            password: password || ""
        };
    },
    validationSchema: Yup.object().shape({
        email: Yup.string()
        .email("Email not valid")
        .required("Email is required"),
        password: Yup.string()
        .required("Password is required")
    }),
    handleSubmit(values, {setStatus, resetForm}){
        axios
        .post("https://frozen-hamlet-18508.herokuapp.com/users/login", values)
        .then(res => {
            setStatus(res.data);
            resetForm()
        })
        .catch(err => console.log("Error: ", err))
    }
});

const LoginFormWithFormik = formikHOC(Login);

export default LoginFormWithFormik;