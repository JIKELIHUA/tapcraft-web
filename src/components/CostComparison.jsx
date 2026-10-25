import React from 'react';
import { Check, X, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function CostComparison({ onOpenQuoteModal }) {
  const { t } = useLanguage();

  return (
    <section id="comparison" className="py-20 md:py-32 bg-[#0C0F14] border-t border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-semibold text-red-300 font-mono uppercase tracking-wider">
            <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
            {t.comparison.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Space_Grotesk'] tracking-tight">
            {t.comparison.title}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            {t.comparison.subtitle}
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-[#12161E] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto w-full">
            <table className="w-full min-w-[620px] text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-[#0A0D12]">
                  <th className="py-5 px-6 text-sm font-bold text-slate-400 uppercase tracking-wider font-mono">
                    {t.comparison.col1}
                  </th>
                  <th className="py-5 px-6 text-base font-black text-amber-300 bg-amber-400/10 border-l border-r border-amber-400/20 font-['Space_Grotesk']">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>{t.comparison.col2}</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 text-sm font-bold text-slate-400 uppercase tracking-wider font-mono">
                    {t.comparison.col3}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {t.comparison.rows.map((row, index) => (
                  <tr key={index} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 font-medium text-slate-200">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 font-semibold text-white bg-amber-400/[0.04] border-l border-r border-amber-400/20">
                      <div className="flex items-center gap-2.5 text-emerald-400 font-bold">
                        <Check className="w-4 h-4 shrink-0 text-emerald-400" />
                        <span>{row.tapcraft}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-400">
                      <div className="flex items-center gap-2.5 text-slate-400">
                        <X className="w-4 h-4 shrink-0 text-red-400/80" />
                        <span>{row.competitors}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Summary Footnote */}
          <div className="bg-[#0A0D12] p-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400 text-center sm:text-left max-w-2xl leading-relaxed">
              {t.comparison.footnote}
            </div>
            <button
              onClick={() => onOpenQuoteModal({})}
              className="px-6 py-2.5 text-xs font-bold text-black bg-amber-400 hover:bg-amber-300 rounded-lg shadow-lg shadow-amber-400/20 shrink-0 cursor-pointer font-['Space_Grotesk']"
            >
              {t.comparison.btnAction}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
