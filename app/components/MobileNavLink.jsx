import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const MobileNavLink = ({ open, setOpen, navLinks }) => {
  return (
    <motion.div
      variants={variants}
      className="absolute flex flex-col items-start justify-center w-full h-full gap-20 px-10 text-4xl font-bold uppercase text-light-primary-text"
    >
      {navLinks.map((link) => (
        <a key={link.id} href={link.path}>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpen(!open)}
          >
            {link.title}
          </motion.div>
     
        </a>
      ))}
    </motion.div>
  );
};

export default MobileNavLink;
