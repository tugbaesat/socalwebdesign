import React from "react";

const WorksHero = ({ title }) => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-screen p-20 text-center arena">
      <h1 className="text-6xl font-bold leading-snug uppercase md:pt-16 md:text-8xl text-dark-primary-text">
        {title}
      </h1>
    </section>
  );
};

export default WorksHero;
