"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const ModernNav = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", icon: BiHomeAlt },
    { id: "skills", label: "Skills", icon: BsClipboardData },
    { id: "experience", label: "Experience", icon: BiUser },
    { id: "work", label: "Work", icon: BsBriefcase },
    { id: "contact", label: "Contact", icon: BsChatSquare },
  ];

  const handleMobileMenuClick = (itemId: string) => {
    setActiveSection(itemId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hidden md:flex fixed top-10 left-0 right-0 z-50 justify-center"
      >
        <motion.nav
          className={`
            px-12 py-6 rounded-full backdrop-blur-lg border transition-all duration-300
            ${
              scrollY > 50
                ? "bg-black/95 border-gray-600/50 shadow-xl"
                : "bg-black/80 border-gray-500/30 shadow-lg"
            }
          `}
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          <div className="flex items-center justify-center space-x-12">
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  to={item.id}
                  activeClass="text-accent"
                  smooth={true}
                  spy={true}
                  offset={-80}
                  duration={500}
                  onSetActive={() => setActiveSection(item.id)}
                  className={`
                    relative cursor-pointer px-6 py-3 rounded-full text-sm font-medium
                    transition-all duration-300 whitespace-nowrap
                    hover:bg-accent/20 hover:text-accent
                    ${
                      activeSection === item.id
                        ? "text-accent bg-accent/20 shadow-sm"
                        : "text-white/80 hover:text-accent"
                    }
                  `}
                >
                  <span className="relative z-10">{item.label}</span>

                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNavItem"
                      className="absolute inset-0 bg-gradient-to-r from-accent/30 to-purple-500/30 rounded-full"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Subtle glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/10 to-purple-500/10 -z-10"
            animate={{
              opacity: scrollY > 50 ? 0.8 : 0.4,
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.nav>
      </motion.div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="md:hidden fixed top-4 right-4 z-50"
      >
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-3 rounded-full bg-black/80 border border-black/30 backdrop-blur-md shadow-lg text-white hover:bg-black/90 transition-colors duration-300"
        >
          {isMobileMenuOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
        </motion.button>
      </motion.div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, y: -50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-xs px-4"
            >
              <div className="bg-black/95 backdrop-blur-lg border border-gray-600/50 rounded-2xl shadow-2xl overflow-hidden">
                <div className="py-2">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Link
                          to={item.id}
                          smooth={true}
                          spy={true}
                          offset={-80}
                          duration={500}
                          onClick={() => handleMobileMenuClick(item.id)}
                          className={`
                            flex items-center space-x-4 px-6 py-4 transition-all duration-300
                            hover:bg-accent/20 hover:text-accent cursor-pointer
                            ${
                              activeSection === item.id
                                ? "text-accent bg-accent/20"
                                : "text-white/80"
                            }
                          `}
                        >
                          <Icon size={18} />
                          <span className="font-medium text-sm">
                            {item.label}
                          </span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModernNav;
