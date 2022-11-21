import React, { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import { BsTwitter } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav>
      <div className="mt-8 flex justify-between">
        <div className="flex">
          <div className="flex items-center space-x-8">
            <Link href="/">
              <a className="px-12 flex items-center text-2xl font-bold text-stone-100 tracking-tight antialised font-Nunito">
                theCardsBox
              </a>
            </Link>
          </div>
        </div>
        <div className="px-12 flex flex items-center space-x-1">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/thecardsbox"
            className="text-twitter text-6xl"
          >
            <BsTwitter />
          </a>
        </div>

        {/*mobile button goes here*/}
      </div>
    </nav>
  );
};

export default Navbar;
