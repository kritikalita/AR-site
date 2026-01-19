import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProductSlider from "./components/ProductSlider";
import Capabilities from "./components/Capabilities";
import GroundSystems from "./components/GroundSystems";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import "./index.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    // ✅ UPDATED: Changed selection:bg-cyan-500 to selection:bg-blue-500
    <div className="bg-black min-h-screen text-white relative selection:bg-blue-500 selection:text-white cursor-auto md:cursor-none">
      
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <CustomCursor />
          
          <ParticleBackground />
          <div className="relative z-10">
            <Navbar />
            <Hero />
            <About />
            <ProductSlider />
            <Capabilities />
            <GroundSystems />
            <Footer />
          </div>
        </>
      )}

    </div>
  );
}

export default App;