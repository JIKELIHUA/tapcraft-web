import React from 'react';
import { Mail, MapPin, Globe, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Footer({ onOpenQuoteModal, onOpenSampleModal }) {
  const { t } = useLanguage();

  return (
    <>
      <footer className="bg-[#07090C] border-t border-white/10 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
            
            {/* Col 1 & 2: Brand & Positioning */}
            <div className="lg:col-span-2 space-y-4">
              <a href="#" className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 p-[1px]">
                  <div className="w-full h-full bg-[#0E1217] rounded-[11px] flex items-center justify-center">
                    <span className="text-amber-400 font-black text-lg font-['Space_Grotesk']">TC</span>
                  </div>
                </div>
                <span className="font-['Space_Grotesk'] text-xl font-bold tracking-tight text-white">
                  TapCraft<span className="text-amber-400">.</span>
                </span>
              </a>

              <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
                {t.footer.desc}
              </p>

              <div className="space-y-2 pt-2 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{t.footer.address}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <a href="mailto:wholesale@tapcraft.co" className="hover:text-amber-300 transition-colors">
                    wholesale@tapcraft.co &middot; jakelihua@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Globe className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{t.footer.shippingNotice}</span>
                </div>
              </div>
            </div>

            {/* Col 3: Hardware Lineup */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                {t.footer.colHardware}
              </h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#studio" className="hover:text-amber-300 transition-colors">Obsidian™ Matte Black (Steel)</a></li>
                <li><a href="#studio" className="hover:text-amber-300 transition-colors">Royale™ 24K Brushed Gold</a></li>
                <li><a href="#studio" className="hover:text-amber-300 transition-colors">Cyber Titanium™ Brushed Steel</a></li>
                <li><a href="#hardware" className="hover:text-amber-300 transition-colors">Tap-to-Review™ Stands</a></li>
                <li><a href="#hardware" className="hover:text-amber-300 transition-colors">TapCraft Eco™ Bamboo Cards</a></li>
              </ul>
            </div>

            {/* Col 4: Corporate Solutions */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                {t.footer.colSolutions}
              </h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#pricing" className="hover:text-amber-300 transition-colors">Real Estate Brokerage Fleets</a></li>
                <li><a href="#pricing" className="hover:text-amber-300 transition-colors">Private Wealth & Law Firms</a></li>
                <li><a href="#pricing" className="hover:text-amber-300 transition-colors">Hospitality Review Stands</a></li>
                <li><a href="#comparison" className="hover:text-amber-300 transition-colors">Enterprise Switch & Save (vs Popl)</a></li>
                <li><a href="#studio" className="hover:text-amber-300 transition-colors">Custom Laser Variable Engraving</a></li>
              </ul>
            </div>

            {/* Col 5: Direct Inquiries */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                {t.footer.colProcurement}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t.footer.samplePrompt}
              </p>
              <button
                onClick={onOpenSampleModal}
                className="w-full py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs text-center block transition-colors cursor-pointer"
              >
                {t.footer.btnSample}
              </button>
              <button
                onClick={() => onOpenQuoteModal({})}
                className="w-full py-2.5 px-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs text-center block transition-colors cursor-pointer shadow-md shadow-amber-400/20 font-['Space_Grotesk']"
              >
                {t.footer.btnQuote}
              </button>
            </div>

          </div>

          {/* Compliance & Standards Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-400">
            <div className="flex flex-wrap items-center gap-4 font-mono">
              {t.footer.standards.map((std, idx) => (
                <React.Fragment key={idx}>
                  {idx > 0 && <span>&middot;</span>}
                  <span>{std}</span>
                </React.Fragment>
              ))}
            </div>

            <div className="text-slate-400">
              {t.footer.copyright.replace('{year}', String(new Date().getFullYear()))}
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Bottom Mobile Quick Action Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0E1218]/95 backdrop-blur-xl border-t border-white/15 p-3 flex items-center justify-between gap-3 shadow-2xl">
        <button
          onClick={onOpenSampleModal}
          className="flex-1 py-3 text-xs font-semibold text-slate-200 bg-white/5 border border-white/15 rounded-xl text-center cursor-pointer"
        >
          {t.footer.mobileSample}
        </button>
        <button
          onClick={() => onOpenQuoteModal({})}
          className="flex-1 py-3 text-xs font-bold text-black bg-gradient-to-r from-amber-300 to-amber-500 rounded-xl shadow-lg shadow-amber-400/20 text-center cursor-pointer flex items-center justify-center gap-1.5 font-['Space_Grotesk']"
        >
          <span>{t.footer.mobileQuote}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </>
  );
}
