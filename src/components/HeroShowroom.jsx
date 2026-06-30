import React from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, Droplets, Bug, Leaf, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroShowroom() {
  const highlights = [
    { icon: ShieldCheck, title: "Premium Quality", desc: "Best in class materials" },
    { icon: Droplets, title: "Water Resistant", desc: "BWP & Marine Grade" },
    { icon: Bug, title: "Termite Resistant", desc: "Long lasting protection" },
    { icon: Leaf, title: "Eco Friendly", desc: "Sustainable & safe" },
    { icon: Award, title: "Durable & Reliable", desc: "Built to last for generations" },
  ];

  return (
    <section className="relative w-full bg-[#18110b] pb-24 pt-16 lg:pb-32 lg:pt-20 overflow-hidden">
      {/* Background Showroom Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/plywood_hero.png" 
          alt="Bhairav Plywood Luxury Showroom" 
          className="w-full h-full object-cover opacity-35 filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#18110b] via-[#18110b]/85 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#18110b]/50 to-[#f6f4f0]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[420px]">
          
          {/* Left Text Box */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
              All Kinds Of <br />
              <span className="text-amber-400 drop-shadow-md">Quality Plywoods</span>
            </h2>

            <p className="text-base sm:text-lg text-zinc-200 max-w-xl leading-relaxed font-medium">
              Premium plywood, perfect finish, built for strength & long life. Authorized wholesale distributor of India's certified brands in Choolai, Chennai.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#products"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-400 px-8 py-4 text-sm font-black text-zinc-950 shadow-2xl shadow-amber-950/80 border-2 border-amber-300 transition-all"
              >
                Explore Products <ArrowRight className="h-4 w-4 stroke-[3]" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="https://wa.me/919940177773?text=Hello%20Bhairav%20Plywood,%20I%20want%20to%20get%20a%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl bg-white hover:bg-zinc-100 px-7 py-4 text-sm font-black text-zinc-950 shadow-2xl border-2 border-white transition-all"
              >
                Get a Quote <MessageSquare className="h-4 w-4 text-emerald-600 fill-emerald-600" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Illuminated Official Logo Wall Emblem */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 hidden lg:flex flex-col items-center justify-center text-center"
          >
            <div className="rounded-3xl border-2 border-amber-500/40 bg-black/50 backdrop-blur-md p-10 shadow-2xl shadow-amber-900/40 flex flex-col items-center gap-4 group hover:border-amber-400 transition-all">
              <div className="h-32 w-32 rounded-2xl overflow-hidden border border-amber-500/50 shadow-2xl shadow-amber-950/80 group-hover:scale-105 transition-transform flex items-center justify-center bg-[#120b06]">
                <img src="/images/user_uploaded_logo.png" alt="Official Bhairav Plywood Logo" className="h-full w-full object-contain p-1" />
              </div>
              <h3 className="font-display font-extrabold text-3xl text-white tracking-tight">Bhairav Plywood</h3>
              <p className="text-xs font-bold text-amber-400 uppercase tracking-widest">All Kinds Of Quality Plywoods</p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Floating 5-Feature Pill Card */}
      <div className="container mx-auto px-4 sm:px-8 relative z-20 -mb-36 mt-12">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="rounded-2xl bg-white p-6 sm:p-8 shadow-2xl border-2 border-zinc-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-left divide-y md:divide-y-0 md:divide-x divide-zinc-100"
        >
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className={`pt-4 md:pt-0 ${idx !== 0 ? "md:pl-6" : ""} space-y-2 group cursor-default`}>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-amber-500/15 text-amber-800 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-colors flex-shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-extrabold text-sm text-zinc-900 leading-tight">{item.title}</h4>
                </div>
                <p className="text-xs text-zinc-600 font-medium pl-13">{item.desc}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
