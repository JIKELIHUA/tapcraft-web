import React from 'react';
import { Check, X, ShieldAlert, Zap, TrendingUp, AlertTriangle } from 'lucide-react';

const COMPARISON_DATA = [
  {
    feature: 'Upfront Hardware Cost (per metal card)',
    tapcraft: '$11.00 – $14.00 (Direct Shenzhen Factory)',
    competitors: '$48.00 – $85.00 (Western Middlemen)',
    isAdvantage: true,
  },
  {
    feature: 'Annual Software App Subscription',
    tapcraft: '$0 / year (Forever 100% Free)',
    competitors: '$48 – $96 / user / year (Mandatory Lock-in)',
    isAdvantage: true,
  },
  {
    feature: '3-Year Total Cost (25 Sales Reps Fleet)',
    tapcraft: '$350 Total Investment',
    competitors: '$4,800 – $7,200 (Recurring Fees)',
    isAdvantage: true,
  },
  {
    feature: 'Laser Variable Name Engraving',
    tapcraft: 'Included Free on every single card',
    competitors: '+$5.00 to +$10.00 extra per card',
    isAdvantage: true,
  },
  {
    feature: 'URL & Profile Independence',
    tapcraft: '100% Open. Point to any link, vCard, or custom domain',
    competitors: 'Locked into proprietary walled-garden app',
    isAdvantage: true,
  },
  {
    feature: 'Build Quality & Weight',
    tapcraft: 'Solid 22g Surgical 304 Stainless Steel',
    competitors: 'Often thin 12g steel or plastic core hybrid',
    isAdvantage: true,
  },
  {
    feature: 'Digital 3D Proof Turnaround',
    tapcraft: 'Under 4 Hours from Artwork Receipt',
    competitors: '2 to 4 business days',
    isAdvantage: true,
  },
];

export default function CostComparison({ onOpenQuoteModal }) {
  return (
    <section id="comparison" className="py-20 md:py-32 bg-[#0C0F14] border-t border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-semibold text-red-300 font-mono uppercase tracking-wider">
            <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
            The Hidden Cost of Competitor Subscriptions
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Space_Grotesk'] tracking-tight">
            Stop Paying $1,200/Year for Business Cards.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Western brands (V1CE, Mobilo, Popl) trap corporate buyers into perpetual monthly SaaS fees. TapCraft gives you precision metal hardware with zero subscription fees, forever.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-[#12161E] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto w-full">
            <table className="w-full min-w-[620px] text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-[#0A0D12]">
                  <th className="py-5 px-6 text-sm font-bold text-slate-400 uppercase tracking-wider font-mono">
                    Evaluation Criteria
                  </th>
                  <th className="py-5 px-6 text-base font-black text-amber-300 bg-amber-400/10 border-l border-r border-amber-400/20 font-['Space_Grotesk']">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>TapCraft™ B2B Direct</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 text-sm font-bold text-slate-400 uppercase tracking-wider font-mono">
                    Western SaaS Competitors (Popl / Mobilo / V1CE)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {COMPARISON_DATA.map((row, index) => (
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
            <div className="text-xs text-slate-400 text-center sm:text-left">
              💡 <strong className="text-slate-200">No App Store requirement:</strong> Modern iPhones (XR and newer) and all NFC Androids read TapCraft cards natively via system background tag reading without installing any third-party app.
            </div>
            <button
              onClick={() => onOpenQuoteModal({})}
              className="px-6 py-2.5 text-xs font-bold text-black bg-amber-400 hover:bg-amber-300 rounded-lg shadow-lg shadow-amber-400/20 shrink-0 cursor-pointer"
            >
              Switch Fleet to TapCraft & Save
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
