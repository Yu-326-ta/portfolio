import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import react from "../assets/skills/react.png";
import ruby from "../assets/skills/ruby.png";
import php from "../assets/skills/php.png";
import golang from "../assets/skills/golang.svg";
import mysql from "../assets/skills/mysql.png";
import docker from "../assets/skills/docker.webp";
import aws from "../assets/skills/aws.png";
import redis from "../assets/skills/redis.png";
import graphql from "../assets/skills/graphql.png";
import git from "../assets/skills/git.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-fuchsia-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-stone-500",
    },
    {
      id: 3,
      src: react,
      title: "React",
      style: "shadow-fuchsia-500",
    },
    {
      id: 4,
      src: ruby,
      title: "Ruby",
      style: "shadow-stone-500",
    },
    {
      id: 5,
      src: golang,
      title: "GO",
      style: "shadow-fuchsia-500",
    },
    {
      id: 6,
      src: php,
      title: "PHP",
      style: "shadow-stone-500",
    },
    {
      id: 7,
      src: mysql,
      title: "MySQL",
      style: "shadow-fuchsia-500",
    },
    {
      id: 8,
      src: docker,
      title: "Docker",
      style: "shadow-stone-500",
    },
    {
      id: 9,
      src: aws,
      title: "AWS",
      style: "shadow-fuchsia-500",
    },
    {
      id: 10,
      src: redis,
      title: "Redis",
      style: "shadow-stone-500",
    },
    {
      id: 11,
      src: graphql,
      title: "GraphQL",
      style: "shadow-fuchsia-500",
    },
    {
      id: 12,
      src: git,
      title: "Git",
      style: "shadow-stone-500",
    },
  ];

  return (
    <section className="section" id="skills">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        name="skill"
        className="w-full h-screen"
      >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <div>
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
              Skills
            </p>
            <p className="py-6 text-accent">
              These are the technologies I've worked with
            </p>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
