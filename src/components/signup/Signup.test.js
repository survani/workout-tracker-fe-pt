import React from "react";
import { render } from "@testing-library/react";
import Signup from "./Signup";

test("renders email placeholder", () => {
  const { getByPlaceholderText } = render(<Signup />);
  const email = getByPlaceholderText(/Email/);
  expect(email).toBeInTheDocument();
});
