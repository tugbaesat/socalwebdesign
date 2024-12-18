import React from "react";

const Footer = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-start justify-between gap-6 px-8 py-24 md:flex-row md:px-20"
    >
      <a
        className="text-5xl font-extrabold text-center md:w-1/2 text-brand-primary md:text-left font-heading"
        href="mailto:socalwebdesigninfo@gmail.com"
      >
        Let’s work together!
      </a>
      <div className="flex flex-col items-end gap-4 md:w-1/2">
        <p className="text-justify ">
          Welcome to a world of limitless possibilities, where the journey is as
          exhilarating as the destination, and where every moment is an
          opportunity to make your mark on the canvas of existence. The only
          limit is the extent of your imagination.
        </p>
        <a href="mailto:socalwebdesigninfo@gmail.com" className="text-[#828282] font-extralight">
          socalwebdesigninfo@gmail.com
        </a>
      </div>
    </section>
  );
};

export default Footer;
