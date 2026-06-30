import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ShieldCheck, MessageSquare, ArrowRight, Layers, Droplets, Home, Utensils, Bed, DoorOpen, Tv } from 'lucide-react';
import { motion } from 'framer-motion';

const useCases = [
  {
    id: "kitchen",
    title: "Modular Kitchen Cabinets",
    icon: Utensils,
    recGrade: "Sharon BWP Marine Plywood IS 710 / CenturyPly Club Prime",
    recThickness: "18 mm (Cabinets) & 6 mm (Backing)",
    waterResistance: "100% Boiling Water Proof (BWP)",
    termiteRating: "Glue Line Poisoning (GLP) Certified",
    warranty: "30 Years Factory Guarantee",
    desc: "Kitchen environments face extreme steam, water exposure, and heavy loads. BWP grade 710 marine plywood ensures zero swelling or ply delamination over decades."
  },
  {
    id: "wardrobe",
    title: "Bedroom Wardrobes & Beds",
    icon: Bed,
    recGrade: "Greenply E0 Zero Emission / Kitply BWR Commercial",
    recThickness: "18 mm (Shutters) & 12 mm (Shelves)",
    waterResistance: "Boiling Water Resistant (BWR)",
    termiteRating: "Borer & Termite Protected",
    warranty: "25 Years Guarantee",
    desc: "Requires high screw-holding capacity and zero harmful chemical emissions. E0 grade ensures healthy air quality inside bedrooms."
  },
  {
    id: "doors",
    title: "Main Doors & Bedroom Entry",
    icon: DoorOpen,
    recGrade: "Almond Solid Core Pinewood Flush Door",
    recThickness: "30 mm to 35 mm Heavy Solid Core",
    waterResistance: "Moisture & Warp Resistant Core",
    termiteRating: "Chemically Seasoned Timber",
    warranty: "20 Years Guarantee",
    desc: "Solid pinewood core flush doors provide maximum acoustic isolation, structural stability against humidity shifts, and elegant veneer finish."
  },
  {
    id: "tv-unit",
    title: "TV Units & Living Room Walls",
    icon: Tv,
    recGrade: "Royal Teak Architectural Veneer + 12mm Commercial Ply",
    recThickness: "12 mm (Panelling) & 1.0 mm (Veneer Flitch)",
    waterResistance: "Standard Interior Moisture Proof",
    termiteRating: "Termite & Borer Treated",
    warranty: " lifetime aesthetic durability",
    desc: "Combines high tensile backing plywood with authentic natural wood veneers for stunning feature walls and media consoles."
  }
];

export default function MaterialAdvisor() {
  const [activeUseCase, setActiveUseCase] = useState(useCases[0]);

  return (
    <section id="advisor" className="py-24 border-b border-zinc-200 bg-gradient-to-b from-[#f6f4f0] via-white to-[#f6f4f0]">
      <div className="container mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-600/30 bg-amber-500/15 px-4 py-1.5 text-xs font-extrabold text-amber-800 uppercase tracking-widest shadow-sm">
            <Sparkles className="h-4 w-4 text-amber-600" /> Interactive Wood Advisor
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Which Plywood Grade Does Your Project Need?
          </h2>
          <p className="text-sm text-zinc-600 font-medium">Select your intended interior joinery project below to view recommended structural grades, thicknesses, and factory warranties.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Use Case Selector Buttons */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <h3 className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span> Select Your Joinery Project
            </h3>

            {useCases.map((uc) => {
              const Icon = uc.icon;
              const isActive = activeUseCase.id === uc.id;
              return (
                <motion.button
                  key={uc.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveUseCase(uc)}
                  className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between shadow-sm ${
                    isActive
                      ? "border-amber-600 bg-white shadow-xl shadow-amber-950/10"
                      : "border-zinc-200/90 bg-white hover:border-zinc-300 hover:bg-zinc-50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`h-12 w-12 rounded-xl flex items-center justify-center transition-all ${
                      isActive ? "bg-amber-600 text-white shadow-md" : "bg-zinc-100 text-zinc-600"
                    }`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-base text-zinc-900">{uc.title}</h4>
                      <p className="text-xs font-semibold text-amber-700">Click for Advisor Recommendation</p>
                    </div>
                  </div>

                  <ArrowRight className={`h-5 w-5 transition-transform ${isActive ? "text-amber-600 translate-x-1" : "text-zinc-300"}`} />
                </motion.button>
              );
            })}
          </div>

          {/* Right Recommendation Card */}
          <div className="lg:col-span-7 flex flex-col">
            <motion.div 
              key={activeUseCase.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl border-2 border-zinc-200 bg-white p-6 sm:p-8 shadow-2xl flex-grow space-y-6 text-left relative overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 pb-4">
                  <div>
                    <span className="text-[10px] font-extrabold text-amber-800 bg-amber-500/15 px-3 py-1 rounded-full uppercase tracking-wider">
                      Architectural Recommendation
                    </span>
                    <h3 className="font-display font-extrabold text-2xl text-zinc-900 mt-2">{activeUseCase.title}</h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
                    <ShieldCheck className="h-4 w-4" /> {activeUseCase.warranty}
                  </div>
                </div>

                <p className="text-sm text-zinc-700 leading-relaxed font-normal">{activeUseCase.desc}</p>

                {/* Technical Specifications Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-[#f6f4f0] border border-zinc-200 space-y-1">
                    <span className="text-[10px] font-extrabold text-zinc-500 uppercase tracking-wider block">Recommended Material Grade</span>
                    <strong className="text-xs font-bold text-zinc-900 block">{activeUseCase.recGrade}</strong>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#f6f4f0] border border-zinc-200 space-y-1">
                    <span className="text-[10px] font-extrabold text-zinc-500 uppercase tracking-wider block">Ideal Sheet Thickness</span>
                    <strong className="text-xs font-bold text-zinc-900 block">{activeUseCase.recThickness}</strong>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#f6f4f0] border border-zinc-200 space-y-1">
                    <span className="text-[10px] font-extrabold text-zinc-500 uppercase tracking-wider block">Water Resistance Standard</span>
                    <strong className="text-xs font-bold text-amber-800 block">{activeUseCase.waterResistance}</strong>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#f6f4f0] border border-zinc-200 space-y-1">
                    <span className="text-[10px] font-extrabold text-zinc-500 uppercase tracking-wider block">Termite Protection</span>
                    <strong className="text-xs font-bold text-emerald-800 block">{activeUseCase.termiteRating}</strong>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs font-bold text-zinc-500">Need expert material consultation? Call Deepak Bansal</span>
                <a 
                  href={`https://wa.me/919940177773?text=Hello%20Bhairav%20Plywood,%20I%20need%20material%20for%20${encodeURIComponent(activeUseCase.title)}.%20Please%20guide%20me.`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-6 py-3 text-xs font-extrabold text-white shadow-lg shadow-emerald-900/20 transition-all active:scale-95 w-full sm:w-auto justify-center"
                >
                  <MessageSquare className="h-4 w-4" /> Consult on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
