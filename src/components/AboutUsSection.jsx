import React from 'react';
import { Award, ShieldCheck, Users, Building, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutUsSection() {
  return (
    <section id="about-us" className="py-24 bg-white border-b border-zinc-200">
      <div className="container mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-0.5 w-16 bg-amber-700/40"></div>
          <h3 className="font-display font-black text-2xl text-zinc-900 tracking-widest uppercase">ABOUT US</h3>
          <div className="h-0.5 w-16 bg-amber-700/40"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border-2 border-amber-900/20 shadow-2xl group">
              <img 
                src="/images/plywood_hero.png" 
                alt="Bhairav Plywood Heritage Showroom" 
                className="w-full h-[440px] object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18110b]/90 via-[#18110b]/30 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-amber-500/30 text-white space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                  <Award className="h-4 w-4" /> Established Heritage in Chennai
                </div>
                <h4 className="font-display font-extrabold text-2xl">Led by Deepak Bansal</h4>
                <p className="text-xs text-zinc-300">24, Old Slaughter House Street, Choolai, Chennai 600112</p>
              </div>
            </div>
          </motion.div>

          {/* Right Detailed Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <div className="space-y-3">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Chennai's Trusted Timber Wholesale Partner</span>
              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-zinc-900 leading-tight">
                25+ Years of Uncompromising Quality & Structural Trust
              </h3>
            </div>

            <p className="text-sm text-zinc-600 leading-relaxed">
              Founded in Choolai, Chennai, <strong>Bhairav Plywood</strong> has grown to become one of Tamil Nadu's premier wholesale and retail distributors of certified architectural plywoods, marine blockboards, high-pressure decorative laminates, flush doors, and woodworking adhesives.
            </p>

            <p className="text-sm text-zinc-600 leading-relaxed">
              Under the direct leadership of <strong>Deepak Bansal</strong>, we prioritize structural reliability, 100% genuine factory certification, and direct wholesale pricing for interior designers, architects, contractors, and homeowners.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                "100% Genuine Factory Brands",
                "Direct Wholesale Factory Rates",
                "Termite & Borer Proof Guarantee",
                "Express Dispatch Across Chennai"
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs font-bold text-zinc-800">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
