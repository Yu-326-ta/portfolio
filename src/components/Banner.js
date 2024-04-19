import React from "react";
// images
import Image from "../assets/about.png";
// icons
import { FaGithub } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { SiZenn } from "react-icons/si";
// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        {/* text */}
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px] pt-20"
            >
              YUTA <span>YOSHINAGA</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60x] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  2000,
                  "Web Developer",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <p className="mb-8 max-w-lg mx-auto lg:mx-0">
              Hi! I'm Yuta Yoshinaga. I am a student at a university in Kyushu
              of Japan and next year I will start working for an IT company as a
              software engineer! I specialize in backend and have experience in
              GO, PHP and RUBY development in several companies. Currently
              learning about infrastructure, including AWS!
            </p>
            <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <button className="btn btn-lg">Contact me</button>
              <a
                href="#"
                className="btn-link text-accent font-secondary font-semibold"
              >
                My Portfolio
              </a>
            </div>
            <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a href="https://twitter.com/Yu326ta" aria-label="Twitter">
                <FaXTwitter />
              </a>
              <a href="https://github.com/Yu-326-ta" aria-label="GitHub">
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/y.yut326/"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a href="https://zenn.dev/yu_326_ta" aria-label="Zenn">
                <SiZenn />
              </a>
            </div>
          </div>
          {/* image */}
          <div className="lg:flex flex-1 max-w-[320px] lg:max-w-[482px]">
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
