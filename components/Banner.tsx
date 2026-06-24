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

  const socialLinks = [
    { href: "https://twitter.com/Yu326ta", icon: FaXTwitter, label: "Twitter" },
    { href: "https://github.com/Yu-326-ta", icon: FaGithub, label: "GitHub" },
    {
      href: "https://www.instagram.com/y.yut326/",
      icon: FaInstagram,
      label: "Instagram",
    },
    { href: "https://zenn.dev/yu_326_ta", icon: SiZenn, label: "Zenn" },
  ];

  return (
    <section
      className="min-h-[100vh] flex items-center relative pt-28 lg:pt-36 pb-0 lg:pb-12"
      id="home"
    >
      {/* Background Elements - 静的な装飾に変更（パフォーマンス改善） */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-accent/30 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/25 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* Text Content */}
          <div className="flex-1 text-center font-secondary lg:text-left z-20">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="text-[40px] font-bold leading-[0.9] lg:text-[110px] mb-6"
            >
              <span className="text-white">YUTA </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B809C3] to-[#22D3EE]">
                YOSHINAGA
              </span>
            </motion.h1>

            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="mb-6 text-[20px] lg:text-[40px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">{t("banner.greeting")}</span>
              <TypeAnimation
                key={language}
                sequence={[t("banner.role1"), 2000, t("banner.role2"), 2000]}
                speed={50}
                className="text-[#B809C3]"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className={`mb-8 max-w-2xl mx-auto lg:mx-0 p-4 lg:p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 ${
                language === "ja" ? "font-japanese" : ""
              }`}
            >
              {t("banner.description")
                .split("\n\n")
                .map((paragraph, index) => (
                  <p
                    key={index}
                    className={`text-gray-300 leading-relaxed text-sm lg:text-base ${
                      index > 0 ? "mt-3 lg:mt-4" : ""
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-wrap max-w-max gap-4 lg:gap-x-6 items-center mb-8 mx-auto lg:mx-0"
            >
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer"
              >
                <Button
                  variant="gradient"
                  className="btn-lg shadow-[0_0_30px_rgba(184,9,195,0.4)] hover:shadow-[0_0_50px_rgba(184,9,195,0.6)] transition-all duration-300"
                >
                  {t("banner.contactMe")}
                </Button>
              </ScrollLink>
              <Link
                href="https://www.yureate.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-3 font-secondary font-semibold text-white overflow-hidden rounded-full"
              >
                <span className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all duration-300 rounded-full"></span>
                <span className="relative flex items-center gap-2">
                  {t("banner.myPortfolio")}
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </span>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex text-[24px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-white hover:text-accent hover:scale-110 transition-all duration-300"
                  >
                    <Icon size={28} />
              </Link>
                );
              })}
            </motion.div>
          </div>

          {/* Image - Now visible on all screen sizes */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-1 max-w-[280px] sm:max-w-[350px] lg:max-w-[500px] w-full relative justify-center items-center mx-auto mt-8 lg:mt-0"
          >
            {/* Decorative circle behind image - 静的に変更 */}
            <div className="absolute w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-gradient-to-b from-accent/30 to-transparent rounded-full blur-3xl -z-10" />

            <Image
              src="/assets/about.png"
              alt="Profile"
              width={500}
              height={600}
              className="w-full h-auto drop-shadow-2xl object-contain"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
