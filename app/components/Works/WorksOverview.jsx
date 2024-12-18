import React from "react";

const WorksOverview = ({project}) => {
  return (
    <section className="flex flex-col items-center justify-center px-20 pt-16">
      <h2 className="text-6xl font-bold text-brand-primary">Overview</h2>
      <div className="flex flex-col justify-between w-full gap-4 py-2 text-left ">
        <div className="flex justify-between text-dark-primary-text font-navbar">
          <p className="text-sm font-semibold md:text-xl">
            {/* Project Title: <br /> */}
            {project.title}
          </p>
          <p className="text-sm font-semibold md:text-xl">
            {/* Project Year: <br /> */}
            {project.year}
          </p>
          {project.roles.map((role, index) => ( 
          <div key={index} className="flex flex-col">
            <p className="text-sm font-semibold md:text-xl">{role}</p>
   
          </div>
          ))}
        </div>
        <p className="text-xl text-justify">
         {project.description}
        </p>
      </div>
    </section>
  );
};

export default WorksOverview;
