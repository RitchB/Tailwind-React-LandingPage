import React from "react";
import Link from "next/link";
import Image from "next/image";
import theCardsBoxLogo from "../public/theCardsBox.png";

const Navbar = () => {
  return (
    <>
      <div className="mt-8 flex justify-between">
        <div className="flex gap-8">
          <div className="flex items-center space-x-4">
            <Image src={theCardsBoxLogo} alt="logo" />
          </div>
          <div className="flex items-justify space-x-1">twitter logo</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
