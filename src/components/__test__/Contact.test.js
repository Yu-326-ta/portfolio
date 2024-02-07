import React from "react";
import { render, screen } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import "intersection-observer";
import Contact from "../Contact";

test("renders Contact component", () => {
  render(<Contact />);

  // Check if the main heading is rendered
  const mainHeading = screen.getByText("Contact");
  expect(mainHeading).toBeInTheDocument();

  // Check if the text "If you would like to contact me, please send an e-mail to the following e-mail address" is present
  const subheading = screen.getAllByText(
    /If you would like to contact me, please send an e-mail to the following e-mail address/i
  );
  expect(subheading.length).toBeGreaterThan(0);

  // Check if the "yoshi.yuta326@gmail.com" button is present
  const contactButton = screen.getByRole("button", {
    name: /yoshi.yuta326@gmail.com/i,
  });
  expect(contactButton).toBeInTheDocument();
});
