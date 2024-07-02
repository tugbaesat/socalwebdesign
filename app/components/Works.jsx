import React from "react";
import Image from "next/image";

const Works = () => {
  return (
    <section className="flex flex-col items-center justify-center py-20 bg-light-bg">
      <h2 className="pb-20 text-6xl font-bold text-brand-primary">Works</h2>
      <div className="relative">
        <Image
          src="/images/the-arena.jpg"
          width={1000}
          height={200}
          alt="Brand logo featuring waves and sun"
          className=""
        />
        <div className="absolute bottom-0 left-0 flex justify-between w-full px-10 py-2 text-center text-white bg-black bg-opacity-50 font-navbar">
          <p className="text-sm font-semibold md:text-xl">
            Project Title <br />
            The Arena
          </p>
          <p className="text-sm font-semibold md:text-xl">
            Project Year <br />
            2024
          </p>
          <p className="text-sm font-semibold md:text-xl">
            web design <br />
            web development
          </p>
        </div>
      </div>
    </section>
  );
};

export default Works;
