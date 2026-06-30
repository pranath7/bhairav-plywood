import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Sparkles, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-arch-border bg-white/95 backdrop-blur-md">
      {/* Top utility strip */}
      <div className="border-b border-arch-border bg-arch-panel py-2 text-[11px] text-arch-muted font-medium">
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-8">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-zinc-700">
              <MapPin className="h-3.5 w-3.5 text-arch-terracotta" />
              24, Old Slaughter House St, Choolai, Chennai 600112
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-arch-forest font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              Store Open: 9:00 AM – 8:30 PM
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-zinc-500 hidden sm:inline">Direct Desk:</span>
            <a href="tel:9940177773" className="flex items-center gap-1.5 font-bold text-arch-dark hover:text-arch-terracotta transition-colors">
              <Phone className="h-3.5 w-3.5 text-arch-terracotta" /> +91 99401 77773 (Deepak Bansal)
            </a>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-8">
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-arch-dark text-white font-display font-bold text-2xl shadow-md group-hover:bg-arch-terracotta transition-colors">
            BP
          </div>
          <div>
            <div className="font-display font-bold text-xl tracking-tight text-arch-dark flex items-center gap-2">
              Bhairav Plywood
            </div>
            <p className="text-[10px] font-bold text-arch-terracotta uppercase tracking-widest">Architectural Joinery Hub</p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-bold tracking-wider uppercase text-zinc-700">
          <a href="#studio" className="hover:text-arch-terracotta transition-colors flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-arch-terracotta" /> Texture Studio
          </a>
          <a href="#brands" className="hover:text-arch-terracotta transition-colors">Partner Brands</a>
          <a href="#products" className="hover:text-arch-terracotta transition-colors">Catalog</a>
          <a href="#calculator" className="text-arch-terracotta hover:bg-arch-terracotta/10 transition-colors bg-arch-terracotta/5 px-3.5 py-1.5 rounded-full border border-arch-terracotta/30">
            Price Estimator
          </a>
          <a href="#contact" className="hover:text-arch-terracotta transition-colors">Contact Store</a>
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a 
            href="https://wa.me/919940177773?text=Hello%20Bhairav%20Plywood,%20I%20want%20to%20inquire%20about%20plywood%20prices." 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-arch-forest px-4.5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-emerald-800 transition-all active:scale-95"
          >
            <MessageSquare className="h-4 w-4" /> WhatsApp Inquiry
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden rounded-xl p-2.5 text-zinc-700 hover:bg-arch-panel"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-arch-border bg-white px-6 py-6 space-y-4 shadow-xl">
          <a href="#studio" onClick={() => setIsOpen(false)} className="block text-arch-terracotta font-bold">Texture Studio</a>
          <a href="#brands" onClick={() => setIsOpen(false)} className="block text-zinc-800 font-bold">Partner Brands</a>
          <a href="#products" onClick={() => setIsOpen(false)} className="block text-zinc-800 font-bold">Catalog</a>
          <a href="#calculator" onClick={() => setIsOpen(false)} className="block text-arch-terracotta font-bold">Price Estimator</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block text-zinc-800 font-bold">Contact Store</a>
          <div className="pt-4 border-t border-arch-border">
            <a 
              href="https://wa.me/919940177773?text=Hello%20Bhairav%20Plywood,%20I%20want%20to%20inquire%20about%20plywood%20prices." 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full rounded-xl bg-arch-forest py-3 text-xs font-bold text-white"
            >
              <MessageSquare className="h-4 w-4" /> WhatsApp Inquiry
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
