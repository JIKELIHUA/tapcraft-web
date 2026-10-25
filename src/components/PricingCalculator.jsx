import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, ShieldCheck, Sparkles, Layers, DollarSign } from 'lucide-react';

const TIERS = [
  { label: 'Starter Fleet (30 pcs)', qty: 30, price: 18.00, badge: 'Low MOQ' },
  { label: 'Growth Team (50 pcs)', qty: 50, price: 15.50, badge: 'Popular for Agencies' },
  { label: 'Corporate Fleet (100 pcs)', qty: 100, price: 13.50, badge: 'Best Value · 65% Margin' },
  { label: 'Enterprise Division (250 pcs)', qty: 250, price: 11.00, badge: 'High Volume' },
  { label: 'Global Brand (500+ pcs)', qty: 500, price: 9.50, badge: 'VIP Custom Packaging' },
];

export default function PricingCalculator({ onOpenQuoteModal }) {
  const [quantity, setQuantity] = useState(100);

  // Dynamic pricing calculation based on quantity slider
  const getUnitPrice = (qty) => {
    if (qty >= 500) return 9.50;
    if (qty >= 250) return 11.00;
    if (qty >= 100) return 13.50;
    if (qty >= 50) return 15.50;
    return 18.00;
  };

  const unitPrice = getUnitPrice(quantity);
  const totalCost = (quantity * unitPrice).toFixed(2);
  const paperCardsReplaced = (quantity * 500).toLocaleString();
  const competitorCost = (quantity * 55 + quantity * 72 * 2).toLocaleString(); // Card + 2 years SaaS
  const savings = Math.max(0, (quantity * 55 + quantity * 72 * 2) - (quantity * unitPrice)).toLocaleString();

  return (
    <section id="pricing" className="py-20 md:py-32 bg-[#090B0E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-xs font-semibold text-emerald-300 font-mono uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            Transparent Shenzhen Factory Direct Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Space_Grotesk'] tracking-tight">
            Wholesale Tiers. Zero Hidden Fees.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            No middleman markups. Select your team size to calculate unit pricing, total investment, and estimated enterprise ROI.
          </p>
        </div>

        {/* Preset Tier Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {TIERS.map((tier) => (
            <button
              key={tier.qty}
              onClick={() => setQuantity(tier.qty)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                quantity === tier.qty
                  ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/25 ring-2 ring-amber-300'
                  : 'bg-[#12161E] text-slate-300 border border-white/10 hover:border-amber-400/50 hover:text-white'
              }`}
            >
              <span>{tier.label}</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${quantity === tier.qty ? 'bg-black/20 text-black' : 'bg-white/5 text-amber-300'}`}>
                ${tier.price.toFixed(2)}/ea
              </span>
            </button>
          ))}
        </div>

        {/* Interactive Calculator Card */}
        <div className="max-w-4xl mx-auto bg-[#12161E] rounded-3xl border border-white/10 p-6 sm:p-10 shadow-2xl">
          
          {/* Slider Row */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-slate-300 font-mono uppercase">
                Fleet Quantity (Cards):
              </label>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-white font-['Space_Grotesk']">
                  {quantity}
                </span>
                <span className="text-xs text-slate-400 font-mono">Custom Engraved Cards</span>
              </div>
            </div>

            <input
              type="range"
              min={20}
              max={1000}
              step={10}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full h-2.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
            />

            <div className="flex justify-between text-[10px] sm:text-[11px] text-slate-400 font-mono">
              <span>20 (Min)</span>
              <span className="hidden sm:inline">100 (Fleet)</span>
              <span className="hidden sm:inline">250</span>
              <span className="hidden sm:inline">500</span>
              <span>1,000+ (Enterprise)</span>
            </div>
          </div>

          {/* Pricing Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-[#0A0D12] p-5 rounded-2xl border border-white/5 text-center">
              <div className="text-xs text-slate-400 font-mono uppercase mb-1">Unit Price</div>
              <div className="text-3xl font-black text-amber-400 font-['Space_Grotesk']">
                ${unitPrice.toFixed(2)}
              </div>
              <div className="text-[11px] text-emerald-400 font-mono mt-1 font-semibold">Laser Engraving Free</div>
            </div>

            <div className="bg-[#0A0D12] p-5 rounded-2xl border border-white/5 text-center">
              <div className="text-xs text-slate-400 font-mono uppercase mb-1">Total One-Time Investment</div>
              <div className="text-3xl font-black text-white font-['Space_Grotesk']">
                ${totalCost}
              </div>
              <div className="text-[11px] text-slate-400 font-mono mt-1">$0 Future Recurring Fees</div>
            </div>

            <div className="bg-[#0A0D12] p-5 rounded-2xl border border-white/5 text-center">
              <div className="text-xs text-slate-400 font-mono uppercase mb-1">Est. 3-Year Savings vs SaaS</div>
              <div className="text-3xl font-black text-emerald-400 font-['Space_Grotesk']">
                ${savings}
              </div>
              <div className="text-[11px] text-slate-400 font-mono mt-1">~{paperCardsReplaced} paper cards saved</div>
            </div>
          </div>

          {/* What's Always Included */}
          <div className="bg-white/[0.02] p-6 rounded-2xl border border-white/5 mb-8">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono mb-4">
              Included in Every TapCraft Wholesale Order:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Free Variable Individual Name & Title Laser Engraving</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Free Vector Artwork & High-Res Proof Preparation</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Subscription Fees & Lifetime Open NFC URL Mapping</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Individual Protective Velvet / Matte Sleeves Included</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Full Quality Control Video Prior to Flight Dispatch</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Express Door-to-Door Air Delivery (DHL / FedEx Express)</span>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400 text-center sm:text-left">
              💬 Need custom Pantone color matching, gift box packaging, or 1,000+ units? Talk to our engineering team directly.
            </div>
            <button
              onClick={() => onOpenQuoteModal({ quantity: quantity, finish: 'Obsidian Black' })}
              className="w-full sm:w-auto px-8 py-3.5 text-xs font-bold text-black bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 rounded-xl shadow-xl shadow-amber-400/25 transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
            >
              <span>Lock In ${unitPrice.toFixed(2)}/card Tier</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
