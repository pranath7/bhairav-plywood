import React, { useState } from 'react';
import { Sparkles, ZoomIn, X } from 'lucide-react';
import { motion } from 'framer-motion';

const galleryItems = [
  { id: 1, title: "Modular Kitchen Showcase", category: "Kitchen", img: "/images/kitchen_showcase.png" },
  { id: 2, title: "Teak Wood Texture Swatches", category: "Materials", img: "/images/wood_swatches.png" },
  { id: 3, title: "Architectural Plywood Stack", category: "Stock", img: "/images/doors_plywood.png" },
  { id: 4, title: "Master Wardrobe Joinery", category: "Wardrobe", img: "/images/project_wardrobe.png" },
  { id: 5, title: "Corporate Office Wall Slatting", category: "Commercial", img: "/images/project_office.png" },
  { id: 6, title: "Luxury Bedroom Interior", category: "Living", img: "/images/project_living.png" },
];

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImg, setSelectedImg] = useState(null);

  const filters = ["All", "Kitchen", "Materials", "Stock", "Wardrobe", "Commercial"];

  const filtered = activeFilter === "All" ? galleryItems : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-[#f6f4f0] border-b border-zinc-200">
      <div className="container mx-auto px-4 sm:px-8">
        
        {/* Section Title Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-0.5 w-16 bg-amber-700/40"></div>
          <h3 className="font-display font-black text-2xl text-zinc-900 tracking-widest uppercase">PROJECT GALLERY</h3>
          <div className="h-0.5 w-16 bg-amber-700/40"></div>
        </div>

        <p className="text-sm text-zinc-600 text-center max-w-xl mx-auto mb-10">
          Explore our extensive visual gallery of supplied materials, luxury modular kitchens, wardrobes, and commercial installations across Chennai.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === f
                  ? "bg-amber-600 text-white shadow-md"
                  : "bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-100"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Gallery Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(item => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedImg(item)}
              className="group rounded-2xl bg-white border border-zinc-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer relative"
            >
              <div className="h-64 w-full overflow-hidden relative">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="h-12 w-12 rounded-full bg-amber-500 text-zinc-950 flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <ZoomIn className="h-6 w-6" />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-zinc-900">{item.title}</h4>
                  <span className="text-[11px] font-semibold text-amber-700">{item.category}</span>
                </div>
                <Sparkles className="h-4 w-4 text-amber-500" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-3xl w-full rounded-3xl overflow-hidden bg-zinc-900 p-3 shadow-2xl space-y-3">
            <button 
              onClick={() => setSelectedImg(null)}
              className="absolute top-5 right-5 z-10 h-10 w-10 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-amber-500 hover:text-zinc-950 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            <img src={selectedImg.img} alt={selectedImg.title} className="w-full h-[450px] object-cover rounded-2xl" />

            <div className="p-3 text-left">
              <h3 className="font-display font-extrabold text-xl text-white">{selectedImg.title}</h3>
              <p className="text-xs text-amber-400 font-semibold">{selectedImg.category} Installation by Bhairav Plywood Chennai</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
