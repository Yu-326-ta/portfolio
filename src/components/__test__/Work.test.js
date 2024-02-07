import React from "react";
import { render, screen } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import "intersection-observer";
import Work from "../Work";

test("renders Work component", () => {
  render(<Work />);

  // Check if the main heading is rendered
  const mainHeading = screen.getByText("My Latest Work.");
  expect(mainHeading).toBeInTheDocument();

  // Check if the text "Here is a list of products I have recently created. Technologies used are Go, Ruby, and PHP. I also have experience in creating various other products." is present
  const subheading = screen.getAllByText(
    /Here is a list of products I have recently created. Technologies used are Go, Ruby, and PHP. I also have experience in creating various other products./i
  );
  expect(subheading.length).toBeGreaterThan(0);

  // Check if the "View all projects" button is present
  const contactButton = screen.getByRole("button", {
    name: /View all projects/i,
  });
  expect(contactButton).toBeInTheDocument();

  // Check image alt
  const imgAltTexts = ["Financial Planner Booking Site", "EC site", "Todo App"];
  imgAltTexts.forEach((altText) => {
    expect(screen.getByText(altText)).toBeInTheDocument();
  });

  // Check img span
  const spans = ["Developed in Ruby", "Developed in PHP", "Developed in Ruby"];
  spans.forEach((span) => {
    expect(screen.getByText(span)).toBeInTheDocument();
  });
});
