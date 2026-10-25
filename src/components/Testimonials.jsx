import React from 'react';
import { Star, Building2, Scale, Utensils } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const REVIEW_ICONS = [Building2, Scale, Utensils];

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 bg-[#090B0E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-xs font-semibold text-amber-300 font-mono uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            {t.testimonials.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Space_Grotesk'] tracking-tight">
            {t.testimonials.title}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.testimonials.reviews.map((rev, idx) => {
            const Icon = REVIEW_ICONS[idx] || Building2;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#12161E] border border-white/10 p-8 flex flex-col justify-between hover:border-amber-400/40 transition-all duration-300 shadow-xl relative"
              >
                <div>
                  <div className="flex items-center gap-1 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                    "{rev.quote}"
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white font-['Space_Grotesk']">
                        {rev.author}
                      </div>
                      <div className="text-xs text-slate-400">
                        {rev.role} &middot; {rev.company}
                      </div>
                      <div className="text-[10px] text-amber-400/90 font-mono mt-0.5">
                        {rev.location}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 px-3 py-1.5 rounded-lg bg-[#0A0D12] text-[11px] font-mono text-slate-400 border border-white/5 truncate">
                    {rev.product}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
