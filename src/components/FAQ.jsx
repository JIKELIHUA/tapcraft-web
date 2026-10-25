import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';

const FAQS = [
  {
    q: 'Does the recipient need any app to tap and read the card?',
    a: 'Absolutely not. TapCraft cards utilize ISO 14443A standard NFC protocols. Modern smartphones (iPhone XR and newer, plus virtually all Android phones from the last 7 years) have native background NFC readers active 24/7. When you tap the card, a native notification banner pops up instantly, opening the contact card or custom URL in under 0.2 seconds.'
  },
  {
    q: 'Can each metal card have a different employee name and title?',
    a: 'Yes! Variable data laser engraving is included completely free of charge on all wholesale fleet orders (MOQ 20+). You simply provide a CSV or spreadsheet with your team roster (Name, Title, and individual LinkedIn/profile URL), and our fiber laser machines engrave each card individually.'
  },
  {
    q: 'What happens if an employee leaves or updates their contact details?',
    a: 'You never have to discard the metal hardware. TapCraft allows you to map your cards to dynamic URLs, company redirects, or digital vCards. When details change, you simply update the redirect URL in seconds without needing to re-engrave or re-purchase the physical card.'
  },
  {
    q: 'Why does TapCraft have zero monthly software fees compared to Popl or Mobilo?',
    a: 'Western brands operate on a software subscription model, charging companies $48 to $96 per person every single year for basic link routing. TapCraft is a direct hardware manufacturer based in Shenzhen. We engineer premium surgical steel hardware with unlocked, open NFC chips. You own the hardware 100% outright—no monthly rent on your business cards, ever.'
  },
  {
    q: 'How fast is production and delivery to the US, Europe, and Australia?',
    a: 'Once your 3D digital proof is approved, production takes 3 to 5 business days in our precision laser facility. We dispatch via DHL International Express or FedEx Air Priority with full door-to-door tracking. Typical transit time to North America, Western Europe, and Australia is 3 to 5 business days.'
  },
  {
    q: 'What artwork format do you need for our company logo?',
    a: 'Vector files (AI, SVG, EPS, or vector PDF) yield the crispest laser engraving results. If you only have a high-resolution PNG or JPG, our in-house graphics engineering team will vectorize and optimize it for fiber laser engraving at zero additional charge.'
  },
  {
    q: 'Can we order a physical sample kit before placing our 100-card order?',
    a: 'Yes, we strongly encourage it. Our B2B Fleet Evaluation Kit ($29 with worldwide priority air shipping) includes all 3 signature metal finishes (Obsidian Black, 24K Brushed Gold, Cyber Titanium) and 1 Tap-to-Review acrylic stand so your executive leadership can experience the weight, laser depth, and tap speed firsthand.'
  }
];

export default function FAQ({ onOpenSampleModal }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-[#0C0F14] border-t border-white/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 font-mono uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            Enterprise Procurement FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Space_Grotesk'] tracking-tight">
            Frequently Asked Questions.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Everything your operations, HR, and procurement team needs to know about transitioning to TapCraft hardware.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#12161E] border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-white font-['Space_Grotesk']">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-white/5 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Evaluation Kit Reminder */}
        <div className="mt-12 text-center bg-[#090B0E] p-6 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            Still have specific enterprise compliance or NDA questions?
          </div>
          <button
            onClick={onOpenSampleModal}
            className="px-5 py-2.5 text-xs font-bold text-slate-200 hover:text-white border border-white/15 hover:border-amber-400/50 rounded-xl bg-white/5 cursor-pointer"
          >
            Order $29 Evaluation Kit &rarr;
          </button>
        </div>

      </div>
    </section>
  );
}
