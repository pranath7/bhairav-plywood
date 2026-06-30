import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-arch-border bg-white py-14 text-xs text-arch-muted">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-arch-dark text-white font-display font-bold text-base shadow-sm">
                BP
              </div>
              <span className="font-display font-bold text-lg text-arch-dark">Bhairav Plywood</span>
            </div>
            <p className="text-arch-muted leading-relaxed max-w-sm">
              All Kinds of Quality Plywoods. Authorized wholesale distributor of certified marine plywoods, blockboards, decorative laminates, flush doors, and woodworking adhesives in Choolai, Chennai.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-arch-dark uppercase tracking-wider text-[11px] mb-4">Authorized Manufacturers</h4>
            <ul className="space-y-2 text-arch-muted">
              <li>Kitply Plywood</li>
              <li>Sharon Marine Ply IS 710</li>
              <li>Greenply E0 Zero Emission</li>
              <li>CenturyPly ViroKill Tech</li>
              <li>Merino Architectural Laminates</li>
              <li>Almond Flush Doors & Fevicol</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-arch-dark uppercase tracking-wider text-[11px] mb-4">Store Location</h4>
            <p className="text-arch-muted leading-relaxed mb-3">
              24, Old Slaughter House Street,<br />
              Choolai, Chennai, Tamil Nadu 600112
            </p>
            <p className="text-arch-dark font-bold">
              Proprietor: Deepak Bansal<br />
              Cell: +91 99401 77773
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-arch-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p>&copy; 2026 Bhairav Plywood. All Rights Reserved.</p>
          <p className="text-arch-muted font-medium">Engineered for Architectural & Joinery Excellence.</p>
        </div>
      </div>
    </footer>
  );
}
