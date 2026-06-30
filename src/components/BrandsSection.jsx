import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  { name: "Kitply", style: "font-black text-[#1d4ed8] text-2xl" },
  { name: "sharon PLYWOODS", style: "font-bold text-[#047857] text-lg tracking-tight flex items-center gap-1" },
  { name: "Greenply", style: "font-extrabold italic text-[#16a34a] text-2xl" },
  { name: "CENTURYPLY", style: "font-black text-[#dc2626] text-xl tracking-wider" },
  { name: "merino", style: "font-bold text-[#b91c1c] text-2xl lowercase font-serif" },
  { name: "Almond Doors", style: "font-semibold text-[#b45309] text-lg leading-tight" },
  { name: "FEVICOL", style: "font-black text-[#1e40af] text-2xl tracking-widest" },
  { name: "VIRAT", style: "font-black text-[#18181b] text-2xl tracking-widest" },
  { name: "Aurex Gold", img: "/images/aurex-gold.png", isImage: true },
  { name: "Aurex Platinum", img: "/images/aurex-platinum.jpg", isImage: true }
];

export default function BrandsSection() {
  return (
    <section id="brands" className="py-20 bg-white border-b border-zinc-200">
      <div className="container mx-auto px-4 sm:px-8">
        
        {/* Section Title Divider */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <div className="h-0.5 w-16 bg-amber-700/40"></div>
          <h3 className="font-display font-black text-2xl text-zinc-900 tracking-widest uppercase">OUR BRANDS</h3>
          <div className="h-0.5 w-16 bg-amber-700/40"></div>
        </div>

        {/* 10 Clean Boxed Brand Logo Cards with Authentic Colors / Image support */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {brands.map((b, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              whileHover={{ scale: 1.06, borderColor: "#c88a38" }}
              className="h-24 rounded-xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center p-3 text-center transition-all duration-300 cursor-pointer group"
            >
              {b.isImage ? (
                <img 
                  src={b.img} 
                  alt={b.name} 
                  className="h-full max-h-16 object-contain group-hover:scale-105 transition-transform duration-300" 
                />
              ) : (
                <span className={`${b.style} group-hover:scale-105 transition-transform duration-300`}>{b.name}</span>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
