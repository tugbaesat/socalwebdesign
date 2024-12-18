import React from "react";
import AnimatedLink from "./AnimatedLink";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "./NavLinks";

const DesktopNavbar = () => {
  return (
    <div
      className="fixed hidden px-6 font-navbar md:block md:w-auto"
      id="navbar"
    >
      <Link href={"/"}>
        <Image
          src="/images/Logo.png"
          width={200}
          height={200}
          alt="Brand logo featuring waves and sun"
          className="w-28 md:w-52"
        />
        <p className="px-4 pt-2 pb-8 text-2xl font-bold uppercase text-dark-primary-text">
          SoCal <br /> Web Design
        </p>
      </Link>

      <ul
        id="navLinks"
        className="flex flex-col gap-8 px-4 font-bold text-dark-primary-text "
      >
        {navLinks.map((link) => (
          <li key={link.id} className="relative py-8 border-b-4">
            <AnimatedLink
              href={link.path}
              title={link.title}
              isLast={link.id + 1 === navLinks.length}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DesktopNavbar;
