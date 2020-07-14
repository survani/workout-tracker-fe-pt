import React from "react";
import ReactDOM from 'react-dom';
import Signup from "./register";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect';
import * as rtl from "@testing-library/react";

test("Render the Sign Up text", async() => {
    const wrapper = rtl.render(<BrowserRouter><Signup /></BrowserRouter>);

    const previousButton = await wrapper.getByText(/sign up/i);
    expect(previousButton).toBeVisible();
});
