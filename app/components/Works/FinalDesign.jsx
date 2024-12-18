import React from "react";
import Image from "next/image";
import design from "@/public/images/arenaimages/Design.png";
import image1 from "@/public/images/arenaimages/Home.jpg";
import image2 from "@/public/images/arenaimages/Mobile1.jpg";
import image3 from "@/public/images/arenaimages/PersonalizedBattles.jpg";

const FinalDesign = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full gap-6 px-20 pt-16">
      <h2 className="text-6xl font-bold text-brand-primary">Final Design</h2>
      <div className="flex justify-between w-full py-2">
        <Image
          src={design}
          width={500}
          height={200}
          alt="project image"
          className=""
        />
        <div className="flex flex-col w-1/2 gap-2 text-left">
          <h3 className="text-6xl font-bold text-brand-primary">Design</h3>
          <h4 className="text-4xl font-bold">Precision in Every Pixel</h4>
          <p className="text-lg text-justify ">
            In the design phase, creativity and strategy come together to bring
            your vision to life. Every detail is crafted to capture your brand’s
            essence, creating a visually engaging and cohesive experience. From
            color palettes to typography, each element is chosen with purpose,
            ensuring a design that resonates with your audience and amplifies
            your message.
          </p>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div className="flex items-center justify-center w-1/3 h-auto">
          <Image
            src={image1}
            width={1000}
            height={1000}
            alt="project image"
            className=""
          />
        </div>
        <div className="flex justify-center w-1/3 h-auto">
          <Image
            src={image2}
            width={100}
            height={1000}
            alt="project image"
            className=""
          />
        </div>
        <div className="flex items-center w-1/3 h-auto ">
          <Image
            src={image3}
            width={400}
            height={1000}
            alt="project image"
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default FinalDesign;
