import React from "react";
import { render, screen } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import "intersection-observer";
import Skills from "../Skills";

test("renders Banner component", () => {
  render(<Skills />);

  // Check if the main heading is rendered
  const mainHeading = screen.getByText("Skills");
  expect(mainHeading).toBeInTheDocument();

  // Check if the text "I am a" is present
  const subheading = screen.getAllByText(
    /These are the technologies I've worked with/i
  );
  expect(subheading.length).toBeGreaterThan(0);

  // Check if all skills are rendered
  const skills = screen.getAllByRole("img");
  expect(skills.length).toBe(12); // Assuming there are 12 skills
});
