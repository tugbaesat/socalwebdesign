import React from "react";
import AnimatedLink from "./AnimatedLink";

const DesktopNavbar = ({ navLinks }) => {
  return (
    <div className="hidden px-6 md:block md:w-auto" id="navbar">
      <ul
        id="navLinks"
        className="flex flex-col gap-8 font-bold text-dark-primary-text"
      >
        {navLinks.map((link) => (
          <li key={link.id} className="relative">
            <AnimatedLink
              href={link.path}
              title={link.title}
              isLast={link.id + 1 === navLinks.length}
            />
            <hr class="h-1 my-8 border-0 bg-dark-primary-text w-36" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DesktopNavbar;
