import React from 'react';
import { CheckCircle } from 'lucide-react';

const brands = [
  { name: "Kitply", type: "Plywood & Blockboards", desc: "India's pioneer plywood brand known for durability and core strength.", tag: "Wholesale Partner" },
  { name: "Sharon Plywoods", type: "BWP Grade Marine Ply", desc: "Heavy marine grade waterproof plywood engineered for modular kitchens.", tag: "Marine Specialist" },
  { name: "Greenply", type: "Zero-Emission Plywood", desc: "Certified zero-formaldehyde emissions for healthy indoor environments.", tag: "Eco-Certified" },
  { name: "CenturyPly", type: "ViroKill & Fire Retardant", desc: "Patented nanotech protection killing 99.99% microbes on contact.", tag: "ViroKill Tech" },
  { name: "Merino", type: "High-Pressure Laminates", desc: "100+ architectural laminates, acrylics, and textured surfaces.", tag: "Surface Design" },
  { name: "Almond Doors", type: "Designer Flush Doors", desc: "Solid timber core flush and moulded doors for elegant entryways.", tag: "Solid Timber" },
  { name: "Fevicol", type: "Woodworking Adhesives", desc: "Fevicol SH, HeatX, and Marine adhesives for high-bond strength.", tag: "High Bond" },
  { name: "Virat", type: "Hardware & Accessories", desc: "Architectural hardware fittings, hydraulic hinges, and drawer slides.", tag: "Heavy Duty" },
];

export default function BrandMarquee() {
  return (
    <section id="brands" className="py-20 border-b border-arch-border bg-arch-panel/60">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-arch-terracotta">Authorized Wholesale Distributor</p>
          <h2 className="font-display text-3xl font-extrabold text-arch-dark tracking-tight">Our Premier Manufacturer Partners</h2>
          <p className="text-sm text-arch-muted">We supply 100% genuine factory-certified materials directly to contractors, architects, and homeowners in Chennai.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {brands.map((b, idx) => (
            <div 
              key={idx} 
              className="group rounded-2xl border border-arch-border bg-white p-6 hover:border-arch-terracotta hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-bold text-arch-dark group-hover:text-arch-terracotta transition-colors">{b.name}</h3>
                  <span className="rounded-full bg-arch-terracotta/10 px-2.5 py-0.5 text-[10px] font-bold text-arch-terracotta border border-arch-terracotta/20">
                    {b.tag}
                  </span>
                </div>
                <p className="text-xs font-bold text-zinc-700">{b.type}</p>
                <p className="text-xs text-arch-muted leading-relaxed">{b.desc}</p>
              </div>

              <div className="mt-5 pt-3 border-t border-arch-border flex items-center gap-1.5 text-[11px] text-arch-forest font-bold">
                <CheckCircle className="h-3.5 w-3.5" /> 100% Factory Authenticity
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
