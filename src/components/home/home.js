import React from 'react';
import './home.css'

//import forms
import Login from '../login/login';
import Signup from '../signup/signup';

function Home(){
    return(
        <div>
            <div>
            <div className="login_header"><h3>Login</h3></div>
            <Login></Login>
            </div>

            <div>
            <div className="signup_header"><h3>Sign Up</h3></div>
            <Signup></Signup>
            </div>
        </div>
    )
}

export default Home;