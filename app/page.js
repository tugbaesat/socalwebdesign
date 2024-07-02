import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";

export default function Home() {
  return (
    <main className="flex flex-row">
      <Navbar />;
      <div className="pl-[300px]">
        <Hero />
        <Services />
        <Footer />
        <Copyright />
      </div>
    </main>
  );
}
