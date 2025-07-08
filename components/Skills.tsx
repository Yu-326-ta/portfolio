"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: "/assets/skills/html.png",
      title: "HTML",
      style: "shadow-fuchsia-500",
    },
    {
      id: 2,
      src: "/assets/skills/css.png",
      title: "CSS",
      style: "shadow-fuchsia-500",
    },
    {
      id: 3,
      src: "/assets/skills/react.png",
      title: "React",
      style: "shadow-fuchsia-500",
    },
    {
      id: 4,
      src: "/assets/skills/ruby.png",
      title: "Ruby",
      style: "shadow-fuchsia-500",
    },
    {
      id: 5,
      src: "/assets/skills/golang.svg",
      title: "GO",
      style: "shadow-fuchsia-500",
    },
    {
      id: 6,
      src: "/assets/skills/php.png",
      title: "PHP",
      style: "shadow-fuchsia-500",
    },
    {
      id: 7,
      src: "/assets/skills/mysql.png",
      title: "MySQL",
      style: "shadow-fuchsia-500",
    },
    {
      id: 8,
      src: "/assets/skills/docker.webp",
      title: "Docker",
      style: "shadow-fuchsia-500",
    },
    {
      id: 9,
      src: "/assets/skills/aws.png",
      title: "AWS",
      style: "shadow-fuchsia-500",
    },
    {
      id: 10,
      src: "/assets/skills/redis.png",
      title: "Redis",
      style: "shadow-fuchsia-500",
    },
    {
      id: 11,
      src: "/assets/skills/graphql.png",
      title: "GraphQL",
      style: "shadow-fuchsia-500",
    },
    {
      id: 12,
      src: "/assets/skills/git.png",
      title: "Git",
      style: "shadow-fuchsia-500",
    },
  ];

  return (
    <section className="section my-64 lg:my-24" id="skills">
      <div className="w-full h-screen">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <div>
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline"
            >
              Skills
            </motion.p>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="py-6 text-accent"
            >
              These are the technologies I&apos;ve worked with
            </motion.p>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <Image 
                  src={src} 
                  alt={title} 
                  width={80} 
                  height={80} 
                  className="w-20 mx-auto" 
                />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;