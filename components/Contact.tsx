"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";

const Contact = () => {
  const { t, language } = useLanguage();

  return (
    <section className="section my-8 lg:my-24" id="contact">
      <div className="container mx-auto">
        {/* text */}
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className={`mb-6 text-[36px] lg:text-[60x] font-secondary font-semibold uppercase leading-[1] text-accent ${language === "ja" ? "font-japanese" : ""}`}
            >
              {t("contact.subtitle")}
            </motion.div>
            <motion.h2
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px] mb-4"
            >
              {t("contact.title")}
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className={`mb-8 max-w-lg mx-auto lg:mx-0 ${language === "ja" ? "font-japanese" : ""}`}
            >
              {t("contact.description")}
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <Button variant="gradient" className="btn-lg">yoshi.yuta326@gmail.com</Button>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="lg:flex flex-1 max-w-[400px] lg:max-w-[800px]"
          >
            <Image 
              src="/assets/japan.png" 
              alt="Japan" 
              width={800} 
              height={600} 
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
