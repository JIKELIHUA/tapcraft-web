import React, { useState } from 'react';
import { Sparkles, RefreshCw, QrCode, Wifi, ArrowRight, Check, SlidersHorizontal } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const FINISH_STYLES = {
  obsidian: {
    cardStyle: 'bg-gradient-to-br from-[#1C2026] via-[#12151A] to-[#0A0C0E] border-neutral-700 text-slate-100 shadow-black/80',
    laserText: 'text-slate-100 drop-shadow-[0_1px_1px_rgba(255,255,255,0.2)]',
    swatch: 'bg-[#181B20] border-neutral-600',
  },
  gold: {
    cardStyle: 'bg-gradient-to-br from-[#E6C673] via-[#C99C3B] to-[#916719] border-amber-300 text-stone-900 shadow-amber-950/40',
    laserText: 'text-stone-900 drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]',
    swatch: 'bg-gradient-to-r from-amber-400 to-amber-600 border-amber-300',
  },
  titanium: {
    cardStyle: 'bg-gradient-to-br from-[#E2E6EA] via-[#B8C2CC] to-[#8894A2] border-slate-300 text-slate-900 shadow-slate-950/40',
    laserText: 'text-slate-900 drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]',
    swatch: 'bg-gradient-to-r from-slate-200 to-slate-400 border-slate-300',
  },
  rose: {
    cardStyle: 'bg-gradient-to-br from-[#E0A894] via-[#BA7560] to-[#783F2F] border-rose-300 text-rose-950 shadow-rose-950/40',
    laserText: 'text-rose-950 drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]',
    swatch: 'bg-gradient-to-r from-rose-300 to-rose-500 border-rose-200',
  },
};

