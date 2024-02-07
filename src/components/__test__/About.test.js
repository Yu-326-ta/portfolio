import React from "react";
import { render, screen } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import "intersection-observer";
import About from "../About";

test("renders Banner component", () => {
  render(<About />);

  // Check if the text "I am a" is present
  const subheading = screen.getAllByText(/What I have done so far/i);
  expect(subheading.length).toBeGreaterThan(0);

  // Check if the main heading is rendered
  const mainHeading = screen.getByText("Work Experience.");
  expect(mainHeading).toBeInTheDocument();

  // Check if all skills are rendered
  const cards = screen.getAllByRole("img");
  expect(cards.length).toBe(4); // Assuming there are 12 cards
});
