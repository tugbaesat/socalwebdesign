import React from "react";
import Image from "next/image";
import wireframe from "@/public/images/arenaimages/Wireframe.jpg";

const PreliminaryDesign = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-6 px-20 pt-16">
      <h2 className="text-6xl font-bold text-brand-primary">
        Preliminary Design
      </h2>
      <div className="flex flex-col items-center justify-between w-full gap-6 py-2 lg:items-start lg:flex-row ">
        <div className="flex flex-col items-center justify-center gap-2 text-left lg:items-start lg:w-1/2">
          <h3 className="text-6xl font-bold text-brand-primary">Wireframe</h3>
          <h4 className="text-4xl font-bold">Framing Your Vision</h4>
          <p className="text-lg text-justify ">
            Wireframing is where your vision begins to take shape. Through
            careful structuring and planning, I create a blueprint that lays the
            foundation for a seamless user experience. Each element is
            thoughtfully positioned to align with your goals, ensuring the
            design is both intuitive and impactful from the ground up.
          </p>
        </div>
        <Image
          src={wireframe}
          width={500}
          height={200}
          alt="project image"
          className="lg:w-1/3"
        />
      </div>
    </section>
  );
};

export default PreliminaryDesign;
