import React, { useState } from "react";
import { motion } from "framer-motion";

const TargetInput = ({ type = "text", placeholder, className }) => {
  const [isFocused, setIsFocused] = useState(false);

  // ✅ UPDATED: border-[#73b2f8] for all brackets
  return (
    <div className={`relative ${className}`}>
      <input
        type={type}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full bg-gray-900/50 text-white px-4 py-3 outline-none border-b border-gray-700 focus:border-transparent transition-colors"
      />

      <motion.div
        animate={isFocused ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -10, y: -10 }}
        className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#73b2f8] pointer-events-none"
      />

      <motion.div
        animate={isFocused ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 10, y: -10 }}
        className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#73b2f8] pointer-events-none"
      />

      <motion.div
        animate={isFocused ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -10, y: 10 }}
        className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#73b2f8] pointer-events-none"
      />

      <motion.div
        animate={isFocused ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 10, y: 10 }}
        className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#73b2f8] pointer-events-none"
      />
    </div>
  );
};

export default TargetInput;