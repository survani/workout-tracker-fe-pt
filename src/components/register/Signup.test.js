import React from "react";
import ReactDOM from 'react-dom';
import Signup from "./register";
import {
    BrowserRouter
} from "react-router-dom";
import '@testing-library/jest-dom/extend-expect';
import * as rtl from "@testing-library/react";
import App from '../../App';

import MutationObserver from 'mutation-observer'
global.MutationObserver = MutationObserver;

test("Render the Sign Up text", () => {
    const wrapper = rtl.render( <BrowserRouter> <Signup/> </BrowserRouter>);

    const expecttitle = wrapper.getAllByText(/Sign Up/i); 
    expect(expecttitle.length).toEqual(2);
});