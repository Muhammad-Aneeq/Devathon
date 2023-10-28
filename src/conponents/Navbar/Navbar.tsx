"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const links: string[] = ["Home", "AllCourses", "About", "Contact"];
  return (
    <nav className="bg-[#0d68ae] p-4 fixed w-full ">
      <div className="container mx-auto flex flex-row items-center justify-between  ">
        <div className="">
          <Image src="/logo.svg" width={200} height={100} alt="logo" />
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden cursor-pointer"
        >
          {!isOpen ? (
            <GiHamburgerMenu color="white" />
          ) : (
            <RxCross1 color="white" />
          )}
        </button>
        <div className="hidden md:flex ">
          <ul className="hidden list-none md:flex flex-row items-center justify-between gap-x-8 ">
            {links.map((link: string, index: number) => (
              <li
                className="text-white text-lg font-bold cursor-pointer "
                key={index}
              >
                <Link
                  className="cursor-pointer"
                  href={link !== "Home" ? link : "/"}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isOpen && (
        <div className=" bg-[#0d68ae] flex flex-col items-center justify-center md:hidden">
          <ul className=" list-none flex flex-col items-center justify-center gap-8 ">
            {links.map((link: string, index: number) => (
              <li
                className="text-white text-lg font-bold cursor-pointer"
                key={index}
              >
                <Link
                  className="cursor-pointer"
                  href={link !== "Home" ? link : "/"}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
