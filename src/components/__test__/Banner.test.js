import React from "react";
import { render, screen } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import "intersection-observer";
import Banner from "../Banner";

test("renders Banner component", () => {
  render(<Banner />);

  // Check if the main heading is rendered
  const heading = screen.getByRole("heading", { name: /YUTA YOSHINAGA/i });
  expect(heading).toBeInTheDocument();

  // Check if the text "I am a" is present
  const subheading = screen.getAllByText(/I am a/i);
  expect(subheading.length).toBeGreaterThan(0);

  // Check if the "Contact me" button is present
  const contactButton = screen.getByRole("button", { name: /Contact me/i });
  expect(contactButton).toBeInTheDocument();

  // Check if the social media icons are present
  const twitterIcons = screen.getAllByRole("link", { "aria-label": "Twitter" });
  expect(twitterIcons.length).toBeGreaterThan(0);

  const githubIcons = screen.getAllByRole("link", { "aria-label": "GitHub" });
  expect(githubIcons.length).toBeGreaterThan(0);

  const instagramIcons = screen.getAllByRole("link", {
    "aria-label": "Instagram",
  });
  expect(instagramIcons.length).toBeGreaterThan(0);

  const zennIcons = screen.getAllByRole("link", { "aria-label": "Zenn" });
  expect(zennIcons.length).toBeGreaterThan(0);
});
