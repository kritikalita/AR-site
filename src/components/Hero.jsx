import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import DecryptText from "./DecryptText";

const Hero = () => {
  return (
    <div
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 🎥 VIDEO BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          {/* 1. Safari/iPhone will try this first */}
          <source
            src="/images/products/heroVid.mp4"
            type="video/mp4"
          />

          {/* 2. Chrome/Firefox will use this (higher quality, smaller size) */}
          <source
            src="/images/products/heroVid.webm"
            type="video/webm"
          />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 text-center px-6 md:px-12 lg:px-20 max-w-5xl mx-auto mt-16">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* ✅ UPDATED: .text-gradient class handles the colors now */}
          <p className="text-gradient font-bold tracking-widest mb-4 uppercase text-xs md:text-sm">
            Indigenous Deep-Tech Company
          </p>

          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            <DecryptText text="Advancing Mission Critical" className="block" />
            <span className="text-gray-400">
              <DecryptText text="Robotics & Systems" className="block" />
            </span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-base md:text-lg lg:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          We design and manufacture high-reliability platforms that operate in
          the most demanding environments for India's strategic sectors.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {/* ✅ UPDATED: hover:border-[#73b2f8] hover:bg-[#73b2f8]/10 */}
          <button className="group bg-transparent border border-white/30 hover:border-[#73b2f8] hover:bg-[#73b2f8]/10 text-white px-6 py-3 md:px-8 md:py-4 rounded-full transition-all duration-300 flex items-center mx-auto gap-2 text-sm md:text-base">
            Explore Systems
            <ArrowRight
              className="group-hover:translate-x-1 transition-transform w-4 h-4 md:w-5 md:h-5"
            />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;