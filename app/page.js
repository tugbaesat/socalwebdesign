import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import DesktopNavbar from "./components/Navbar/DesktopNavbar";
import MobileNavbar from "./components/Navbar/MobileNavbar";
import WorksSection from "./components/Works/WorksSection";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row">
      <div>
        <MobileNavbar />
        <DesktopNavbar />
      </div>

      <div className="pt-36 md:pl-[300px] md:pt-0">
        <Hero />
        <Services />
        <WorksSection />
        <Footer />
        <Copyright />
      </div>
    </main>
  );
}
