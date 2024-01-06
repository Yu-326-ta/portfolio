import React from "react";
// images
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div>
          {/* logo */}
          <a href="#">
            <img src={Logo} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
