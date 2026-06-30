import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, MessageSquare } from 'lucide-react';

export default function FooterRef() {
  return (
    <footer className="bg-[#120b06] text-white pt-16 pb-12 border-t border-amber-950/60">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-amber-950/50">
          
          {/* Official Brand Logo Left */}
          <div className="md:col-span-4 space-y-4 text-left">
            <div className="flex items-center gap-3.5">
              <div className="h-14 w-14 rounded-xl overflow-hidden border border-amber-500/30 shadow-xl flex items-center justify-center bg-[#120b06]">
                <img src="/images/user_uploaded_logo.png" alt="Bhairav Plywood Official Logo" className="h-full w-full object-contain p-0.5" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-2xl text-white tracking-tight">Bhairav Plywood</h3>
                <p className="text-xs font-bold text-amber-400 uppercase tracking-widest">All Kinds Of Quality Plywoods</p>
              </div>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Authorized wholesale distributor of premium certified plywoods, blockboards, doors, veneers, laminates, and adhesives in Choolai, Chennai.
            </p>
          </div>

          {/* Quick Links Middle */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-amber-400">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-2 text-xs text-zinc-300 font-medium">
              <li><a href="#home" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#brands" className="hover:text-amber-400 transition-colors">Brands</a></li>
              <li><a href="#about-us" className="hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition-colors">Gallery</a></li>
              <li><a href="#contact-us" className="hover:text-amber-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Details Right */}
          <div className="md:col-span-5 space-y-4 text-left">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-amber-400">Contact Us</h4>
            <ul className="space-y-2.5 text-xs text-zinc-300">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-amber-400 flex-shrink-0" />
                <a href="tel:9940177773" className="hover:text-amber-400 transition-colors font-semibold">99401 77773 (Deepak Bansal)</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-amber-400 flex-shrink-0" />
                <a href="mailto:bheraveply@gmail.com" className="hover:text-amber-400 transition-colors">bheraveply@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>24, Old Slaughter House Street, Choolai, Chennai 600112</span>
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="h-8 w-8 rounded-full bg-amber-950/60 border border-amber-900/40 text-amber-400 flex items-center justify-center hover:bg-amber-500 hover:text-zinc-950 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-amber-950/60 border border-amber-900/40 text-amber-400 flex items-center justify-center hover:bg-amber-500 hover:text-zinc-950 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://wa.me/919940177773" target="_blank" rel="noopener noreferrer" className="h-8 w-8 rounded-full bg-amber-950/60 border border-amber-900/40 text-amber-400 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors">
                <MessageSquare className="h-4 w-4" />
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 text-center text-xs text-zinc-500 font-medium">
          <p>&copy; 2026 Bhairav Plywood. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
