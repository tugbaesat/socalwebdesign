import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className="flex flex-row">
      <Navbar />;
      <div className="pl-[300px]">
        <Hero />
        <Services />
      </div>
    </main>
  );
}
