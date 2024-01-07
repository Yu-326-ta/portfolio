import React from "react";
// images
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="#">
            <img src={Logo} alt="" className="logo-img" />
          </a>
          <button className="btn btn-sm">Welcomne to my portfolio</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
