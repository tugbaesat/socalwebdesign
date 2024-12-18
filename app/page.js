import Hero from "./components/Home/Hero";
import Services from "./components/Home/Services";
import Footer from "./components/Home/Footer";
import Copyright from "./components/Home/Copyright";
import DesktopNavbar from "./components/Navbar/DesktopNavbar";
import MobileNavbar from "./components/Navbar/MobileNavbar";
import WorksSection from "./components/Home/WorksSection";
import Benefits from "./components/Home/Benefits";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row">
      <div>
        <MobileNavbar />
        <DesktopNavbar />
      </div>

      <div className="pt-36 md:pl-[300px] md:pt-0 w-full">
        <Hero />
        <Services />
        <Benefits />
        <WorksSection />
        <Footer />
        <Copyright />
      </div>
    </main>
  );
}
