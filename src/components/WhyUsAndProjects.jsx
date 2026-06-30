import React from 'react';
import { Package, ShieldCheck, Tag, Clock, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const whyUsItems = [
  { icon: Package, title: "Wide Range of Premium Products" },
  { icon: ShieldCheck, title: "Trusted by Professionals" },
  { icon: Tag, title: "Competitive Pricing" },
  { icon: Clock, title: "Timely Delivery" },
  { icon: Award, title: "Customer Satisfaction is Our Priority" },
];

const projects = [
  { title: "Modular Kitchen", img: "/images/kitchen_showcase.png" },
  { title: "Wardrobe Design", img: "/images/project_wardrobe.png" },
  { title: "Office Interior", img: "/images/project_office.png" },
  { title: "Living Room", img: "/images/project_living.png" },
];

export default function WhyUsAndProjects() {
  return (
    <section className="py-24 bg-[#f6f4f0] border-b border-zinc-200">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Dark Wood WHY CHOOSE US? Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 rounded-2xl bg-[#18110b] p-8 text-white shadow-xl border border-amber-900/40 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="space-y-8 relative z-10">
              <div className="border-b border-amber-900/50 pb-4">
                <h3 className="font-display font-black text-2xl text-amber-400 tracking-wider">WHY CHOOSE US?</h3>
              </div>

              <div className="space-y-6">
                {whyUsItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-center gap-4 group">
                      <div className="h-9 w-9 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center border border-amber-500/30 group-hover:bg-amber-500 group-hover:text-zinc-950 transition-colors flex-shrink-0">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <span className="font-semibold text-xs text-zinc-200 group-hover:text-amber-300 transition-colors text-left leading-tight">
                        {item.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Subtle background texture overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-950/20 to-black/60 pointer-events-none"></div>
          </motion.div>

          {/* Right Column: OUR PROJECTS Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 space-y-6 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between border-b border-zinc-300 pb-3">
              <h3 className="font-display font-black text-2xl text-zinc-900 tracking-widest uppercase">OUR PROJECTS</h3>
              <a href="#contact" className="text-xs font-bold text-amber-800 hover:text-amber-600 underline">View All</a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 flex-grow">
              {projects.map((p, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="group rounded-2xl bg-white border border-zinc-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="h-48 w-full overflow-hidden bg-zinc-100 relative">
                    <img 
                      src={p.img} 
                      alt={p.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                  </div>
                  <div className="p-3 bg-white text-center border-t border-zinc-100">
                    <h4 className="font-bold text-xs text-zinc-800 group-hover:text-amber-700 transition-colors truncate">
                      {p.title}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
