import React from 'react';
import { ArrowRight, Check, Shield } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const PRODUCT_ACCENTS = {
  'obsidian-metal': 'border-amber-500/40',
  'gold-metal': 'border-amber-400',
  'titanium-metal': 'border-slate-400/40',
  'google-review-stand': 'border-blue-400/40',
  'eco-bamboo': 'border-emerald-500/40',
  'sample-fleet-kit': 'border-amber-300',
};

export default function ProductCatalog({ onOpenQuoteModal, onOpenSampleModal }) {
  const { t } = useLanguage();

  return (
    <section id="hardware" className="py-20 md:py-32 bg-[#090B0E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 font-mono">
            <Shield className="w-3.5 h-3.5 text-amber-400" />
            {t.catalog.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Space_Grotesk'] tracking-tight">
            {t.catalog.title}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            {t.catalog.subtitle}
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.catalog.items.map((prod) => {
            const accent = PRODUCT_ACCENTS[prod.id] || 'border-white/10';
            return (
              <div
                key={prod.id}
                className={`rounded-2xl bg-gradient-to-b from-[#13171F] to-[#0D1016] border ${accent} p-7 flex flex-col justify-between hover:border-amber-400 transition-all duration-300 group shadow-xl relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-colors"></div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      {prod.category}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-amber-400/10 text-amber-300 border border-amber-400/20">
                      {prod.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 font-['Space_Grotesk'] group-hover:text-amber-300 transition-colors">
                    {prod.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {prod.description}
                  </p>

                  <div className="bg-[#0A0C10] rounded-xl p-4 border border-white/5 mb-6 flex items-baseline justify-between">
                    <div>
                      <span className="text-xs text-slate-400 block font-mono">{t.catalog.wholesaleLabel}</span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl font-black text-amber-400 font-['Space_Grotesk']">
                          {prod.wholesalePrice}
                        </span>
                        <span className="text-xs text-slate-400">{t.catalog.unitLabel}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] text-slate-500 line-through">{t.catalog.msrpLabel} {prod.msrp}</span>
                      <span className="text-[10px] text-emerald-400 font-mono block font-semibold">
                        {t.catalog.saveLabel}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {prod.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <button
                    onClick={() => prod.id === 'sample-fleet-kit' ? onOpenSampleModal() : onOpenQuoteModal({ finish: prod.title })}
                    className="w-full py-3 text-xs font-bold text-slate-200 group-hover:text-black bg-white/5 group-hover:bg-amber-400 border border-white/10 group-hover:border-amber-400 rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer font-['Space_Grotesk']"
                  >
                    <span>{prod.id === 'sample-fleet-kit' ? t.catalog.btnKitOrder : t.catalog.btnCardQuote}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
