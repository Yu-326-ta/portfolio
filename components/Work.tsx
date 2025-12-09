"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import { styles } from "@/lib/styles";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";

interface Project {
  id: number;
  title: string;
  descriptionKey: string;
  image: string;
  technologies: string[];
  categoryKey: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "EatPass",
    descriptionKey: "project.eatpass.description",
    image: "/assets/products/eatpass.png",
    technologies: ["Next.js", "Supabase", "AWS", "Tailwind CSS"],
    categoryKey: "project.category.webapp",
    link: "https://www.eatpass.jp/ja",
  },
  {
    id: 2,
    title: "Prompt Crash",
    descriptionKey: "project.procra.description",
    image: "/assets/products/procra.png",
    technologies: ["Flutter", "Supabase"],
    categoryKey: "project.category.mobile",
    link: "https://procra.jp/",
  },
  {
    id: 3,
    title: "Portfolio",
    descriptionKey: "project.portfolio.description",
    image: "/assets/products/portfolio.png",
    technologies: ["Next.js", "Tailwind CSS"],
    categoryKey: "project.category.portfolio",
    link: "https://www.yu-326-ta.com/",
  },
];

const Work = () => {
  const { t, language } = useLanguage();

  const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
    <motion.div
      variants={fadeIn("up", 0.2 + index * 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20 hover:border-accent/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-accent/20"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 text-xs font-semibold bg-accent/80 text-white rounded-full backdrop-blur-sm ${language === "ja" ? "font-japanese" : ""}`}>
            {t(project.categoryKey)}
          </span>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
          >
            <Button variant="gradient">{t("work.viewProject")}</Button>
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <p className={`text-gray-300 text-sm mb-4 leading-relaxed ${language === "ja" ? "font-japanese" : ""}`}>
          {t(project.descriptionKey)}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech: string, techIndex: number) => (
            <span
              key={techIndex}
              className="px-3 py-1 text-xs font-medium bg-white/10 text-white rounded-full border border-white/20 hover:border-accent/50 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Gradient Border Effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </motion.div>
  );

  return (
    <section className="section py-32 mt-96" id="work">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className={`font-bold leading-[0.8] text-center mb-20 ${
            language === "ja"
              ? "text-[40px] lg:text-[80px]"
              : "text-[55px] lg:text-[110px]"
          }`}
        >
          <p
            className={`${styles.sectionSubText} text-center ${
              language === "ja" ? "mb-8 lg:mb-12 font-japanese" : "mb-4"
            } text-accent`}
          >
            {t("work.subtitle")}
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            {t("work.title")}
          </h2>
        </motion.div>

        {/* Introduction */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <p className={`text-gray-300 text-lg leading-relaxed mb-8 ${language === "ja" ? "font-japanese" : ""}`}>
            {t("work.description")}
          </p>
          <Button variant="gradient" className="btn-lg">
            {t("work.viewAll")}
          </Button>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-accent/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h3 className={`text-2xl font-bold text-white mb-4 ${language === "ja" ? "font-japanese" : ""}`}>
              {t("work.ctaTitle")}
            </h3>
            <p className={`text-gray-300 mb-6 max-w-2xl mx-auto ${language === "ja" ? "font-japanese" : ""}`}>
              {t("work.ctaDescription")}
            </p>
            <Button variant="gradient" className="btn-lg">
              {t("work.getInTouch")}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
