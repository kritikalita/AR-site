import { motion } from "framer-motion";
import { X } from "lucide-react";

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3 }}
        // ✅ UPDATED: border-[#73b2f8]/30
        className="relative bg-gray-900 border border-[#73b2f8]/30 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto overflow-x-hidden shadow-2xl shadow-[#73b2f8]/10 flex flex-col md:flex-row"
      >
        
        <button 
          onClick={onClose}
          // ✅ UPDATED: hover:bg-[#73b2f8]
          className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-[#73b2f8] text-white p-2 rounded-full transition-colors border border-white/10"
        >
          <X size={20} />
        </button>

        <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-black">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover opacity-90"
            />
            
            <div className="absolute bottom-4 left-6 z-20 md:hidden">
                <h2 className="text-3xl font-bold text-white">{product.name}</h2>
                {/* ✅ UPDATED: text-[#73b2f8] */}
                <p className="text-[#73b2f8] font-mono text-sm">{product.type}</p>
            </div>
        </div>

        <div className="w-full md:w-1/2 p-8 flex flex-col">
            
            <div className="hidden md:block mb-6 border-b border-gray-800 pb-4">
                <h2 className="text-4xl font-bold text-white mb-2">{product.name}</h2>
                <div className="flex items-center gap-3">
                    {/* ✅ UPDATED: bg-[#73b2f8]/10 border-[#73b2f8]/30 text-[#73b2f8] */}
                    <span className="px-3 py-1 bg-[#73b2f8]/10 border border-[#73b2f8]/30 text-[#73b2f8] text-xs font-bold uppercase tracking-wider rounded">
                        Operational
                    </span>
                    <span className="text-gray-400 font-mono text-sm uppercase">
                        {product.type}
                    </span>
                </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                {product.desc}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
                {product.specs.map((spec, idx) => (
                    // ✅ UPDATED: hover:border-[#73b2f8]/30
                    <div key={idx} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50 hover:border-[#73b2f8]/30 transition-colors">
                        <div className="flex items-center gap-2 mb-2">
                             <img src={spec.icon} className="w-5 h-5 filter-blue opacity-80" alt="" />
                             <span className="text-xs text-gray-500 uppercase font-bold">{spec.label}</span>
                        </div>
                        <p className="text-xl font-bold text-white">{spec.value}</p>
                    </div>
                ))}
            </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductModal;