import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BulkQuoteBanner() {
  return (
    <section className="py-16 bg-white border-b border-zinc-200">
      <div className="container mx-auto px-4 sm:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-r from-[#f9f7f3] via-[#f4efe6] to-[#f9f7f3] p-8 sm:p-10 border-2 border-amber-900/20 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
        >
          {/* Left Plywood Stack Illustration */}
          <div className="md:col-span-4 flex justify-center md:justify-start">
            <div className="relative w-full max-w-[280px] h-36 rounded-2xl overflow-hidden border-2 border-amber-800/40 shadow-lg group">
              <img 
                src="/images/doors_plywood.png" 
                alt="Stacked Plywood Sheets Bulk Order" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-amber-900/10"></div>
            </div>
          </div>

          {/* Middle Text Content */}
          <div className="md:col-span-5 text-left space-y-2">
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-zinc-900 tracking-tight leading-tight">
              Looking for Bulk Order or <span className="italic text-amber-700 font-normal">Best Price?</span>
            </h3>
            <p className="text-sm text-zinc-700 font-semibold">
              Get in touch with us for the best quote. Direct wholesale delivery in Chennai.
            </p>
          </div>

          {/* Right High-Contrast Action Buttons */}
          <div className="md:col-span-3 flex flex-col sm:flex-row md:flex-col gap-3 justify-center items-stretch">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#contact-us"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 hover:bg-amber-700 px-7 py-4 text-xs font-black text-white shadow-lg border-2 border-amber-400 transition-all"
            >
              Get a Quote Now <ArrowRight className="h-4 w-4 stroke-[3]" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://wa.me/919940177773?text=Hello%20Bhairav%20Plywood,%20I%20want%20to%20get%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 px-7 py-4 text-xs font-black text-white shadow-lg border-2 border-emerald-500 transition-all"
            >
              <MessageSquare className="h-4 w-4 fill-white" /> Chat on WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
