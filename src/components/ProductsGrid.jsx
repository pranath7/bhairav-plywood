import React from 'react';
import { ArrowRight, Layers, Droplets, Shield, Box, Grid, Cpu, FileText, Sparkles, Home, DoorOpen, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const products = [
  { name: "Plywood", icon: Layers, img: "/images/doors_plywood.png" },
  { name: "Marine Plywood", icon: Droplets, img: "/images/doors_plywood.png" },
  { name: "BWP / BWR Plywood", icon: Shield, img: "/images/plywood_hero.png" },
  { name: "Block Boards", icon: Box, img: "/images/plywood_hero.png" },
  { name: "MDF", icon: Grid, img: "/images/wood_swatches.png" },
  { name: "HDHMR", icon: Cpu, img: "/images/wood_swatches.png" },
  { name: "Laminates", icon: FileText, img: "/images/veneers_laminates.png" },
  { name: "Veneers", icon: Sparkles, img: "/images/veneers_laminates.png" },
  { name: "PVC Boards", icon: Home, img: "/images/kitchen_showcase.png" },
  { name: "Doors", icon: DoorOpen, img: "/images/doors_plywood.png" },
  { name: "Almond Doors", icon: DoorOpen, img: "/images/doors_plywood.png" },
  { name: "WPC Boards", icon: Box, img: "/images/kitchen_showcase.png" },
];

export default function ProductsGrid() {
  return (
    <section id="products" className="py-24 pt-44 bg-[#f6f4f0] border-b border-zinc-200">
      <div className="container mx-auto px-4 sm:px-8">
        
        {/* Section Title Divider */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-0.5 w-16 bg-amber-700/40"></div>
          <h3 className="font-display font-black text-2xl text-zinc-900 tracking-widest uppercase">OUR PRODUCTS</h3>
          <div className="h-0.5 w-16 bg-amber-700/40"></div>
        </div>

        {/* 12 Product Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {products.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl bg-white border-2 border-zinc-200/90 shadow-sm hover:shadow-xl hover:border-amber-500 transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer p-4 text-left relative"
              >
                {/* Product 3D Material Preview Image */}
                <div className="h-28 w-full rounded-xl overflow-hidden bg-zinc-100 mb-3 relative">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                </div>

                {/* Footer Icon Badge & Name */}
                <div className="flex items-center gap-2.5 pt-1">
                  <div className="h-8 w-8 rounded-lg bg-amber-500/15 text-amber-800 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-colors flex-shrink-0">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h4 className="font-extrabold text-xs text-zinc-900 group-hover:text-amber-700 transition-colors truncate">
                    {item.name}
                  </h4>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* High-contrast CTA Button */}
        <div className="mt-14 text-center">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#contact-us"
            className="inline-flex items-center gap-3 rounded-2xl bg-amber-600 hover:bg-amber-700 px-9 py-4 text-sm font-black text-white border-2 border-amber-400 shadow-xl transition-all"
          >
            View All Products <ArrowRight className="h-4 w-4 text-white stroke-[3]" />
          </motion.a>
        </div>

      </div>
    </section>
  );
}
