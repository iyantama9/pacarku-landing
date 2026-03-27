import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import IntroText from "./components/IntroText"; // Merged into Hero scroll timeline
import Features from "./components/Features";
import CallToAction from "./components/CallToAction";
import AnimatedGrid from "./components/AnimatedGrid";
import Footer from "./components/Footer";

function App() {
  // Initialize Lenis exactly once
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);
  return (
    <>
      <AnimatedGrid />
      <Navbar />
      <main>
        <Hero />
        {/* <IntroText /> — Content merged into Hero scroll timeline */}
        <Features />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

export default App;
