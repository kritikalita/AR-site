import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const terminalLines = [
  "> Initializing Autonomous Core...",
  "> Calibrating Multi-Modal Sensor Fusion...",
  "> Optimizing Real-Time Path Planning...",
  "> Syncing Edge-Compute Telemetry...",
  "> SYSTEM OPERATIONAL."
];

const Preloader = ({ onComplete }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev >= terminalLines.length - 1) {
          clearInterval(interval);
          setTimeout(onComplete, 1000); 
          return prev;
        }
        return prev + 1;
      });
    }, 400);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center font-mono"
      exit={{ opacity: 0, y: -50 }} 
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="w-80 md:w-96">
        <div className="h-1 w-full bg-gray-800 mb-4 rounded overflow-hidden">
          <motion.div 
            // ✅ UPDATED: Hardcoded gradient from dark to light blue
            className="h-full bg-gradient-to-r from-[#063677] to-[#73b2f8] shadow-[0_0_10px_#73b2f8]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "linear" }}
          />
        </div>

        <div className="text-left space-y-2 h-32">
          {terminalLines.slice(0, index + 1).map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={`text-sm md:text-base ${
                i === terminalLines.length - 1 
                  // ✅ UPDATED: text-[#73b2f8]
                  ? "text-[#73b2f8] font-bold animate-pulse" 
                  : "text-gray-400"
              }`}
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;