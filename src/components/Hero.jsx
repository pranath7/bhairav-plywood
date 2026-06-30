import React from 'react';
import { ArrowUpRight, Calculator, Award, ShieldCheck, Truck, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28 border-b border-arch-border bg-arch-bg">
      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-arch-terracotta/30 bg-arch-terracotta/5 px-4 py-1.5 text-xs font-bold text-arch-terracotta">
              <Award className="h-4 w-4" />
              <span className="uppercase tracking-wider">Chennai's Premier Wholesale Plywood Depot</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-arch-dark leading-[1.08] tracking-tight">
              Crafting <span className="italic font-normal text-arch-terracotta">Timeless</span> Structural Strength & Luxury.
            </h1>

            <p className="text-base sm:text-lg text-arch-muted max-w-2xl leading-relaxed font-normal">
              Direct factory-authorized distributors for India's certified timber giants: Kitply, Sharon Plywoods, Greenply, CenturyPly, Merino laminates, Almond Flush Doors & Fevicol adhesives.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="#calculator" 
                className="inline-flex items-center gap-2.5 rounded-xl bg-arch-dark px-7 py-4 text-sm font-bold text-white shadow-xl hover:bg-arch-terracotta transition-all active:scale-95"
              >
                <Calculator className="h-4 w-4" /> Estimate Sheet Cost
              </a>
              <a 
                href="#studio" 
                className="inline-flex items-center gap-2.5 rounded-xl border border-arch-border bg-white px-7 py-4 text-sm font-bold text-arch-dark hover:border-arch-terracotta hover:bg-arch-panel transition-all shadow-sm"
              >
                <Sparkles className="h-4 w-4 text-arch-terracotta" /> Texture Studio <ArrowUpRight className="h-4 w-4 text-arch-muted" />
              </a>
            </div>

            {/* Quick trust counter row */}
            <div className="pt-10 border-t border-arch-border grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="space-y-1">
                <div className="font-display text-3xl font-extrabold text-arch-terracotta">25+ Yrs</div>
                <div className="text-xs text-arch-muted font-medium">Choolai Chennai Legacy</div>
              </div>
              <div className="space-y-1">
                <div className="font-display text-3xl font-extrabold text-arch-dark">8+ Brands</div>
                <div className="text-xs text-arch-muted font-medium">Direct Authorized Partner</div>
              </div>
              <div className="space-y-1">
                <div className="font-display text-3xl font-extrabold text-arch-forest">100%</div>
                <div className="text-xs text-arch-muted font-medium">Termite & Borer Proof</div>
              </div>
              <div className="space-y-1">
                <div className="font-display text-3xl font-extrabold text-arch-dark">Wholesale</div>
                <div className="text-xs text-arch-muted font-medium">Factory Direct Rates</div>
              </div>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl border border-arch-border bg-white p-3 shadow-xl overflow-hidden group">
              <img 
                src="/images/plywood_hero.png" 
                alt="Luxury Architectural Plywood Showcase" 
                className="w-full h-[460px] object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-arch-dark/60 via-transparent to-transparent rounded-2xl"></div>
              
              {/* Overlay Glass Cards */}
              <div className="absolute top-6 left-6 flex items-center gap-2.5 rounded-xl border border-white/20 bg-white/90 backdrop-blur-md px-4 py-2 text-xs font-bold text-arch-dark shadow-lg">
                <ShieldCheck className="h-4 w-4 text-arch-terracotta" /> Certified Original Factory Stock
              </div>

              <div className="absolute bottom-6 right-6 flex items-center gap-2.5 rounded-xl border border-white/20 bg-white/90 backdrop-blur-md px-4 py-2.5 text-xs font-bold text-arch-forest shadow-lg">
                <Truck className="h-4 w-4 text-arch-forest" /> Express Job-Site Dispatch
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
