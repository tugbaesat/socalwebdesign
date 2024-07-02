"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";
import Image from "next/image";

const navLinks = [
  {
    title: "Home",
    id: 1,
    path: "/#home",
  },
  {
    title: "Services",
    id: 2,
    path: "/#services",
  },
  {
    title: "Works",
    id: 3,
    path: "/#works",
  },
  {
    title: "Contact",
    id: 4,
    path: "/#contact",
  },
];

const Navbar = () => {
  return (
    <nav className="fixed flex items-center justify-between md:flex-col md:justify-start md:items-start font-navbar">
      <MobileNavbar navLinks={navLinks} />
      {/* <motion.div
        className="p-2 md:px-2 md:py-4 "
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Link href={"/"}>
          <Image
            src="/images/Logo.png"
            width={100}
            height={100}
            alt="Brand logo featuring waves and sun"
            className="w-28 md:w-52"
          />
          <p className="px-4 pb-8 text-2xl font-bold uppercase text-dark-primary-text">
            SoCal <br /> Web Design
          </p>
        </Link>
      </motion.div> */}
      {/* <DesktopNavbar navLinks={navLinks} /> */}
    </nav>
  );
};

export default Navbar;
