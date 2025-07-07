import React from "react";
// images
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="py-8 pt-24">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="#">
            <img src={Logo} alt="" className="logo-img" />
          </a>
          <button className="btn btn-sm">私のポートフォリオへようこそ</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
