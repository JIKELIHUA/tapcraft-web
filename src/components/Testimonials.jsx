import React from 'react';
import { Star, Quote, Building2, Utensils, Scale, TrendingUp } from 'lucide-react';

const REVIEWS = [
  {
    quote: "We equipped our 45 residential agents with TapCraft Obsidian black cards. Clients are genuinely blown away when our agents tap their phone at open houses. But the biggest win for management: zero recurring software fees. We saved over $3,200 this year alone.",
    author: "Marcus Vance",
    role: "Managing Director",
    company: "Vance & Sterling Luxury Real Estate",
    location: "Miami, Florida",
    product: "45x Obsidian Matte Black Metal Cards",
    icon: Building2,
    stars: 5,
  },
  {
    quote: "We were paying Mobilo $72 per user annually for 28 attorneys. It made no sense to pay rent on a business card. TapCraft's 22g surgical steel feels twice as heavy as Mobilo, the laser engraving is razor-sharp, and we own the hardware outright.",
    author: "Elena Rostova",
    role: "Head of Operations",
    company: "Apex Legal Partners LLP",
    location: "London, UK",
    product: "28x Cyber Titanium Brushed Steel Cards",
    icon: Scale,
    stars: 5,
  },
  {
    quote: "We placed TapCraft acrylic Tap-to-Review stands at all 14 of our dining tables and front desk. Our 5-star Google reviews went from 180 to over 740 in four months. The customer just taps their phone and the review box pops up instantly.",
    author: "Chef Julian Rossi",
    role: "Owner & Executive Chef",
    company: "Osteria Del Porto",
    location: "Sydney, Australia",
    product: "14x Tap-to-Review Countertop Stands",
    icon: Utensils,
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-[#090B0E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-xs font-semibold text-amber-300 font-mono uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            Verified Enterprise Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Space_Grotesk'] tracking-tight">
            Trusted by 500+ High-Growth Fleets.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            See how real estate brokerages, corporate law firms, and hospitality venues leverage TapCraft precision hardware.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev, idx) => {
            const Icon = rev.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#12161E] border border-white/10 p-8 flex flex-col justify-between hover:border-amber-400/40 transition-all duration-300 shadow-xl relative"
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-5">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Quote text */}
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
                    Deployment: {rev.product}
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
