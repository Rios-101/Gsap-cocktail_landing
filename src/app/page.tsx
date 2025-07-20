import About from "@/components/General/About";
import Cocktails from "@/components/General/Cocktails";
import Hero from "@/components/General/Hero";
import Navbar from "@/components/General/Navbar";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";


gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
    </main>
  );
}
