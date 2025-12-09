"use client";

import React from "react";
import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "@/lib/styles";
import { useLanguage } from "@/lib/LanguageContext";

interface Experience {
  titleKey: string;
  companyKey: string;
  icon: string;
  iconBg: string;
  dateKey: string;
  pointKeys: string[];
}

const experiences: Experience[] = [
  {
    titleKey: "exp.kyutech.title",
    companyKey: "exp.kyutech.company",
    icon: "/assets/company/kyutech.jpg",
    iconBg: "#383E56",
    dateKey: "exp.kyutech.date",
    pointKeys: ["exp.kyutech.point1", "exp.kyutech.point2"],
  },
  {
    titleKey: "exp.fusic.title",
    companyKey: "exp.fusic.company",
    icon: "/assets/company/fusic.jpg",
    iconBg: "#E6DEDD",
    dateKey: "exp.fusic.date",
    pointKeys: ["exp.fusic.point1", "exp.fusic.point2", "exp.fusic.point3"],
  },
  {
    titleKey: "exp.mf.title",
    companyKey: "exp.mf.company",
    icon: "/assets/company/moneyforward.png",
    iconBg: "#383E56",
    dateKey: "exp.mf.date",
    pointKeys: ["exp.mf.point1", "exp.mf.point2", "exp.mf.point3"],
  },
  {
    titleKey: "exp.dmm.title",
    companyKey: "exp.dmm.company",
    icon: "/assets/company/dmm.jpg",
    iconBg: "#E6DEDD",
    dateKey: "exp.dmm.date",
    pointKeys: ["exp.dmm.point1", "exp.dmm.point2", "exp.dmm.point3"],
  },
  {
    titleKey: "exp.nook.title",
    companyKey: "exp.nook.company",
    icon: "/assets/company/nook.png",
    iconBg: "#4B4B4B",
    dateKey: "exp.nook.date",
    pointKeys: ["exp.nook.point1", "exp.nook.point2"],
  },
];

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const { t, language } = useLanguage();

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={t(experience.dateKey)}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full overflow-hidden rounded-full relative">
          <Image
            src={experience.icon}
            alt={t(experience.companyKey)}
            fill
            className="object-cover"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{t(experience.titleKey)}</h3>
        <p
          className={`text-secondary text-[16px] font-semibold ${language === "ja" ? "font-japanese" : ""}`}
          style={{ margin: 0 }}
        >
          {t(experience.companyKey)}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.pointKeys.map((pointKey, index) => (
          <li
            key={`experience-point-${index}`}
            className={`text-white-100 text-[14px] pl-1 tracking-wider ${language === "ja" ? "font-japanese" : ""}`}
          >
            {t(pointKey)}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { t, language } = useLanguage();

  return (
    <div id="experience">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-[55px] font-bold leading-[0.8] lg:text-[110px] pt-24"
      >
        <p className={`${styles.sectionSubText} text-center mb-4 text-accent ${language === "ja" ? "font-japanese" : ""}`}>
          {t("experience.subtitle")}
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          {t("experience.title")}
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
