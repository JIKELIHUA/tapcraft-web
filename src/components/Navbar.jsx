import React, { useState } from 'react';
import { ShieldCheck, Sparkles, Menu, X, ArrowRight, PhoneCall, Layers } from 'lucide-react';

export default function Navbar({ onOpenQuoteModal, onOpenSampleModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Urgent Announcement Banner */}
      <div className="bg-gradient-to-r from-amber-500/20 via-amber-400/30 to-amber-500/20 border-b border-amber-500/30 py-2 px-3 text-[11px] sm:text-xs font-medium text-amber-200 text-center tracking-wide w-full overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          <div className="flex items-center gap-1.5 shrink-0">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse shrink-0" />
            <strong className="text-amber-300 font-bold">Q4 Fleet Offer:</strong>
          </div>
          <span>Free Laser Setup & 4h Proofs (20+ Cards).</span>
          <button 
            onClick={() => onOpenQuoteModal({ finish: 'Obsidian Black', quantity: 30 })}
            className="underline hover:text-white transition-colors cursor-pointer font-semibold ml-1 shrink-0 text-amber-300"
          >
            Claim &rarr;
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-40 backdrop-blur-xl bg-[#090B0E]/90 border-b border-white/10 transition-all w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 p-[1px] shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-shadow">
              <div className="w-full h-full bg-[#0E1217] rounded-[11px] flex items-center justify-center">
                <span className="text-amber-400 font-black text-xl font-['Space_Grotesk'] tracking-tighter">TC</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-['Space_Grotesk'] text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                  TapCraft<span className="text-amber-400">.</span>
                </span>
                <span className="px-1.5 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-amber-400/10 text-amber-300 border border-amber-400/20 rounded">
                  B2B Fleet
                </span>
              </div>
              <span className="hidden sm:block text-[10px] text-slate-400 tracking-wider font-mono">
                PRECISION HARDWARE · SHENZHEN
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#studio" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></span>
              Live 3D Studio
            </a>
            <a href="#hardware" className="hover:text-amber-300 transition-colors">
              Hardware Fleet
            </a>
            <a href="#comparison" className="hover:text-amber-300 transition-colors">
              Why 0 Subscription
            </a>
            <a href="#pricing" className="hover:text-amber-300 transition-colors">
              Wholesale Pricing
            </a>
            <a href="#faq" className="hover:text-amber-300 transition-colors">
              Procurement FAQ
            </a>
          </div>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenSampleModal()}
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white border border-white/10 hover:border-amber-400/40 rounded-lg transition-all bg-white/[0.03] hover:bg-white/[0.08] cursor-pointer"
            >
              Order Sample Kit ($29)
            </button>
            <button
              onClick={() => onOpenQuoteModal({})}
              className="px-4 py-2 text-xs font-bold text-black bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 rounded-lg shadow-lg shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Instant B2B Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Hamburger & Quick Action */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenQuoteModal({})}
              className="px-2.5 py-1.5 text-xs font-bold text-black bg-amber-400 rounded-lg cursor-pointer shadow-sm shadow-amber-400/20"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-300 hover:text-white rounded-lg border border-white/10 bg-white/5 cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-white/10 bg-[#0E1217]/98 px-6 py-6 space-y-4 shadow-2xl backdrop-blur-2xl">
            <div className="flex flex-col space-y-3 text-base font-medium text-slate-300">
              <a
                href="#studio"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-amber-300 border-b border-white/5 flex items-center justify-between"
              >
                <span>Live 3D Customizer Studio</span>
                <span className="text-xs bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded font-mono">Interactive</span>
              </a>
              <a
                href="#hardware"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-amber-300 border-b border-white/5"
              >
                Hardware Fleet (Cards & Stands)
              </a>
              <a
                href="#comparison"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-amber-300 border-b border-white/5"
              >
                Why 0 Monthly Fees (Vs. Popl/V1CE)
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-amber-300 border-b border-white/5"
              >
                Wholesale Pricing Calculator
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-amber-300 border-b border-white/5"
              >
                B2B Procurement FAQ
              </a>
            </div>
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSampleModal();
                }}
                className="w-full py-3 text-sm font-semibold text-slate-200 border border-white/15 rounded-xl bg-white/5 text-center"
              >
                Order Hardware Sample Kit ($29)
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal({});
                }}
                className="w-full py-3 text-sm font-bold text-black bg-gradient-to-r from-amber-300 to-amber-500 rounded-xl shadow-lg shadow-amber-500/20 text-center"
              >
                Request Free 3D Proof & Wholesale Quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
