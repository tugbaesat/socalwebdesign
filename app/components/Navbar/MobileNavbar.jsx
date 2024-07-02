"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import MobileNavLink from "./MobileNavLink";
import ToggleButton from "./ToggleButton";
import Link from "next/link";
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

const variants = {
  open: {
    clipPath: "circle(1300px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-dark-bg md:hidden">
      <motion.div
        className="flex flex-col items-start justify-start md:hidden bg-light-bg"
        animate={open ? "open" : "closed"}
      >
        <motion.div
          variants={variants}
          className="fixed top-0 bottom-0 left-0 right-0 z-10 w-full bg-light-bg"
        >
          <MobileNavLink open={open} setOpen={setOpen} navLinks={navLinks} />
        </motion.div>
        <ToggleButton open={open} setOpen={setOpen} />
      </motion.div>
      <motion.div
        className="flex items-center space-x-2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Link href={"/"} className="flex flex-col items-center space-x-2">
          <Image
            src="/images/Logo.png"
            width={100}
            height={100}
            alt="Brand logo featuring waves and sun"
            className="w-20 h-20"
          />
          <p className="text-2xl font-bold uppercase text-dark-primary-text">
            SoCal <br /> Web Design
          </p>
        </Link>
      </motion.div>
    </nav>
  );
};

export default MobileNavbar;
