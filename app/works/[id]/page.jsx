"use client";
import React from "react";
import { useParams } from "next/navigation";
import { worksData } from "@/app/components/Works/Works";
import MobileNavbar from "@/app/components/Navbar/MobileNavbar";
import DesktopNavbar from "@/app/components/Navbar/DesktopNavbar";
import Footer from "@/app/components/Footer";
import Copyright from "@/app/components/Copyright";
import WorksHero from "@/app/components/Works/WorksHero";
import WorksOverview from "@/app/components/Works/WorksOverview";

const WorksPage = () => {
  const { id } = useParams();
  const work = worksData.find((p) => p.id === id);

  if (!work) {
    return <p>Work not found!</p>;
  }
  return (
    <main className="flex flex-col md:flex-row">
      <div>
        <MobileNavbar />
        <DesktopNavbar />
      </div>

      <div className="pt-36 md:pl-[300px] md:pt-0 flex flex-col items-center justify-center">
        <WorksHero work={work} />
        <WorksOverview work={work} />
        {/* <Hero />
        <Services />
        <WorksSection /> */}
        <Footer />
        <Copyright />
      </div>
    </main>
  );
};

export default WorksPage;
