import About from "@/components/About";
import Hero from "@/components/Hero";
import { DesktopNav } from "@/components/Nav";
// import Prices from "@/components/Prices";

import Program from "@/components/Program";
export default function Home() {
  return (
    <>
      <DesktopNav />
      <Hero />
      <Program />
      <About />
      {/* <Prices /> */}
    </>
  );
}