export default function CardStudio({ onOpenQuoteModal }) {
  const { t, lang } = useLanguage();
  const [selectedFinishId, setSelectedFinishId] = useState('obsidian');
  const [companyName, setCompanyName] = useState('NEXUS VENTURES');
  const [cardholderName, setCardholderName] = useState('SARAH JENNINGS');
  const [cardholderTitle, setCardholderTitle] = useState('MANAGING PARTNER');
  const [destinationUrl, setDestinationUrl] = useState('https://linkedin.com/in/sarah-jennings');
  const [isFlipped, setIsFlipped] = useState(false);

  const activeFinish = t.studio.finishes.find((f) => f.id === selectedFinishId) || t.studio.finishes[0];
  const activeStyle = FINISH_STYLES[selectedFinishId] || FINISH_STYLES.obsidian;

  const handleApplyToQuote = () => {
    onOpenQuoteModal({
      finish: activeFinish.name,
      company: companyName,
      contactPerson: cardholderName,
      customUrl: destinationUrl
    });
  };

  return (
    <section id="studio" className="py-20 md:py-32 bg-[#0C0F14] relative border-t border-b border-white/10">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-xs font-semibold text-amber-300 font-mono uppercase tracking-wider">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            {t.studio.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Space_Grotesk'] tracking-tight">
            {t.studio.title}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            {t.studio.subtitle}
          </p>
        </div>

        {/* Studio Workspace: 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Interactive 3D Card Simulation Canvas */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center">
            
            {/* Card Perspective Wrapper */}
            <div className="w-full max-w-lg relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/20 via-white/5 to-amber-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-700"></div>

              {/* Physical Metal Card Container */}
              <div 
                className={`relative aspect-[1.586/1] w-full rounded-2xl border p-7 sm:p-9 flex flex-col justify-between shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden ${activeStyle.cardStyle}`}
                onClick={() => setIsFlipped(!isFlipped)}
                title="Click anywhere on card to flip between Front and Back"
              >
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-gradient-to-tr from-transparent via-white/40 to-transparent"></div>

                {!isFlipped ? (
                  /* FRONT FACE: Laser Engraved Corporate Identity */
                  <>
                    <div className="flex items-center justify-between z-10">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-black/20 border border-current/20 flex items-center justify-center">
                          <span className="font-bold text-sm font-['Space_Grotesk'] tracking-tighter">TC</span>
                        </div>
                        <span className="font-bold tracking-widest text-xs font-['Space_Grotesk'] uppercase opacity-90">
                          TAPCRAFT
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/15 border border-current/20 text-[10px] font-mono tracking-wider">
                        <Wifi className="w-3 h-3 rotate-90" />
                        <span>NFC TAP</span>
                      </div>
                    </div>

                    <div className="my-auto z-10 text-left">
                      <div className="text-[10px] tracking-widest uppercase font-mono opacity-70 mb-1">
                        PRECISION FIBER LASER ETCHED
                      </div>
                      <div className={`text-2xl sm:text-3xl font-extrabold font-['Space_Grotesk'] tracking-tight ${activeStyle.laserText}`}>
                        {companyName.toUpperCase() || 'YOUR COMPANY'}
                      </div>
                    </div>

                    <div className="flex items-end justify-between z-10 pt-4 border-t border-current/15">
                      <div>
                        <div className={`text-sm sm:text-base font-bold tracking-wide uppercase ${activeStyle.laserText}`}>
                          {cardholderName || 'CARDHOLDER NAME'}
                        </div>
                        <div className="text-xs opacity-75 font-medium tracking-wide">
                          {cardholderTitle || 'POSITION / TITLE'}
                        </div>
                      </div>
                      <div className="text-[10px] font-mono opacity-80 uppercase tracking-widest">
                        SOLID 304 STEEL
                      </div>
                    </div>
                  </>
                ) : (
                  /* BACK FACE: Target NFC Antenna Zone, Dynamic QR Code & Serial */
                  <>
                    <div className="flex items-center justify-between z-10">
                      <div className="text-[10px] font-mono tracking-wider opacity-80 uppercase">
                        TAP ANY SMARTPHONE HERE
                      </div>
                      <div className="flex items-center gap-1 text-[10px] font-mono opacity-80">
                        <span>ISO 14443A</span>
                      </div>
                    </div>

                    <div className="my-auto z-10 flex items-center justify-between gap-6">
                      <div className="flex flex-col space-y-1 text-left">
                        <div className="text-xs font-mono opacity-70 uppercase">{t.studio.backTargetLabel}</div>
                        <div className="text-sm font-semibold truncate max-w-[240px] font-mono opacity-90">
                          {destinationUrl}
                        </div>
                        <div className="text-[10px] text-emerald-300 font-medium pt-1 flex items-center gap-1">
                          <Check className="w-3 h-3" />
                          <span>{t.studio.backNoApp}</span>
                        </div>
                      </div>

                      <div className="w-20 h-20 bg-white p-1.5 rounded-lg shrink-0 shadow-md flex items-center justify-center">
                        <QrCode className="w-full h-full text-black" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between z-10 pt-4 border-t border-current/15 text-[10px] font-mono opacity-70">
                      <span>{t.studio.backSn}</span>
                      <span>{t.studio.backNoSub}</span>
                    </div>
                  </>
                )}
              </div>

              {/* Flip Card Action Button */}
              <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                <button
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="flex items-center gap-2 hover:text-amber-400 transition-colors cursor-pointer px-3 py-1.5 rounded-lg bg-white/5 border border-white/10"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>
                    {t.studio.clickFlip.replace('{face}', isFlipped ? t.studio.faceBack : t.studio.faceFront)}
                  </span>
                </button>
                <span className="font-mono text-[11px] text-slate-500">
                  {t.studio.weightInfo}
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Customizer Controls */}
          <div className="lg:col-span-5 space-y-6 bg-[#12161E] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl">
            
            {/* 1. Material & Finish Selector */}
            <div>
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-3 font-mono">
                {t.studio.step1Title}
              </label>
              <div className="grid grid-cols-2 gap-3">
                {t.studio.finishes.map((finish) => {
                  const style = FINISH_STYLES[finish.id] || FINISH_STYLES.obsidian;
                  const isSelected = selectedFinishId === finish.id;
                  return (
                    <button
                      key={finish.id}
                      onClick={() => setSelectedFinishId(finish.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'border-amber-400 bg-amber-400/10 shadow-lg shadow-amber-400/15 ring-1 ring-amber-400/40'
                          : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.06]'
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className={`w-3.5 h-3.5 rounded-full border shrink-0 ${style.swatch}`} />
                          <span className="text-xs font-bold text-white truncate">{finish.name}</span>
                        </div>
                        <div className="text-[10px] text-slate-400 line-clamp-1 mb-2">
                          {finish.material}
                        </div>
                      </div>
                      {finish.badge && (
                        <div>
                          <span className="inline-block text-[9px] font-mono px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20">
                            {finish.badge}
                          </span>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Text Engraving Fields */}
            <div className="space-y-4 pt-2">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block font-mono">
                {t.studio.step2Title}
              </label>

              <div>
                <label className="text-xs text-slate-400 block mb-1">{t.studio.companyLabel}</label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  maxLength={30}
                  className="w-full bg-[#090B0E] border border-white/15 focus:border-amber-400 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none transition-colors"
                  placeholder={t.studio.companyPlaceholder}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">{t.studio.nameLabel}</label>
                  <input
                    type="text"
                    value={cardholderName}
                    onChange={(e) => setCardholderName(e.target.value)}
                    maxLength={26}
                    className="w-full bg-[#090B0E] border border-white/15 focus:border-amber-400 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none transition-colors"
                    placeholder={t.studio.namePlaceholder}
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">{t.studio.roleLabel}</label>
                  <input
                    type="text"
                    value={cardholderTitle}
                    onChange={(e) => setCardholderTitle(e.target.value)}
                    maxLength={32}
                    className="w-full bg-[#090B0E] border border-white/15 focus:border-amber-400 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none transition-colors"
                    placeholder={t.studio.rolePlaceholder}
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-400 block mb-1">{t.studio.urlLabel}</label>
                <input
                  type="text"
                  value={destinationUrl}
                  onChange={(e) => setDestinationUrl(e.target.value)}
                  className="w-full bg-[#090B0E] border border-white/15 focus:border-amber-400 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none transition-colors font-mono text-xs"
                  placeholder={t.studio.urlPlaceholder}
                />
              </div>
            </div>

            {/* CTA: Apply to Quote */}
            <div className="pt-2">
              <button
                onClick={handleApplyToQuote}
                className="w-full py-4 text-sm font-bold text-black bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 rounded-xl shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer font-['Space_Grotesk']"
              >
                <span>{t.studio.ctaSave}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-slate-400 text-center mt-2.5">
                {t.studio.turnaroundNotice}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
