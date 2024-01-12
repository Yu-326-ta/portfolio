import React from "react";

import { BsArrowUpRight } from "react-icons/bs";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "Financial Planner Booking Site",
    description:
      "You can make an appointment with a financial planner to discuss your finances.",
    link: "Learn more",
  },
  {
    name: "EC Site",
    description: "Shopping platform e-commerce site.",
    link: "Learn more",
  },
  {
    name: "Todo app",
    description: "A website that allows you to manage your tasks.",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div>
          <h2 className="h2 text-accent mb-6">What I Do.</h2>
          <h3></h3>
        </div>
        <div>services</div>
      </div>
    </section>
  );
};

export default Services;
