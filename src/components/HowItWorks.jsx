import React from 'react';
import { UploadCloud, FileCheck, Truck, ArrowRight, Clock, CheckCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const STEP_ICONS = [UploadCloud, FileCheck, Truck];

export default function HowItWorks({ onOpenQuoteModal }) {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 bg-[#0C0F14] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 font-mono uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            {t.howItWorks.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Space_Grotesk'] tracking-tight">
            {t.howItWorks.title}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {t.howItWorks.steps.map((s, idx) => {
            const Icon = STEP_ICONS[idx] || UploadCloud;
            return (
              <div
                key={idx}
                className="relative rounded-2xl bg-[#12161E] border border-white/10 p-8 flex flex-col justify-between hover:border-amber-400/50 transition-all duration-300 group shadow-xl"
              >
                <div className="absolute top-6 right-6 font-['Space_Grotesk'] text-4xl font-black text-white/5 group-hover:text-amber-400/10 transition-colors">
                  {s.step}
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-amber-300 bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20">
                      {s.time}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 font-['Space_Grotesk']">
                    {s.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4 font-normal">
                    {s.desc}
                  </p>

                  <div className="p-3.5 rounded-xl bg-[#090B0E] border border-white/5 text-xs text-slate-400 leading-normal">
                    {s.detail}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{t.howItWorks.guarantee}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-amber-500/15 via-amber-400/20 to-amber-500/15 border border-amber-400/30 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white font-['Space_Grotesk']">
              {t.howItWorks.bottomPrompt}
            </h4>
            <p className="text-xs text-amber-200/80">
              {t.howItWorks.bottomDesc}
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteModal({})}
            className="px-6 py-3 text-xs font-bold text-black bg-amber-400 hover:bg-amber-300 rounded-xl shadow-lg shadow-amber-400/20 transition-all shrink-0 flex items-center gap-2 cursor-pointer font-['Space_Grotesk']"
          >
            <span>{t.howItWorks.btnProof}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
