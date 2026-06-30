import React, { useState } from 'react';
import { Phone, MapPin, ArrowRight, Menu, X, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeaderNav() {
  const [activeTab, setActiveTab] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about-us" },
    { name: "Products", href: "#products" },
    { name: "Brands", href: "#brands" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact Us", href: "#contact-us" },
  ];

  const handleScroll = (e, href, name) => {
    e.preventDefault();
    setActiveTab(name);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header id="home" className="w-full bg-[#18110b] text-white sticky top-0 z-50 shadow-xl border-b border-amber-900/40">
      {/* Top Utility Strip */}
      <div className="border-b border-amber-950/80 py-2.5 text-xs text-zinc-200">
        <div className="container mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Official Brand Logo & Name */}
          <a href="#home" onClick={(e) => handleScroll(e, "#home", "Home")} className="flex items-center gap-3.5 group">
            <div className="h-12 w-12 rounded-xl overflow-hidden border border-amber-500/40 shadow-lg shadow-amber-950/50 group-hover:scale-105 transition-transform flex items-center justify-center bg-[#120b06]">
              <img src="/images/user_uploaded_logo.png" alt="Bhairav Plywood Logo" className="h-full w-full object-contain p-0.5" />
            </div>
            <div className="text-left">
              <h1 className="font-display font-extrabold text-xl text-white tracking-tight leading-none">Bhairav Plywood</h1>
              <p className="text-[10px] font-bold text-amber-400 uppercase tracking-widest mt-0.5">All Kinds Of Quality Plywoods</p>
            </div>
          </a>

          {/* Right Utility Contact Details */}
          <div className="hidden md:flex items-center gap-8 text-xs font-semibold">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/40">
                <Phone className="h-4 w-4" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] text-zinc-400 font-bold uppercase">Call Us</span>
                <a href="tel:9940177773" className="font-bold text-amber-300 hover:text-white transition-colors">99401 77773</a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/40">
                <MapPin className="h-4 w-4" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] text-zinc-400 font-bold uppercase">Store Address</span>
                <span className="font-semibold text-zinc-200">24, Old Slaughter House Street, Choolai, Chennai 600112</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-extrabold">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href, item.name)}
              className={`relative py-1 transition-colors flex items-center gap-1.5 ${
                activeTab === item.name ? "text-amber-400 font-black" : "text-zinc-200 hover:text-amber-400"
              }`}
            >
              {item.name}
              {item.name === "Products" && <ChevronDown className="h-4 w-4 text-amber-400" />}
              {activeTab === item.name && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:block">
          <a
            href="#contact-us"
            onClick={(e) => handleScroll(e, "#contact-us", "Contact Us")}
            className="inline-flex items-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-400 px-6 py-2.5 text-xs font-black text-zinc-950 shadow-lg shadow-amber-950/50 border-2 border-amber-300 transition-all active:scale-95"
          >
            Get a Quote <ArrowRight className="h-4 w-4 stroke-[3]" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl bg-amber-950/60 text-amber-400 border border-amber-800/60"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-amber-950 bg-[#18110b] px-6 py-6 space-y-4 text-left">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href, item.name)}
              className="block text-zinc-100 font-extrabold text-base hover:text-amber-400 py-1"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4 border-t border-amber-900/40">
            <a
              href="#contact-us"
              onClick={(e) => handleScroll(e, "#contact-us", "Contact Us")}
              className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-amber-500 py-3 text-sm font-black text-zinc-950 shadow-md"
            >
              Get a Quote <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
