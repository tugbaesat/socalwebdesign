import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="flex flex-row">
      <Navbar />;
      <div className="pl-[300px]">
        <Hero />
      </div>
    </main>
  );
}
