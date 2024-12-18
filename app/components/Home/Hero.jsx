import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="flex items-center justify-start">
        <h1 className="px-10 text-6xl font-extrabold leading-snug uppercase md:py-20 md:text-8xl">
          Web Design + <br /> Web Development <br /> in{" "}
          <span className="text-brand-primary">Los Angeles</span>{" "}
        </h1>
      </div>
      <div className="p-10 text-right md:p-36 bg-light-bg">
        <h2 className="text-6xl font-extrabold text-light-primary-text">
          Elevate Your Online Presence with Expert{" "}
          <span className="text-brand-primary">
            Website Design + Development
          </span>{" "}
          in Los Angeles, CA{" "}
        </h2>
        <p className="py-10 text-2xl">
          In the competitive digital market of Los Angeles, California, having a
          standout online presence is key to success. Our team specializes in
          website design and development, offering tailored solutions to meet
          the unique needs of businesses across Los Angeles, from Santa Monica
          to Pasadena.
        </p>
      </div>
    </section>
  );
};

export default Hero;
