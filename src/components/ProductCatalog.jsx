import React, { useState } from 'react';
import { Sparkles, MessageSquare, ExternalLink, X } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Sharon BWP Marine Plywood IS 710",
    brand: "Sharon Plywoods",
    category: "marine",
    price: "₹120 / sq. ft",
    badge: "BWP Grade 710",
    img: "/images/doors_plywood.png",
    specs: "Boiling Water Proof, 30-Year Guarantee, GLP Treated",
    desc: "Engineered from 100% hardwood timber with phenol formaldehyde resin. Guaranteed against termites, borers, and water immersion."
  },
  {
    id: 2,
    name: "CenturyPly Club Prime 710",
    brand: "CenturyPly",
    category: "marine",
    price: "₹135 / sq. ft",
    badge: "ViroKill Tech",
    img: "/images/doors_plywood.png",
    specs: "Fire Retardant, Anti-Microbial, Glue Line Protection",
    desc: "India's highest certified marine plywood equipped with ViroKill technology that destroys 99.99% microbes on surface contact."
  },
  {
    id: 3,
    name: "Kitply Gold Commercial BWR Ply",
    brand: "Kitply",
    category: "commercial",
    price: "₹85 / sq. ft",
    badge: "Wholesale Hot",
    img: "/images/plywood_hero.png",
    specs: "Boiling Water Resistant, High Tensile Strength",
    desc: "Trusted across India for over 25 years. Ideal for bedroom wardrobes, living room wall panelling, modular cabinets, and bedframes."
  },
  {
    id: 4,
    name: "Greenply E0 Zero Emission Ply",
    brand: "Greenply",
    category: "commercial",
    price: "₹98 / sq. ft",
    badge: "Eco-Friendly",
    img: "/images/plywood_hero.png",
    specs: "Zero Formaldehyde Emissions, Safe for Children",
    desc: "Certified environmentally safe plywood designed for healthy luxury home interiors with zero toxic odors."
  },
  {
    id: 5,
    name: "Merino High-Pressure Matt & Gloss Laminates",
    brand: "Merino",
    category: "laminates",
    price: "₹65 / sq. ft",
    badge: "100+ Shades",
    img: "/images/veneers_laminates.png",
    specs: "1.0mm Thickness, Scratch & Heat Resistant",
    desc: "Exquisite architectural surface laminates in natural wood grains, stone textures, suede finishes, and super-matt solid shades."
  },
  {
    id: 6,
    name: "Almond Solid Core Timber Flush Door",
    brand: "Almond Doors",
    category: "doors",
    price: "₹140 / sq. ft",
    badge: "Architectural",
    img: "/images/doors_plywood.png",
    specs: "Seasoned Wood Core, Dimensionally Stable",
    desc: "Heavy-duty flush doors crafted with seasoned pinewood core and dual veneer surfacing. Warp-resistant and sound-insulated."
  },
  {
    id: 7,
    name: "Fevicol SH Synthetic Wood Adhesive",
    brand: "Fevicol",
    category: "doors",
    price: "₹240 / kg",
    badge: "High Bond",
    img: "/images/veneers_laminates.png",
    specs: "Unbeatable Bonding Strength, Fast Drying",
    desc: "India's ultimate woodworking adhesive for bonding wood, plywood, laminate, veneer, MDF, and blockboard."
  },
  {
    id: 8,
    name: "Virat Heavy Duty Hardware & Slides",
    brand: "Virat",
    category: "doors",
    price: "Custom Fitting",
    badge: "Hardware",
    img: "/images/doors_plywood.png",
    specs: "Soft-Close Hinges, Hydraulic Drawer Slides",
    desc: "Architectural hardware fittings engineered for smooth cabinet drawer operations and heavy weight endurance."
  }
];

export default function ProductCatalog() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filtered = activeTab === "all" ? products : products.filter(p => p.category === activeTab);

  return (
    <section id="products" className="py-24 border-b border-arch-border bg-arch-bg">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-arch-terracotta">Inventory & Stock</p>
            <h2 className="font-display text-3xl font-extrabold text-arch-dark tracking-tight">Quality Materials for Every Joinery Need</h2>
          </div>

          {/* Tab buttons */}
          <div className="flex flex-wrap gap-2 bg-white p-1.5 rounded-xl border border-arch-border shadow-sm">
            {[
              { id: "all", label: "All Catalog" },
              { id: "marine", label: "Marine Waterproof Ply" },
              { id: "commercial", label: "Commercial Ply" },
              { id: "laminates", label: "Veneers & Laminates" },
              { id: "doors", label: "Doors & Hardware" },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === tab.id 
                    ? "bg-arch-dark text-white shadow-sm" 
                    : "text-arch-muted hover:text-arch-dark hover:bg-arch-panel"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map(p => (
            <div 
              key={p.id} 
              className="group rounded-2xl border border-arch-border bg-white overflow-hidden hover:border-arch-terracotta hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-arch-panel">
                  <span className="absolute top-3 left-3 z-10 rounded-full bg-white/90 backdrop-blur-md border border-arch-border px-3 py-1 text-[10px] font-bold text-arch-terracotta shadow-sm">
                    {p.badge}
                  </span>
                  <img 
                    src={p.img} 
                    alt={p.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>

                <div className="p-5 space-y-3">
                  <div className="text-[11px] font-bold text-arch-terracotta uppercase tracking-wider">{p.brand}</div>
                  <h3 className="font-display font-bold text-base text-arch-dark group-hover:text-arch-terracotta transition-colors line-clamp-2 leading-snug">{p.name}</h3>
                  <p className="text-xs text-arch-muted line-clamp-2 leading-relaxed">{p.desc}</p>
                </div>
              </div>

              <div className="p-5 pt-0 space-y-3">
                <div className="text-xs text-arch-dark font-semibold bg-arch-panel p-2.5 rounded-lg border border-arch-border flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5 text-arch-terracotta flex-shrink-0" />
                  <span className="truncate">{p.specs}</span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-arch-border">
                  <div className="text-sm font-extrabold text-arch-dark">{p.price}</div>
                  <button 
                    onClick={() => setSelectedProduct(p)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-arch-terracotta hover:underline transition-colors"
                  >
                    Details <ExternalLink className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Dialog */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-3xl border border-arch-border bg-white p-7 shadow-2xl space-y-4">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-5 right-5 text-arch-muted hover:text-arch-dark p-1"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase text-arch-terracotta">{selectedProduct.brand}</span>
              <h3 className="font-display text-xl font-bold text-arch-dark">{selectedProduct.name}</h3>
            </div>

            <img src={selectedProduct.img} alt={selectedProduct.name} className="w-full h-48 object-cover rounded-2xl border border-arch-border" />

            <p className="text-sm text-arch-muted leading-relaxed">{selectedProduct.desc}</p>

            <div className="rounded-xl bg-arch-panel p-4 border border-arch-border space-y-2">
              <h4 className="text-xs font-bold text-arch-dark uppercase tracking-wider">Technical Specifications</h4>
              <p className="text-xs text-arch-muted">{selectedProduct.specs}</p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-arch-border">
              <div className="text-lg font-bold text-arch-dark">{selectedProduct.price}</div>
              <a 
                href={`https://wa.me/919940177773?text=Hello%20Bhairav%20Plywood,%20I%20want%20to%20buy%20or%20inquire%20about%20${encodeURIComponent(selectedProduct.name)}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-arch-forest px-4.5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-emerald-800"
              >
                <MessageSquare className="h-4 w-4" /> Inquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
