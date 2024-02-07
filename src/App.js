import React from "react";
// components
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Experience from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
// Analytics
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <Nav />
      <Skills />
      <Experience />
      <Work />
      <Contact />
      <Analytics />
    </div>
  );
};

export default App;
