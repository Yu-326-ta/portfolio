"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import { styles } from "@/lib/styles";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
  {
    id: 4,
    title: "aio対策HP",
    descriptionKey: "project.aio.description",
    image: "/assets/products/aio.png",
    technologies: ["Next.js", "Tailwind CSS"],
    categoryKey: "project.category.website",
    link: "https://www.aio-marketing.net/",
  },
  {
    id: 5,
    title: "Adventura",
    descriptionKey: "project.adventura.description",
    image: "/assets/products/adventura.png",
    technologies: ["Next.js", "Tailwind CSS", "Supabase", "AWS"],
    categoryKey: "project.category.webapp",
    link: "https://adventura.jp/",
  },
  {
    id: 6,
    title: "Newr HP",
    descriptionKey: "project.newr.description",
    image: "/assets/products/newr.png",
    technologies: ["Next.js", "Tailwind CSS"],
    categoryKey: "project.category.website",
    link: "https://www.newr.jp/",
  },
];

const Work = () => {
  const { t, language } = useLanguage();

  // Navigation state
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  const ProjectCard = ({ project }: { project: Project }) => (
    <div className="group relative bg-white/5 backdrop-blur-xl rounded-[24px] sm:rounded-[32px] overflow-hidden border border-white/10 h-[380px] sm:h-[420px] lg:h-[460px] flex flex-col transition-all duration-500 hover:border-accent/30 shadow-2xl">
      {/* Glow Effect */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-accent/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-32 h-32 bg-purple-500/20 blur-3xl rounded-full" />

      {/* Image Container */}
      <div className="relative h-40 sm:h-48 lg:h-52 overflow-hidden shrink-0 m-1.5 sm:m-2 rounded-[20px] sm:rounded-[28px]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span
            className={`px-3 py-1 text-[10px] uppercase tracking-wider font-bold bg-black/60 text-white rounded-full backdrop-blur-md border border-white/10 ${
              language === "ja" ? "font-japanese" : ""
            }`}
          >
            {t(project.categoryKey)}
          </span>
        </div>

        {/* Hover Overlay Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 bg-black/40 backdrop-blur-[2px]">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            <Button variant="gradient" className="shadow-2xl text-sm px-6">
              {t("work.viewProject")}
            </Button>
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 lg:p-5 flex-grow flex flex-col relative z-10">
        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-1">
          {project.title}
        </h3>
        <p
          className={`text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3 leading-relaxed line-clamp-2 sm:line-clamp-3 ${
            language === "ja" ? "font-japanese" : ""
          }`}
        >
          {t(project.descriptionKey)}
        </p>

        {/* Technologies */}
        <div className="mt-auto flex flex-wrap gap-1 sm:gap-1.5">
          {project.technologies.slice(0, 3).map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-1.5 sm:px-2 py-0.5 text-[8px] sm:text-[10px] font-medium bg-white/5 text-white/80 rounded-md border border-white/5"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-1.5 sm:px-2 py-0.5 text-[8px] sm:text-[10px] font-medium bg-white/5 text-white/80 rounded-md border border-white/5">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section className="section py-32 pt-24 lg:pt-48 mb-32 lg:mb-64" id="work">
      <div className="container mx-auto px-4 relative">
        {/* Title Section */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className={`font-bold leading-[0.8] text-center mb-12 ${
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

        {/* Swiper Carousel */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="relative px-0 lg:px-12"
        >
          <Swiper
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1.4}
            spaceBetween={-20}
            breakpoints={{
              640: { slidesPerView: 1.6, spaceBetween: -30 },
              768: { slidesPerView: 2.5, spaceBetween: -40 },
              1024: { slidesPerView: 3, spaceBetween: -50 },
            }}
            loop={true}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={{
              prevEl,
              nextEl,
            }}
            modules={[Pagination, Navigation]}
            className="w-full py-16 work-swiper"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-1 sm:left-4 lg:left-10 z-20">
            <button
              ref={(node) => setPrevEl(node)}
              className="p-2 sm:p-3 lg:p-4 rounded-full bg-accent/20 border border-accent/30 text-accent hover:bg-accent hover:text-white transition-all duration-300 backdrop-blur-md shadow-lg"
            >
              <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-1 sm:right-4 lg:right-10 z-20">
            <button
              ref={(node) => setNextEl(node)}
              className="p-2 sm:p-3 lg:p-4 rounded-full bg-accent/20 border border-accent/30 text-accent hover:bg-accent hover:text-white transition-all duration-300 backdrop-blur-md shadow-lg"
            >
              <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </button>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-accent/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 max-w-4xl mx-auto">
            <h3
              className={`text-2xl font-bold text-white mb-4 ${
                language === "ja" ? "font-japanese" : ""
              }`}
            >
              {t("work.ctaTitle")}
            </h3>
            <div
              className={`text-gray-300 mb-6 max-w-2xl mx-auto ${
                language === "ja" ? "font-japanese" : ""
              }`}
            >
              {t("work.ctaDescription")
                .split("\n\n")
                .map((paragraph, index) => (
                  <p key={index} className={index > 0 ? "mt-4" : ""}>
                    {paragraph}
                  </p>
                ))}
            </div>
            <Button variant="gradient" className="btn-lg">
              {t("work.getInTouch")}
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="mb-8 lg:mb-24"></div>

      {/* Custom CSS for Swiper */}
      <style jsx global>{`
        .work-swiper {
          overflow: visible !important;
          padding-top: 20px !important;
          padding-bottom: 60px !important;
        }
        .work-swiper .swiper-wrapper {
          align-items: center;
        }
        .work-swiper .swiper-slide {
          transition: all 0.4s ease;
          opacity: 0.4;
          transform: scale(0.75);
        }
        .work-swiper .swiper-slide-active {
          opacity: 1;
          transform: scale(1.05);
          z-index: 10;
        }
        .work-swiper .swiper-slide-prev,
        .work-swiper .swiper-slide-next {
          opacity: 0.6;
          transform: scale(0.8);
          z-index: 5;
        }
        .work-swiper .swiper-pagination-bullet {
          background: rgba(184, 9, 195, 0.5);
          width: 8px;
          height: 8px;
          transition: all 0.3s;
        }
        .work-swiper .swiper-pagination-bullet-active {
          background: rgb(184, 9, 195);
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
};

export default Work;
