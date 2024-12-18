"use client";
import React from "react";
import { useParams } from "next/navigation";

import MobileNavbar from "@/app/components/Navbar/MobileNavbar";
import DesktopNavbar from "@/app/components/Navbar/DesktopNavbar";
import Footer from "@/app/components/Home/Footer";
import Copyright from "@/app/components/Home/Copyright";
import WorksHero from "@/app/components/Works/WorksHero";
import WorksOverview from "@/app/components/Works/WorksOverview";
import { worksData } from "../components/Works/WorksData";
import PreliminaryDesign from "../components/Works/PreliminaryDesign";
import FinalDesign from "../components/Works/FinalDesign";
const WorkPage = () => {
  // const { id } = useParams();
  // const project = worksData.find((p) => p.id === id);

  // if (!project) {
  //   return <p>Project not found!</p>;
  // }
  return (
    <main className="flex flex-col md:flex-row">
      <div>
        <MobileNavbar />
        <DesktopNavbar />
      </div>
      {worksData.map((project) => (
        <div
          key={project.id}
          className="pt-36 md:pl-[300px] md:pt-0 flex flex-col items-center justify-center gap-10 "
        >
          <WorksHero title={project.title} />
          <WorksOverview project={project} />
          <PreliminaryDesign />
          <FinalDesign />
          <Footer />
          <Copyright />
        </div>
      ))}
    </main>
  );
};

export default WorkPage;
