import React from 'react';
import { ArrowRight, Check, Sparkles, Shield, Wifi, Star } from 'lucide-react';

const PRODUCTS = [
  {
    id: 'obsidian-metal',
    title: 'Obsidian™ Matte Black Metal',
    tag: 'Flagship Best-Seller',
    category: 'Metal NFC Smart Card',
    specs: ['304 Surgical Stainless Steel (22g)', 'Laser Deep Etching (Silver Core)', 'NTAG216 High-Frequency NFC Chip', '0.8mm Credit Card Thickness'],
    wholesalePrice: '$12.50',
    msrp: '$55.00',
    description: 'The definitive executive standard. Ultra-durable matte PVD black coating over solid stainless steel with crisp silver laser engraving.',
    idealFor: 'Tech Founders, Enterprise Sales, Venture Capital, Corporate Fleets',
    accentColor: 'border-amber-500/40'
  },
  {
    id: 'gold-metal',
    title: 'Royale™ 24K Brushed Gold',
    tag: 'Luxury High-Ticket',
    category: 'Metal NFC Smart Card',
    specs: ['Electroplated 24K Satin Gold', 'Mirror-Polished Chamfered Edges', 'Anti-Fingerprint Hydrophobic Coat', 'NTAG216 + Dynamic QR on Reverse'],
    wholesalePrice: '$14.00',
    msrp: '$65.00',
    description: 'Unmistakable luxury presence. Hand-finished 24K gold plating that leaves a powerful impression in luxury transactions.',
    idealFor: 'Luxury Real Estate, Private Wealth, Exotic Auto, High-End Consultants',
    accentColor: 'border-amber-400'
  },
  {
    id: 'titanium-metal',
    title: 'Cyber Titanium™ Brushed Steel',
    tag: 'Industrial Minimalist',
    category: 'Metal NFC Smart Card',
    specs: ['Brushed Raw 304 Stainless Steel', 'Contrast Charcoal Laser Burn', 'Scratch-Resistant Micro-Grain Finish', '100% Recyclable Marine Grade Metal'],
    wholesalePrice: '$11.00',
    msrp: '$49.00',
    description: 'Minimalist industrial aesthetics. Raw brushed metal with deep high-contrast fiber laser etching for clean modern branding.',
    idealFor: 'Architects, Civil Engineers, Creative Directors, SaaS Executives',
    accentColor: 'border-slate-400/40'
  },
  {
    id: 'google-review-stand',
    title: 'TapCraft™ Tap-to-Review Stand',
    tag: 'High-Growth Retail & Hospitality',
    category: 'Countertop NFC Hardware',
    specs: ['Dual High-Frequency NFC Modules', 'Crystal High-Clarity Optical Acrylic', 'Permanently Dynamic Target URL', 'Custom Full-Color UV Logo Printing'],
    wholesalePrice: '$8.50',
    msrp: '$39.00',
    description: 'Skyrocket customer Google / Yelp / TripAdvisor 5-star reviews on the spot. Customers simply tap their phone at checkout or dining table.',
    idealFor: 'Restaurants, Dental Clinics, MedSpas, Boutique Hotels, Retail Boutiques',
    accentColor: 'border-blue-400/40'
  },
  {
    id: 'eco-bamboo',
    title: 'TapCraft Eco™ Natural Walnut/Bamboo',
    tag: 'ESG & Sustainable',
    category: 'Eco-Smart Smart Card',
    specs: ['FSC-Certified Solid Hardwood', 'High-Density Embedded NFC Coil', 'Laser Engraved Deep Wood Relief', 'Carbon-Neutral Hardware'],
    wholesalePrice: '$6.50',
    msrp: '$35.00',
    description: 'For environmentally forward organizations. Solid natural hardwood with zero plastic, embedded with standard high-speed NFC.',
    idealFor: 'ESG Enterprises, Green Tech, Organic Brands, Sustainable Agencies',
    accentColor: 'border-emerald-500/40'
  },
  {
    id: 'sample-fleet-kit',
    title: 'Fleet Evaluation Sample Kit',
    tag: 'Recommended First Step',
    category: 'Evaluation Hardware Bundle',
    specs: ['3x Metal Cards (Black, Gold, Titanium)', '1x Tap-to-Review Countertop Stand', 'Full Swatch Finishes Sample Ring', 'Priority FedEx Air Dispatch'],
    wholesalePrice: '$29.00',
    msrp: '$120.00',
    description: 'Evaluate physical weight, NFC antenna sensitivity, and laser engraving depth in your hands before placing bulk fleet orders.',
    idealFor: 'Corporate Procurement, HR Directors, Marketing Agencies',
    accentColor: 'border-amber-300'
  }
];

export default function ProductCatalog({ onOpenQuoteModal, onOpenSampleModal }) {
  return (
    <section id="hardware" className="py-20 md:py-32 bg-[#090B0E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 font-mono">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              PRECISION HARDWARE CATALOG · SHENZHEN EXW / DDP
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Space_Grotesk'] tracking-tight">
              Engineered for Enterprise Fleets.
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Manufactured in Shenzhen with surgical grade materials, advanced fiber laser engraving, and zero software subscription fees.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenSampleModal()}
              className="px-5 py-3 text-xs font-bold text-slate-200 border border-white/15 hover:border-amber-400 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] transition-all cursor-pointer"
            >
              Order Sample Kit ($29)
            </button>
            <button
              onClick={() => onOpenQuoteModal({})}
              className="px-5 py-3 text-xs font-bold text-black bg-amber-400 hover:bg-amber-300 rounded-xl shadow-lg shadow-amber-400/20 transition-all cursor-pointer"
            >
              Request Fleet Quote
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className={`rounded-2xl bg-gradient-to-b from-[#13171F] to-[#0D1016] border ${prod.accentColor} p-7 flex flex-col justify-between hover:border-amber-400 transition-all duration-300 group shadow-xl relative overflow-hidden`}
            >
              {/* Top ambient glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-colors"></div>

              <div>
                {/* Badge & Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    {prod.category}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-amber-400/10 text-amber-300 border border-amber-400/20">
                    {prod.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 font-['Space_Grotesk'] group-hover:text-amber-300 transition-colors">
                  {prod.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {prod.description}
                </p>

                {/* Wholesale Pricing Metric */}
                <div className="bg-[#0A0C10] rounded-xl p-4 border border-white/5 mb-6 flex items-baseline justify-between">
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Wholesale Direct</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl font-black text-amber-400 font-['Space_Grotesk']">
                        {prod.wholesalePrice}
                      </span>
                      <span className="text-xs text-slate-400">/ unit</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-slate-500 line-through">MSRP {prod.msrp}</span>
                    <span className="text-[10px] text-emerald-400 font-mono block font-semibold">
                      Save up to 75%
                    </span>
                  </div>
                </div>

                {/* Specs List */}
                <div className="space-y-2 mb-6">
                  {prod.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Action Footer */}
              <div className="pt-4 border-t border-white/10">
                <div className="text-[11px] text-slate-400 mb-3 truncate">
                  <span className="text-slate-400">Ideal for: </span>
                  <span className="text-slate-200">{prod.idealFor}</span>
                </div>

                <button
                  onClick={() => prod.id === 'sample-fleet-kit' ? onOpenSampleModal() : onOpenQuoteModal({ finish: prod.title })}
                  className="w-full py-3 text-xs font-bold text-slate-200 group-hover:text-black bg-white/5 group-hover:bg-amber-400 border border-white/10 group-hover:border-amber-400 rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>{prod.id === 'sample-fleet-kit' ? 'Order Sample Kit ($29)' : 'Request Digital Proof & Quote'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
