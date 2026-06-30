import React, { useState } from 'react';
import { Sparkles, Check, Info, MessageSquare, ShieldCheck, Layers, Award, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';

const swatches = [
  {
    id: "teak",
    name: "Royal Teak Architectural Veneer",
    brand: "Natural Teak Collection",
    img: "/images/wood_swatches.png",
    specs: "0.55mm Natural Wood Flitch, Phenolic Backing",
    desc: "Exquisite natural teak grain pattern with deep golden hues. Perfect for luxury villa panelling, executive boardroom tables, and bespoke cabinetry.",
    useCase: "Luxury Furniture & Wall Accents",
    color: "from-amber-600 to-amber-800",
    textColor: "text-amber-700",
    borderColor: "border-amber-500",
    bgColor: "bg-amber-500/10",
    badgeColor: "bg-amber-600 text-white",
    icon: Sparkles
  },
  {
    id: "marine",
    name: "Sharon BWP Marine Core 710",
    brand: "Sharon Plywoods",
    img: "/images/doors_plywood.png",
    specs: "IS 710 Certified, Undiluted Phenol Resin, GLP Treated",
    desc: "100% boiling water proof marine plywood built with high density hardwood timber. Designed for extreme moisture resistance in coastal environments.",
    useCase: "Modular Kitchens & Bathroom Joinery",
    color: "from-emerald-600 to-teal-800",
    textColor: "text-emerald-700",
    borderColor: "border-emerald-500",
    bgColor: "bg-emerald-500/10",
    badgeColor: "bg-emerald-700 text-white",
    icon: Droplets
  },
  {
    id: "laminate",
    name: "Merino Super Matt Charcoal Sheet",
    brand: "Merino Laminates",
    img: "/images/veneers_laminates.png",
    specs: "1.0mm Anti-Fingerprint Surface, Scratch Proof",
    desc: "Ultra-contemporary matte laminate with thermal healing capabilities. Resists fingerprint smudges and harsh domestic chemicals.",
    useCase: "Modern Cabinetry & Wardrobe Doors",
    color: "from-rose-600 to-red-800",
    textColor: "text-rose-700",
    borderColor: "border-rose-500",
    bgColor: "bg-rose-500/10",
    badgeColor: "bg-rose-700 text-white",
    icon: Layers
  },
  {
    id: "door",
    name: "Almond Solid Core Pinewood Door",
    brand: "Almond Doors",
    img: "/images/kitchen_showcase.png",
    specs: "Kiln-Seasoned Pine Core, Dual Teak Veneer Face",
    desc: "Heavy structural timber flush door engineered with zero hollow core gaps. Offers exceptional acoustic dampening and fire resistance.",
    useCase: "Main Entrance & Bedroom Doors",
    color: "from-amber-700 to-orange-900",
    textColor: "text-amber-800",
    borderColor: "border-amber-600",
    bgColor: "bg-amber-600/10",
    badgeColor: "bg-amber-800 text-white",
    icon: Award
  }
];

export default function MaterialStudio() {
  const [activeSwatch, setActiveSwatch] = useState(swatches[0]);

  return (
    <section id="studio" className="py-24 border-b border-zinc-200 bg-gradient-to-b from-white via-[#fcfbf9] to-[#f6f4f0]">
      <div className="container mx-auto px-4 sm:px-8">
        
        {/* Section Title Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-600/30 bg-amber-500/15 px-4 py-1.5 text-xs font-extrabold text-amber-800 uppercase tracking-widest shadow-sm">
            <Sparkles className="h-4 w-4 text-amber-600" /> Interactive Texture Studio
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Explore Material Finish & Technical Cores
          </h2>
          <p className="text-sm text-zinc-600 font-medium">Select a swatch below to inspect material grain texture, structural properties, and recommended architectural applications.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Swatch Selector List with Rich Vibrant Colors */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <h3 className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span> Click Swatch Card To Inspect
            </h3>
            
            {swatches.map((s) => {
              const Icon = s.icon;
              const isActive = activeSwatch.id === s.id;
              return (
                <motion.button
                  key={s.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveSwatch(s)}
                  className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between shadow-sm ${
                    isActive
                      ? `${s.borderColor} bg-white shadow-xl shadow-amber-900/10`
                      : "border-zinc-200/90 bg-white hover:border-zinc-300 hover:bg-zinc-50"
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full ${s.badgeColor} uppercase tracking-wider shadow-sm`}>
                        {s.brand}
                      </span>
                    </div>
                    <h4 className="font-display font-bold text-base text-zinc-900 leading-snug">{s.name}</h4>
                    <p className={`text-xs font-bold ${s.textColor} flex items-center gap-1.5`}>
                      <Icon className="h-3.5 w-3.5" /> {s.useCase}
                    </p>
                  </div>

                  <div className={`flex h-9 w-9 items-center justify-center rounded-xl border-2 transition-all flex-shrink-0 ${
                    isActive ? `${s.borderColor} bg-gradient-to-br ${s.color} text-white shadow-md` : "border-zinc-200 text-zinc-300 bg-zinc-50"
                  }`}>
                    <Check className="h-5 w-5 stroke-[3]" />
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Active Swatch Display Panel */}
          <div className="lg:col-span-7 flex flex-col">
            <motion.div 
              key={activeSwatch.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl border-2 border-zinc-200 bg-white p-6 sm:p-8 shadow-2xl flex-grow space-y-6 text-left relative overflow-hidden"
            >
              {/* Vibrant Top Color Accent Bar */}
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${activeSwatch.color}`}></div>

              <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-zinc-200 shadow-inner group">
                <img 
                  src={activeSwatch.img} 
                  alt={activeSwatch.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                
                <span className={`absolute top-4 left-4 rounded-xl ${activeSwatch.badgeColor} px-4 py-1.5 text-xs font-extrabold shadow-lg`}>
                  {activeSwatch.brand}
                </span>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block mb-1">Architectural Swatch</span>
                  <h4 className="font-display font-extrabold text-2xl drop-shadow-md">{activeSwatch.name}</h4>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-100 pb-3">
                  <span className={`text-xs font-black uppercase tracking-wider ${activeSwatch.textColor} bg-zinc-100 px-3 py-1 rounded-lg border border-zinc-200`}>
                    Target Application: {activeSwatch.useCase}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                    <ShieldCheck className="h-4 w-4" /> Stocked in Chennai
                  </span>
                </div>

                <p className="text-sm text-zinc-700 leading-relaxed font-normal">{activeSwatch.desc}</p>

                <div className={`rounded-2xl ${activeSwatch.bgColor} p-4 border ${activeSwatch.borderColor} flex items-start gap-3.5 shadow-sm`}>
                  <Info className={`h-5 w-5 ${activeSwatch.textColor} flex-shrink-0 mt-0.5`} />
                  <div className="space-y-1 text-xs">
                    <strong className="text-zinc-900 font-extrabold uppercase tracking-wider block">Technical Specification & Core Standard:</strong>
                    <p className="text-zinc-800 font-semibold">{activeSwatch.specs}</p>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs font-bold text-zinc-500">Fast Local Dispatch Across Tamil Nadu</span>
                  <a 
                    href={`https://wa.me/919940177773?text=Hello%20Bhairav%20Plywood,%20I%20inspected%20the%20${encodeURIComponent(activeSwatch.name)}%20on%20your%20website.%20Please%20send%20sample%20details.`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-6 py-3 text-xs font-extrabold text-white shadow-lg shadow-emerald-900/20 transition-all active:scale-95 w-full sm:w-auto justify-center"
                  >
                    <MessageSquare className="h-4 w-4" /> Request Swatch Sample
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
