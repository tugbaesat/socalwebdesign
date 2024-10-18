import React from 'react'

const WorksOverview = ({work}) => {
  return (
    <section className="flex flex-col items-center justify-center w-4/5 pt-16">
      <h2 className="text-6xl font-bold text-brand-primary">
        Overview
      </h2>
      <div className="flex flex-col justify-between w-full gap-4 py-2 text-left text-dark-primary-text font-navbar">
      <div className="flex justify-between">
        <p className="text-sm font-semibold md:text-xl">
          {/* Project Title: <br /> */}
          {work.title}
        </p>
        <p className="text-sm font-semibold md:text-xl">
          {/* Project Year: <br /> */}
          {work.year}
        </p>
        <div className="flex flex-col">
          {work.roles.map((role, index) => (
            <p className="text-sm font-semibold md:text-xl" key={index}>
              {role}
            </p>
          ))}
        </div>
      </div>
      <p>{work.description}</p>
 
    </div>
    </section>
  )
}

export default WorksOverview