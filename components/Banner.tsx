"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { SiZenn } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";

const Banner = () => {
  const { language, t } = useLanguage();

  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center pt-32 lg:pt-40"
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
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px] pt-20 mb-8"
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
              <span className="text-white mr-4">{t("banner.greeting")}</span>
              <TypeAnimation
                key={language} // 言語が変わったらアニメーションをリセット
                sequence={[t("banner.role1"), 2000, t("banner.role2"), 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <p
              className={`mb-8 max-w-lg mx-auto lg:mx-0 ${
                language === "ja" ? "font-japanese" : ""
              }`}
            >
              {t("banner.description")}
            </p>
            <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer"
              >
                <Button variant="gradient" className="btn-lg">
                  {t("banner.contactMe")}
                </Button>
              </ScrollLink>
              <ScrollLink
                to="work"
                smooth={true}
                duration={500}
                offset={-80}
                className="btn-link text-accent font-secondary font-semibold cursor-pointer"
              >
                {t("banner.myPortfolio")}
              </ScrollLink>
            </div>
            <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <Link href="https://twitter.com/Yu326ta" aria-label="Twitter">
                <FaXTwitter />
              </Link>
              <Link href="https://github.com/Yu-326-ta" aria-label="GitHub">
                <FaGithub />
              </Link>
              <Link
                href="https://www.instagram.com/y.yut326/"
                aria-label="Instagram"
              >
                <FaInstagram />
              </Link>
              <Link href="https://zenn.dev/yu_326_ta" aria-label="Zenn">
                <SiZenn />
              </Link>
            </div>
          </div>
          {/* image */}
          <div className="lg:flex flex-1 max-w-[320px] lg:max-w-[482px]">
            <Image
              src="/assets/about.png"
              alt="Profile"
              width={482}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
