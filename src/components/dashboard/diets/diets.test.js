import React from "react";
import ReactDOM from "react-dom";
import Diets from "./diets";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import * as rtl from "@testing-library/react";
import MutationObserver from "mutation-observer";
global.MutationObserver = MutationObserver;

it("Checks if the text Cal is present", () => {
    const wrapper = rtl.render(
      <BrowserRouter>
        <Diets />
      </BrowserRouter>
    );
    const calories = wrapper.getByText(/Cal/i);
    expect(calories).toBeInTheDocument();
  });
