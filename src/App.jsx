import React from 'react';
import HeaderNav from './components/HeaderNav';
import HeroShowroom from './components/HeroShowroom';
import AboutUsSection from './components/AboutUsSection';
import ProductsGrid from './components/ProductsGrid';
import BrandsSection from './components/BrandsSection';
import GallerySection from './components/GallerySection';
import WhyUsAndProjects from './components/WhyUsAndProjects';
import MaterialStudio from './components/MaterialStudio';
import MaterialAdvisor from './components/MaterialAdvisor';
import BulkQuoteBanner from './components/BulkQuoteBanner';
import ContactSection from './components/ContactSection';
import FooterRef from './components/FooterRef';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f6f4f0] text-zinc-900 font-sans selection:bg-amber-500 selection:text-zinc-950 scroll-smooth">
      <HeaderNav />
      <main>
        <HeroShowroom />
        <AboutUsSection />
        <ProductsGrid />
        <BrandsSection />
        <GallerySection />
        <WhyUsAndProjects />
        <MaterialStudio />
        <MaterialAdvisor />
        <BulkQuoteBanner />
        <ContactSection />
      </main>
      <FooterRef />
    </div>
  );
}
