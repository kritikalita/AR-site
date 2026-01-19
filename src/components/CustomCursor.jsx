import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false); 

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsVisible(false);
      return; 
    }
    setIsVisible(true);

    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === "BUTTON" || e.target.tagName === "A" || e.target.closest(".cursor-pointer")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        // ✅ UPDATED: bg-[#73b2f8]
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#73b2f8] rounded-full pointer-events-none z-[9999]"
        animate={{ x: mousePosition.x, y: mousePosition.y }}
        transition={{ duration: 0 }}
      />

      <motion.div
        // ✅ UPDATED: border-[#73b2f8]
        className="fixed top-0 left-0 border border-[#73b2f8] rounded-full pointer-events-none z-[9999] flex items-center justify-center backdrop-blur-[1px]"
        animate={{
          x: mousePosition.x - 16, 
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1, 
          // ✅ UPDATED: rgba(115, 178, 248) (Hex #73b2f8 in decimal)
          borderColor: isHovering ? "rgba(115, 178, 248, 0.8)" : "rgba(115, 178, 248, 0.3)"
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
        style={{ width: 32, height: 32 }}
      >
        {/* ✅ UPDATED: bg-[#73b2f8]/20 */}
        <div className="absolute w-full h-[1px] bg-[#73b2f8]/20"></div>
        <div className="absolute h-full w-[1px] bg-[#73b2f8]/20"></div>
      </motion.div>
    </>
  );
};

export default CustomCursor;