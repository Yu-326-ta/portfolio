import React from "react";
// iconのインポート
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
// link
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 py-4">
      <div className="container mx-auto px-4">
        <div className="w-full bg-black/20 backdrop-blur-2xl rounded-full mx-auto px-6 py-4 flex justify-center lg:justify-between items-center">
          <div className="flex gap-x-8 lg:gap-x-12 text-2xl text-white/50 items-center">
            <Link
              to="home"
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-200}
              className="cursor-pointer w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] flex items-center justify-center hover:text-white transition-colors duration-300"
            >
              <BiHomeAlt />
            </Link>
            <Link
              to="skills"
              activeClass="active"
              smooth={true}
              spy={true}
              className="cursor-pointer w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] flex items-center justify-center hover:text-white transition-colors duration-300"
            >
              <BsClipboardData />
            </Link>
            <Link
              to="experience"
              activeClass="active"
              smooth={true}
              spy={true}
              className="cursor-pointer w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] flex items-center justify-center hover:text-white transition-colors duration-300"
            >
              <BiUser />
            </Link>
            <Link
              to="work"
              activeClass="active"
              smooth={true}
              spy={true}
              className="cursor-pointer w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] flex items-center justify-center hover:text-white transition-colors duration-300"
            >
              <BsBriefcase />
            </Link>
            <Link
              to="contact"
              activeClass="active"
              smooth={true}
              spy={true}
              className="cursor-pointer w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] flex items-center justify-center hover:text-white transition-colors duration-300"
            >
              <BsChatSquare />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
