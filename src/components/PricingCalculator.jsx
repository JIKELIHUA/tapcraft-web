import React, { useState } from 'react';
import { Calculator, Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function PricingCalculator({ onOpenQuoteModal }) {
  const { t } = useLanguage();
  const [quantity, setQuantity] = useState(100);

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
  const savings = Math.max(0, (quantity * 55 + quantity * 72 * 2) - (quantity * unitPrice)).toLocaleString();

  return (
    <section id="pricing" className="py-20 md:py-32 bg-[#090B0E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-xs font-semibold text-emerald-300 font-mono uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            {t.pricing.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Space_Grotesk'] tracking-tight">
            {t.pricing.title}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* Preset Tier Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {t.pricing.tiers.map((tier) => (
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
                {t.pricing.sliderLabel}
              </label>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-white font-['Space_Grotesk']">
                  {quantity}
                </span>
                <span className="text-xs text-slate-400 font-mono">{t.pricing.sliderUnit}</span>
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
              <span>{t.pricing.sliderMin}</span>
              <span className="hidden sm:inline">{t.pricing.sliderCorp}</span>
              <span className="hidden sm:inline">{t.pricing.slider250}</span>
              <span className="hidden sm:inline">{t.pricing.slider500}</span>
              <span>{t.pricing.sliderMax}</span>
            </div>
          </div>

          {/* Pricing Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-[#0A0D12] p-5 rounded-2xl border border-white/5 text-center">
              <div className="text-xs text-slate-400 font-mono uppercase mb-1">{t.pricing.metricUnit}</div>
              <div className="text-3xl font-black text-amber-400 font-['Space_Grotesk']">
                ${unitPrice.toFixed(2)}
              </div>
              <div className="text-[11px] text-emerald-400 font-mono mt-1 font-semibold">{t.pricing.metricUnitSub}</div>
            </div>

            <div className="bg-[#0A0D12] p-5 rounded-2xl border border-white/5 text-center">
              <div className="text-xs text-slate-400 font-mono uppercase mb-1">{t.pricing.metricTotal}</div>
              <div className="text-3xl font-black text-white font-['Space_Grotesk']">
                ${totalCost}
              </div>
              <div className="text-[11px] text-slate-400 font-mono mt-1">{t.pricing.metricTotalSub}</div>
            </div>

            <div className="bg-[#0A0D12] p-5 rounded-2xl border border-white/5 text-center">
              <div className="text-xs text-slate-400 font-mono uppercase mb-1">{t.pricing.metricSavings}</div>
              <div className="text-3xl font-black text-emerald-400 font-['Space_Grotesk']">
                ${savings}
              </div>
              <div className="text-[11px] text-slate-400 font-mono mt-1">
                {t.pricing.metricSavingsSub.replace('{cards}', paperCardsReplaced)}
              </div>
            </div>
          </div>

          {/* What's Always Included */}
          <div className="bg-white/[0.02] p-6 rounded-2xl border border-white/5 mb-8">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono mb-4">
              {t.pricing.includedTitle}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.pricing.inc1}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.pricing.inc2}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.pricing.inc3}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.pricing.inc4}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.pricing.inc5}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.pricing.inc6}</span>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400 text-center sm:text-left">
              {t.pricing.customNotice}
            </div>
            <button
              onClick={() => onOpenQuoteModal({ quantity: quantity, finish: 'Obsidian Black' })}
              className="w-full sm:w-auto px-8 py-3.5 text-xs font-bold text-black bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 rounded-xl shadow-xl shadow-amber-400/25 transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer font-['Space_Grotesk']"
            >
              <span>{t.pricing.btnLockTier.replace('{price}', unitPrice.toFixed(2))}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
