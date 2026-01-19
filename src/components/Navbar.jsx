import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "About Us", href: "#about" },
    { label: "UAS Systems", href: "#uas" },
    { label: "Ground Systems", href: "#ground" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    // ✅ UPDATED: border-[#73b2f8]/20
    <nav className="bg-black/50 backdrop-blur-md text-white fixed w-full z-50 top-0 border-b border-[#73b2f8]/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <a href="#" className="flex items-center">
          <img 
            src="/images/products/logo.png" 
            alt="Arrobot Logo" 
            className="h-10 md:h-12 w-auto object-contain scale-[2.5] origin-left ml-1 mr-12" 
          />
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              // ✅ UPDATED: hover:text-[#73b2f8]
              className="text-sm uppercase font-medium tracking-wider hover:text-[#73b2f8] transition-colors relative group"
            >
              {item.label}
              {/* ✅ UPDATED: bg-[#73b2f8] */}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#73b2f8] transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile/Tablet Menu Button */}
        <button
          // ✅ UPDATED: hover:text-[#73b2f8]
          className="lg:hidden text-white hover:text-[#73b2f8] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile/Tablet Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            // ✅ UPDATED: border-[#73b2f8]/20
            className="lg:hidden absolute top-full left-0 w-full bg-black/95 border-b border-[#73b2f8]/20 py-4 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex flex-col space-y-4 px-6">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  // ✅ UPDATED: hover:text-[#73b2f8]
                  className="text-lg font-medium hover:text-[#73b2f8] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;