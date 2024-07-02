"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import MobileNavLink from "./MobileNavLink";
import ToggleButton from "./ToggleButton";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
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

const MobileNavbar = ({ navLinks }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="flex flex-col items-center justify-center md:hidden bg-light-bg"
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
  );
};

export default MobileNavbar;
