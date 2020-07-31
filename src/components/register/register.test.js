import React from "react";
import Register from "./register";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import * as rtl from "@testing-library/react";
import MutationObserver from "mutation-observer";

global.MutationObserver = MutationObserver;

it("Checks if the text Sign up is present", () => {
  const wrapper = rtl.render(
    <>
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    </>
  );

  const element = wrapper.getAllByText(/Sign Up/i);
  expect(element.length).ToBe(2);
});
