import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="flex items-center justify-start">
        <h1 className="font-bold leading-snug uppercase text-8xl">
          <span className="text-brand-primary">freelance</span> <br />
          Web Design + <br /> Web Development <br /> in{" "}
          <span className="text-brand-primary">Los Angeles</span>{" "}
        </h1>
      </div>
      <div className="text-right p-36 bg-light-bg">
        <h2 className="text-6xl font-bold text-light-primary-text">
          A world filled with boundless opportunities and endless potential
        </h2>
        <p className="py-10 text-2xl ">
          Based in the heart of Los Angeles, we are dedicated to bringing your
          vision to life with cutting-edge web solutions tailored to your unique
          needs. Whether you’re a startup, small business, or established
          enterprise, we’re here to help you stand out in the digital landscape.
        </p>
      </div>
    </section>
  );
};

export default Hero;
