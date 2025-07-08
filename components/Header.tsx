import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <Link href="/">
            <Image 
              src="/assets/logo.png" 
              alt="Logo" 
              width={150} 
              height={50} 
              className="logo-img" 
            />
          </Link>
          <Button variant="gradient" className="btn-sm">Welcome to my portfolio</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;