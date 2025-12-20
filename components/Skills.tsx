"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import { styles } from "@/lib/styles";
import { useLanguage } from "@/lib/LanguageContext";

const Skills = () => {
  const { t, language } = useLanguage();

  const techs = [
    {
      id: 1,
      src: "/assets/skills/html.png",
      title: "HTML",
    },
    {
      id: 2,
      src: "/assets/skills/css.png",
      title: "CSS",
    },
    {
      id: 3,
      src: "/assets/skills/react.png",
      title: "React",
    },
    {
      id: 4,
      src: "/assets/skills/ruby.png",
      title: "Ruby",
    },
    {
      id: 5,
      src: "/assets/skills/golang.svg",
      title: "GO",
    },
    {
      id: 6,
      src: "/assets/skills/php.png",
      title: "PHP",
    },
    {
      id: 7,
      src: "/assets/skills/python.png",
      title: "Python",
    },
    {
      id: 8,
      src: "/assets/skills/nextjs.png",
      title: "Next.js",
    },
    {
      id: 9,
      src: "/assets/skills/flutter.png",
      title: "Flutter",
    },
    {
      id: 10,
      src: "/assets/skills/mysql.png",
      title: "MySQL",
    },
    {
      id: 11,
      src: "/assets/skills/docker.webp",
      title: "Docker",
    },
    {
      id: 12,
      src: "/assets/skills/aws.png",
      title: "AWS",
    },
    {
      id: 13,
      src: "/assets/skills/gc.png",
      title: "GCP",
    },
    {
      id: 14,
      src: "/assets/skills/redis.png",
      title: "Redis",
    },
    {
      id: 15,
      src: "/assets/skills/graphql.png",
      title: "GraphQL",
    },
    {
      id: 16,
      src: "/assets/skills/supabase.png",
      title: "Supabase",
    },
    {
      id: 17,
      src: "/assets/skills/git.png",
      title: "Git",
    },
    {
      id: 18,
      src: "/assets/skills/typescript.png",
      title: "TypeScript",
    },
    {
      id: 19,
      src: "/assets/skills/tailwind.png",
      title: "Tailwind CSS",
    },
    {
      id: 20,
      src: "/assets/skills/terraform.png",
      title: "Terraform",
    },
  ];

  // 技術スキルを2つのグループに分ける
  const firstRow = techs.slice(0, 10);
  const secondRow = techs.slice(10, 20);

  const SkillCard = ({ tech }: { tech: { src: string; title: string } }) => (
    <div className="flex-shrink-0 mx-3 sm:mx-6">
      <div className="w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-3 sm:p-6 flex items-center justify-center border border-white/30 hover:border-accent/70 transition-colors duration-300 group">
        <Image
          src={tech.src}
          alt={tech.title}
          width={60}
          height={60}
          className="w-10 h-10 sm:w-16 sm:h-16 object-contain"
        />
      </div>
      <p className="text-white text-center mt-2 sm:mt-4 text-xs sm:text-base font-semibold tracking-wide">
        {tech.title}
      </p>
    </div>
  );

  return (
    <section
      className="section pt-0 lg:pt-32 pb-32 overflow-hidden"
      id="skills"
    >
      <div className="container mx-auto">
        {/* Title Section */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className={`font-bold leading-[0.8] pt-24 text-center mb-32 ${
            language === "ja"
              ? "text-[40px] lg:text-[80px]"
              : "text-[55px] lg:text-[110px]"
          }`}
        >
          <p
            className={`${styles.sectionSubText} text-center ${
              language === "ja" ? "mb-8 lg:mb-12" : "mb-4"
            } text-[#B809C3]`}
          >
            {t("skills.subtitle")}
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            {t("skills.title")}
          </h2>
        </motion.div>

        {/* Scrolling Skills */}
        <div className="space-y-12 sm:space-y-20">
          {/* First Row - Left to Right */}
          <div className="relative">
            <motion.div
              className="flex"
              style={{ willChange: "transform" }}
              animate={{
                x: [0, -1000],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {/* 最初のセット */}
              {firstRow.map((tech) => (
                <SkillCard key={tech.id} tech={tech} />
              ))}
              {/* 2回目のセット（無限ループのため） */}
              {firstRow.map((tech) => (
                <SkillCard key={`${tech.id}-duplicate`} tech={tech} />
              ))}
              {/* 3回目のセット（より滑らかなループのため） */}
              {firstRow.map((tech) => (
                <SkillCard key={`${tech.id}-triplicate`} tech={tech} />
              ))}
            </motion.div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="relative">
            <motion.div
              className="flex"
              style={{ willChange: "transform" }}
              animate={{
                x: [-1000, 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {/* 最初のセット */}
              {secondRow.map((tech) => (
                <SkillCard key={tech.id} tech={tech} />
              ))}
              {/* 2回目のセット（無限ループのため） */}
              {secondRow.map((tech) => (
                <SkillCard key={`${tech.id}-duplicate`} tech={tech} />
              ))}
              {/* 3回目のセット（より滑らかなループのため） */}
              {secondRow.map((tech) => (
                <SkillCard key={`${tech.id}-triplicate`} tech={tech} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
