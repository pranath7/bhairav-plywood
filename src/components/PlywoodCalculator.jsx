import React, { useState } from 'react';
import { Calculator, MessageSquare, Check, PhoneCall } from 'lucide-react';

export default function PlywoodCalculator() {
  const [grade, setGrade] = useState("bwp");
  const [size, setSize] = useState("32");
  const [thickness, setThickness] = useState("1.0");
  const [qty, setQty] = useState(10);

  const rates = {
    bwp: 115,
    bwr: 85,
    blockboard: 95,
    laminate: 65,
    door: 140
  };

  const currentBaseRate = rates[grade] || 115;
  const sqftPerSheet = parseFloat(size);
  const thickMult = parseFloat(thickness);
  const effectiveRate = Math.round(currentBaseRate * thickMult);
  const totalSqft = sqftPerSheet * qty;
  const totalCost = totalSqft * effectiveRate;

  const handleSendWhatsApp = () => {
    const gradeNames = {
      bwp: "BWP Marine Grade 710 Plywood (Waterproof)",
      bwr: "BWR Commercial Moisture Resistant Ply",
      blockboard: "Gurjan Core Heavy Blockboard",
      laminate: "Decorative Merino Laminate Sheet (1mm)",
      door: "Almond Premium Solid Flush Door"
    };

    const sizeLabels = {
      "32": "8 ft x 4 ft (32 sq. ft)",
      "28": "7 ft x 4 ft (28 sq. ft)",
      "24": "8 ft x 3 ft (24 sq. ft)",
      "21": "7 ft x 3 ft (21 sq. ft)",
      "18": "6 ft x 3 ft (18 sq. ft)"
    };

    const thickLabels = {
      "1.0": "18 mm (Standard Cabinets)",
      "1.15": "19 mm (Heavy Duty Doors)",
      "0.85": "12 mm (Wardrobe Backing)",
      "0.65": "9 mm (Panelling)",
      "0.50": "6mm / 4mm (Light Joinery)",
      "1.35": "25 mm (Extra Heavy)"
    };

    const msg = `Hello Bhairav Plywood (Deepak Bansal),\n\nI calculated an estimate on your website:\n- Material Grade: ${gradeNames[grade]}\n- Dimensions: ${sizeLabels[size]}\n- Thickness: ${thickLabels[thickness]}\n- Quantity: ${qty} sheets\n- Total Sq. Ft: ${totalSqft} sq. ft\n- Total Estimated Amount: ₹${totalCost.toLocaleString('en-IN')}\n\nPlease provide your best wholesale quote and availability. Thank you!`;

    window.open(`https://wa.me/919940177773?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="calculator" className="py-24 border-b border-arch-border bg-white">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-arch-terracotta/30 bg-arch-terracotta/5 px-3.5 py-1 text-xs font-bold text-arch-terracotta">
              <Calculator className="h-3.5 w-3.5" />
              <span>Instant Material Estimator</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-arch-dark tracking-tight leading-tight">
              Interactive Plywood & Sheet Estimator
            </h2>

            <p class="text-sm sm:text-base text-arch-muted leading-relaxed">
              Plan your interior woodworking or construction budgets with precision. Select your preferred grade, sheet sizes, and thickness to get instant wholesale cost estimates.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "Instant square footage & rate calculation",
                "Covers 4mm up to 25mm structural thicknesses",
                "Direct 1-click WhatsApp quote submission to store"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-arch-dark">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-arch-terracotta/10 text-arch-terracotta flex-shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-arch-border bg-arch-panel p-5 flex items-center gap-4 mt-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-arch-terracotta/10 text-arch-terracotta flex-shrink-0">
                <PhoneCall className="h-5 w-5" />
              </div>
              <div className="text-xs space-y-0.5">
                <span className="font-bold text-arch-dark">Need custom cutting or bulk project quotes?</span>
                <p className="text-arch-muted">Call Deepak Bansal at <a href="tel:9940177773" className="text-arch-terracotta font-bold hover:underline">+91 99401 77773</a></p>
              </div>
            </div>
          </div>

          {/* Right Card Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-arch-border bg-arch-bg p-6 sm:p-8 shadow-xl space-y-6 relative">
              <div className="flex items-center justify-between border-b border-arch-border pb-4">
                <h3 className="font-display text-lg font-bold text-arch-dark flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-arch-terracotta" /> Configure Sheet Requirement
                </h3>
                <span className="text-xs font-bold text-arch-terracotta uppercase">Live Estimator</span>
              </div>

              <div className="space-y-4">
                {/* Material Grade */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-arch-dark">Material Grade / Category</label>
                  <select 
                    value={grade} 
                    onChange={(e) => setGrade(e.target.value)}
                    className="w-full rounded-xl border border-arch-border bg-white px-4 py-3 text-sm text-arch-dark font-medium focus:border-arch-terracotta focus:outline-none transition-colors shadow-sm"
                  >
                    <option value="bwp">BWP Marine Grade 710 Plywood (Waterproof)</option>
                    <option value="bwr">BWR Commercial Moisture Resistant Ply</option>
                    <option value="blockboard">Gurjan Core Heavy Blockboard</option>
                    <option value="laminate">Decorative Merino Laminate Sheet (1mm)</option>
                    <option value="door">Almond Premium Solid Flush Door</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Dimensions */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-arch-dark">Sheet Size (Dimensions)</label>
                    <select 
                      value={size} 
                      onChange={(e) => setSize(e.target.value)}
                      className="w-full rounded-xl border border-arch-border bg-white px-4 py-3 text-sm text-arch-dark font-medium focus:border-arch-terracotta focus:outline-none transition-colors shadow-sm"
                    >
                      <option value="32">8 ft x 4 ft (32 sq. ft)</option>
                      <option value="28">7 ft x 4 ft (28 sq. ft)</option>
                      <option value="24">8 ft x 3 ft (24 sq. ft)</option>
                      <option value="21">7 ft x 3 ft (21 sq. ft)</option>
                      <option value="18">6 ft x 3 ft (18 sq. ft)</option>
                    </select>
                  </div>

                  {/* Thickness */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-arch-dark">Thickness (mm)</label>
                    <select 
                      value={thickness} 
                      onChange={(e) => setThickness(e.target.value)}
                      className="w-full rounded-xl border border-arch-border bg-white px-4 py-3 text-sm text-arch-dark font-medium focus:border-arch-terracotta focus:outline-none transition-colors shadow-sm"
                    >
                      <option value="1.0">18 mm (Standard Cabinets)</option>
                      <option value="1.15">19 mm (Heavy Duty Doors)</option>
                      <option value="0.85">12 mm (Wardrobe Backing)</option>
                      <option value="0.65">9 mm (Panelling)</option>
                      <option value="0.50">6mm / 4mm (Light Joinery)</option>
                      <option value="1.35">25 mm (Extra Heavy)</option>
                    </select>
                  </div>
                </div>

                {/* Quantity input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-arch-dark">Number of Sheets Required</label>
                  <div className="flex items-center">
                    <button 
                      onClick={() => setQty(Math.max(1, qty - 1))}
                      className="h-11 w-12 rounded-l-xl border border-arch-border bg-arch-panel text-arch-dark font-bold text-lg hover:bg-zinc-200"
                    >
                      -
                    </button>
                    <input 
                      type="number" 
                      value={qty} 
                      onChange={(e) => setQty(Math.max(1, parseInt(e.target.value) || 1))}
                      className="h-11 w-full border-y border-arch-border bg-white text-center text-arch-dark font-bold text-base focus:outline-none shadow-inner"
                    />
                    <button 
                      onClick={() => setQty(qty + 1)}
                      className="h-11 w-12 rounded-r-xl border border-arch-border bg-arch-panel text-arch-dark font-bold text-lg hover:bg-zinc-200"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Calculation Summary Box */}
              <div className="rounded-2xl border border-dashed border-arch-border bg-white p-5 space-y-3 shadow-sm">
                <div className="flex items-center justify-between text-xs text-arch-muted">
                  <span>Total Coverage Area:</span>
                  <strong className="text-arch-dark font-bold">{totalSqft} sq. ft ({qty} sheets)</strong>
                </div>
                <div className="flex items-center justify-between text-xs text-arch-muted">
                  <span>Estimated Rate Tier:</span>
                  <strong className="text-arch-dark font-bold">₹{effectiveRate} / sq. ft</strong>
                </div>
                <div className="border-t border-arch-border my-2"></div>
                <div className="flex items-center justify-between">
                  <span class="text-sm font-bold text-arch-dark">Total Estimated Cost:</span>
                  <strong className="font-display text-3xl font-extrabold text-arch-terracotta">₹{totalCost.toLocaleString('en-IN')}*</strong>
                </div>
                <p className="text-[11px] text-arch-muted text-center">*Estimated wholesale price. Final invoice provided upon order confirmation.</p>
              </div>

              <button 
                onClick={handleSendWhatsApp}
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-arch-forest py-3.5 text-sm font-bold text-white shadow-md hover:bg-emerald-800 transition-all active:scale-95"
              >
                <MessageSquare className="h-4 w-4" /> Get Official Wholesale Quote on WhatsApp
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
