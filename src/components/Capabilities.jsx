import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import DecryptText from "./DecryptText";

const capabilities = [
  "Rapid Prototyping & Testing",
  "Full-Stack Manufacturing",
  "AI-Driven Autonomy",
  "Battlefield-Ready Hardware"
];

const Capabilities = () => {
  return (
    <div id="capabilities" className="bg-transparent py-16 md:py-24 text-white overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* ✅ UPDATED: border-[#73b2f8] */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6 border-l-4 border-[#73b2f8] pl-4 md:pl-6">
            <DecryptText text="Our Capabilities" />
          </h2>
          
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
            Our engineering model is anchored in rapid prototyping, rigorous testing, and full-stack manufacturing within India. We enable accelerated deployment timelines while maintaining sovereign control over critical technologies.
          </p>
          
          <ul className="space-y-4">
            {capabilities.map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                {/* ✅ UPDATED: text-[#73b2f8] */}
                <CheckCircle2 className="text-[#73b2f8] shrink-0" />
                <span className="text-lg md:text-xl font-medium">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group mt-8 lg:mt-0"
        >
          {/* ✅ UPDATED: gradient from-[#73b2f8] to-[#063677] */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#73b2f8] to-[#063677] rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          
          <div className="relative h-64 md:h-96 lg:h-auto w-full">
            <img 
              src="/images/products/Caps.webp" 
              alt="Indigenous Manufacturing" 
              className="w-full h-full object-cover group-hover:grayscale transition-all duration-700 scale-105 group-hover:scale-100 rounded-lg"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-4 md:p-6 rounded-b-lg border-t border-white/10">
              {/* ✅ UPDATED: text-[#73b2f8] */}
              <p className="text-[#73b2f8] font-bold uppercase tracking-wider text-xs md:text-sm">Indigenous Manufacturing</p>
              <p className="text-white text-sm md:text-base">Built for reliability, operated with precision.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Capabilities;