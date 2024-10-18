import React from "react";
import Image from "next/image";

const WorksHero = ({ work }) => {
  return (
    <section className="flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold leading-snug uppercase md:pt-16 md:text-8xl text-dark-primary-text">
        {work.title}
      </h1>
      <Image
        src={work.image}
        width={1000}
        height={200}
        alt="project image"
        className=""
      />
    </section>
  );
};

export default WorksHero;
