import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { DesktopNav } from "@/components/Nav";
import Program from "@/components/Program";
export default function Home() {
  return (
    <>
      <DesktopNav />
      <Hero />
      <Program />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
