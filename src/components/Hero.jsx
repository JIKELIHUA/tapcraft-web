import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Sparkles, CheckCircle2, Award, Globe, Wifi } from 'lucide-react';

export default function Hero({ onOpenQuoteModal, onScrollToStudio }) {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-amber-500/15 to-amber-700/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Shenzhen Hardware Capital Badge */}
            <div className="inline-flex items-center justify-center lg:justify-start gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] sm:text-xs font-medium text-slate-300 backdrop-blur-md max-w-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
              <span>Shenzhen Precision Hardware</span>
              <span className="text-white/30">|</span>
              <span className="text-amber-300 font-semibold">0 Monthly Fees</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-['Space_Grotesk']">
              The Last Business Card <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                Your Team Will Ever Buy.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Heavyweight laser-engraved NFC metal cards and smart review stands. 
              <span className="text-white font-medium"> No $48/year app lock-ins. No subscription paywalls.</span> Full custom variable laser engraving delivered directly to corporate sales teams worldwide in days.
            </p>

            {/* Micro value tags */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-1.5 bg-white/[0.03] px-3 py-1.5 rounded-md border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>22g Solid Surgical 304 Steel</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/[0.03] px-3 py-1.5 rounded-md border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Works on all iPhones & Androids (No App)</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/[0.03] px-3 py-1.5 rounded-md border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Variable Name Engraving Included</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onOpenQuoteModal({})}
                className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-black bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 rounded-xl shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Get Free 3D Proof & Fleet Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={onScrollToStudio}
                className="w-full sm:w-auto px-7 py-4 text-sm font-semibold text-white hover:text-amber-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-amber-400/50 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Test Live 3D Customizer</span>
              </button>
            </div>

            {/* Trust Metrics Bar */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <div className="text-xl sm:text-3xl font-black text-white font-['Space_Grotesk']">$0</div>
                <div className="text-[11px] sm:text-xs text-slate-400">Monthly App Fee</div>
              </div>
              <div>
                <div className="text-xl sm:text-3xl font-black text-white font-['Space_Grotesk']">4 Hours</div>
                <div className="text-[11px] sm:text-xs text-slate-400">3D Proof Turnaround</div>
              </div>
              <div>
                <div className="text-xl sm:text-3xl font-black text-white font-['Space_Grotesk']">3-5 Days</div>
                <div className="text-[11px] sm:text-xs text-slate-400">FedEx/DHL Air Express</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Showcase Card Interactive Simulation */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-md">
              {/* Decorative backglow */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-amber-700/20 rounded-3xl blur-2xl transform -rotate-3 scale-105"></div>
              
              {/* Card Container */}
              <div className="relative rounded-2xl p-6 bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/15 backdrop-blur-2xl shadow-2xl space-y-6">
                
                {/* Physical Card Simulation (Obsidian Black) */}
                <div className="relative aspect-[1.586/1] w-full rounded-xl bg-gradient-to-br from-[#1A1E24] via-[#0F1216] to-[#0A0C0E] border border-amber-500/30 p-6 flex flex-col justify-between shadow-2xl shadow-black overflow-hidden group">
                  {/* Subtle metallic brush line overlay */}
                  <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-100/30 via-transparent to-transparent"></div>
                  <div className="absolute -right-16 -top-16 w-48 h-48 bg-amber-400/10 rounded-full blur-2xl"></div>

                  {/* Card Header: Brand & NFC icon */}
                  <div className="flex items-center justify-between z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-amber-400/20 border border-amber-400/40 flex items-center justify-center">
                        <span className="text-amber-400 font-bold text-xs font-['Space_Grotesk']">TC</span>
                      </div>
                      <span className="text-white font-bold tracking-widest text-xs font-['Space_Grotesk'] uppercase">
                        TAP &middot; CRAFT
                      </span>
                    </div>
                    {/* NFC wave signal */}
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-amber-300 font-mono">
                      <Wifi className="w-3 h-3 text-amber-400 rotate-90" />
                      <span>NTAG216</span>
                    </div>
                  </div>

                  {/* Card Center: Laser Engraved Logo & Micro Tag */}
                  <div className="z-10 my-auto text-left">
                    <div className="text-amber-300/90 text-[10px] font-mono tracking-widest uppercase mb-1">
                      LASER DEEP ETCHED · 304 STAINLESS STEEL
                    </div>
                    <div className="text-xl sm:text-2xl font-bold tracking-tight text-white font-['Space_Grotesk']">
                      VERTEX CAPITAL
                    </div>
                  </div>

                  {/* Card Footer: Variable Employee Name & Tap Prompt */}
                  <div className="flex items-end justify-between z-10 pt-4 border-t border-white/10">
                    <div>
                      <div className="text-white text-sm font-semibold tracking-wide">
                        ALEXANDER CHEN
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Managing Director &middot; Global Growth
                      </div>
                    </div>
                    <div className="text-[10px] font-mono text-amber-400/80 uppercase">
                      TAP ANY PHONE
                    </div>
                  </div>
                </div>

                {/* Micro Live Simulation Notification */}
                <div className="bg-[#0E1218] rounded-xl p-3 border border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></div>
                    <span className="text-slate-300 font-medium">Customer Taps Phone</span>
                  </div>
                  <span className="text-emerald-400 font-mono font-semibold">Instant vCard &middot; 0.2s</span>
                </div>

                {/* Fleet Quick Spec */}
                <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-400">
                  <div className="bg-white/[0.02] p-2.5 rounded-lg border border-white/5">
                    <span className="text-white block font-medium">Zero Monthly App Fee</span>
                    Point to any URL, LinkedIn, or free vCard
                  </div>
                  <div className="bg-white/[0.02] p-2.5 rounded-lg border border-white/5">
                    <span className="text-white block font-medium">Custom Fleet Engraving</span>
                    Unique employee names on every card
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
