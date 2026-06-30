import React, { useState } from 'react';
import { MapPin, Layers } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Luxury Modular Kitchen Suite",
    location: "Adyar, Chennai",
    material: "Sharon BWP Marine Ply & Merino Gloss Laminates",
    img: "/images/kitchen_showcase.png",
    category: "residential",
    desc: "100% waterproof joinery built with Sharon IS 710 marine plywood and custom acrylic white laminates."
  },
  {
    id: 2,
    title: "Executive Boardroom Wall Accents",
    location: "Guindy Industrial Estate, Chennai",
    material: "Natural Teak Veneer & CenturyPly Core",
    img: "/images/plywood_hero.png",
    category: "commercial",
    desc: "Acoustic teak wood panelling engineered for corporate offices with CenturyPly ViroKill fire-retardant backing."
  },
  {
    id: 3,
    title: "Seaside Villa Master Wardrobes",
    location: "ECR (East Coast Road), Chennai",
    material: "Greenply E0 Zero Emission & Almond Flush Doors",
    img: "/images/wood_swatches.png",
    category: "residential",
    desc: "Zero-formaldehyde emission interior wardrobes built for humid coastal environments."
  }
];

export default function ProjectGallery() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? projects : projects.filter(p => p.category === filter);

  return (
    <section className="py-24 border-b border-arch-border bg-arch-panel/40">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-arch-terracotta">Proven track record</p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-arch-dark tracking-tight">
              Supplied Architectural Projects
            </h2>
          </div>

          <div className="flex gap-2 bg-white p-1.5 rounded-xl border border-arch-border shadow-sm">
            <button 
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                filter === "all" ? "bg-arch-dark text-white" : "text-arch-muted hover:text-arch-dark"
              }`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setFilter("residential")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                filter === "residential" ? "bg-arch-dark text-white" : "text-arch-muted hover:text-arch-dark"
              }`}
            >
              Residential Villas
            </button>
            <button 
              onClick={() => setFilter("commercial")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                filter === "commercial" ? "bg-arch-dark text-white" : "text-arch-muted hover:text-arch-dark"
              }`}
            >
              Commercial Offices
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((p) => (
            <div 
              key={p.id} 
              className="group rounded-3xl border border-arch-border bg-white overflow-hidden hover:border-arch-terracotta hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 overflow-hidden bg-arch-panel">
                  <img 
                    src={p.img} 
                    alt={p.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-arch-dark/60 via-transparent to-transparent"></div>
                  <span className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-md border border-arch-border px-3 py-1 text-[11px] font-bold text-arch-dark shadow-sm">
                    <MapPin className="h-3 w-3 text-arch-terracotta" /> {p.location}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-display font-bold text-xl text-arch-dark group-hover:text-arch-terracotta transition-colors">{p.title}</h3>
                  <p className="text-xs text-arch-muted leading-relaxed">{p.desc}</p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="rounded-xl bg-arch-panel p-3 border border-arch-border text-[11px] text-arch-dark font-semibold flex items-center gap-2">
                  <Layers className="h-4 w-4 text-arch-terracotta flex-shrink-0" />
                  <span className="truncate">{p.material}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
