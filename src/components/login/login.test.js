import React from "react";
import ReactDOM from "react-dom";
import Login from "./login";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import * as rtl from "@testing-library/react";
import MutationObserver from "mutation-observer";
global.MutationObserver = MutationObserver;

it("Checks if the text Email is present", () => {
  const wrapper = rtl.render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const element = wrapper.getByText(/Email/i);
  expect(element).toBeInTheDocument();
});
