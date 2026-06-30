import React from 'react';
import { ShieldCheck, Truck, Percent, FileCheck } from 'lucide-react';

const features = [
  {
    icon: Percent,
    title: "Direct Wholesale Rates",
    desc: "Bypass intermediary agency markups. We supply factory-direct bulk prices for CenturyPly, Greenply, Sharon, and Kitply."
  },
  {
    icon: ShieldCheck,
    title: "100% Termite & Borer Proof",
    desc: "All our BWP marine and BWR commercial plywood sheets are chemically impregnated with Glue Line Poisoning (GLP) protection."
  },
  {
    icon: Truck,
    title: "Express Job-Site Dispatch",
    desc: "Strategically located in Choolai, Chennai to guarantee rapid delivery across Chennai city and adjacent industrial suburbs."
  },
  {
    icon: FileCheck,
    title: "Authentic Manufacturer Warranty",
    desc: "Every purchase is backed by genuine manufacturer guarantee certificates ranging from 15 to 30 years."
  }
];

export default function TrustSection() {
  return (
    <section id="why-us" className="py-24 border-b border-arch-border bg-white">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-arch-terracotta">Structural Assurance</p>
          <h2 className="font-display text-3xl font-extrabold text-arch-dark tracking-tight">Why Interior Craftsmen & Architects Trust Us</h2>
          <p className="text-sm text-arch-muted">We don't just sell wood; we provide certified structural reliability for homes and corporate spaces.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div 
                key={i} 
                className="rounded-3xl border border-arch-border bg-arch-bg p-7 hover:border-arch-terracotta hover:shadow-xl transition-all duration-300 space-y-4 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-arch-terracotta/10 text-arch-terracotta group-hover:bg-arch-terracotta group-hover:text-white transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-arch-dark">{f.title}</h3>
                <p className="text-xs text-arch-muted leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
