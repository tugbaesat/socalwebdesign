"use client";
import React from "react";
import Image from "next/image";
import { worksData } from "./Works";
import { useRouter } from "next/navigation";

const WorksSection = () => {
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/works/${id}`);
  };

  return (
    <section
      id="works"
      className="flex flex-col items-center justify-center gap-6 py-20 bg-light-bg"
    >
      <h2 className="text-6xl font-bold text-brand-primary">Works</h2>
      <ul>
        {worksData.map((work) => (
          <li
            className="relative overflow-hidden cursor-pointer group"
            key={work.id}
            onClick={() => handleClick(work.id)}
          >
            <Image
              src={work.image}
              width={1000}
              height={200}
              alt="project image"
              className=""
            />
            <div className="absolute bottom-0 left-0 flex flex-col justify-between w-full gap-4 px-10 py-2 text-left text-white bg-black bg-opacity-50 font-navbar transition-all duration-300 ease-in-out lg:group-hover:translate-y-0 lg:translate-y-[60%] ">
              <div className="flex justify-between">
                <p className="text-sm font-semibold md:text-xl">{work.title}</p>
                <p className="text-sm font-semibold md:text-xl">{work.year}</p>
                <div className="flex flex-col">
                  {work.roles.map((role, index) => (
                    <p className="text-sm font-semibold md:text-xl" key={index}>
                      {role}
                    </p>
                  ))}
                </div>
              </div>
              <p>{work.description}</p>
              <div className="w-24 border-b-2 cursor-pointer hover:text-neutral-800 dark:hover:text-neutral-400 border-neutral-600 hover:border-neutral-800 dark:border-neutral-200 dark:hover:border-neutral-400">
                <p onClick={() => handleClick(work.id)}>See more &rarr;</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WorksSection;
