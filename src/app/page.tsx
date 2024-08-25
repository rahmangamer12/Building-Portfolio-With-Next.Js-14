"use client"
import Hero from "./components/ui/hero";
import { FloatingNav } from "@/app/components/ui/FloatingNav";
import Grid from "./components/Grid";
import RecentProject from "./components/RecentProject";
import { navItems } from "./data";
import Clients   from "./components/Clients";
import Experience from "./components/Experience";
import Approach from "./components/Approach";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
     <div className="max-w-7xl w-full">
     <FloatingNav navItems={navItems} />
      <Hero />
      <Grid/>
      <RecentProject/>
      <Clients/>
      <Experience />
      <Approach />
      <Footer />
     </div>
    </main>
  );
}
