import React, { useState } from 'react';
import { ShieldCheck, Sparkles, Menu, X, ArrowRight, Languages, Globe } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Navbar({ onOpenQuoteModal, onOpenSampleModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, lang, toggleLang } = useLanguage();

  return (
    <>
      {/* Main Navbar */}
      <nav className="sticky top-0 z-40 backdrop-blur-xl bg-[#090B0E]/95 border-b border-white/10 transition-all w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 p-[1px] shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-shadow">
              <div className="w-full h-full bg-[#0E1217] rounded-[11px] flex items-center justify-center">
                <span className="text-amber-400 font-black text-xl font-['Space_Grotesk'] tracking-tighter">TC</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-['Space_Grotesk'] text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                  TapCraft<span className="text-amber-400">.</span>
                </span>
                <span className="px-1.5 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-amber-400/10 text-amber-300 border border-amber-400/20 rounded">
                  {t.nav.badge}
                </span>
              </div>
              <span className="hidden sm:block text-[10px] text-slate-400 tracking-wider font-mono">
                {t.nav.brandSub}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#studio" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></span>
              {t.nav.studio}
            </a>
            <a href="#hardware" className="hover:text-amber-300 transition-colors">
              {t.nav.hardware}
            </a>
            <a href="#comparison" className="hover:text-amber-300 transition-colors">
              {t.nav.comparison}
            </a>
            <a href="#pricing" className="hover:text-amber-300 transition-colors">
              {t.nav.pricing}
            </a>
            <a href="#faq" className="hover:text-amber-300 transition-colors">
              {t.nav.faq}
            </a>
          </div>

          {/* Header Action Buttons & Language Switcher */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher Pill */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-amber-300 border border-white/10 hover:border-amber-400/40 rounded-lg transition-all bg-white/[0.03] hover:bg-white/[0.08] cursor-pointer"
              title={lang === 'en' ? 'Switch to 中文' : 'Switch to English'}
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.nav.langToggle}</span>
            </button>

            <button
              onClick={() => onOpenSampleModal()}
              className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white border border-white/10 hover:border-amber-400/40 rounded-lg transition-all bg-white/[0.03] hover:bg-white/[0.08] cursor-pointer"
            >
              {t.nav.sampleKit}
            </button>
            <button
              onClick={() => onOpenQuoteModal({})}
              className="px-4 py-2 text-xs font-bold text-black bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 rounded-lg shadow-lg shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 flex items-center gap-1.5 cursor-pointer"
            >
              <span>{t.nav.getQuote}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Quick Action & Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Mobile Language Button */}
            <button
              onClick={toggleLang}
              className="px-2 py-1.5 text-xs font-semibold text-amber-300 border border-amber-400/30 rounded-lg bg-amber-400/10 cursor-pointer flex items-center gap-1"
            >
              <Globe className="w-3 h-3 text-amber-400" />
              <span>{t.nav.langToggle}</span>
            </button>

            <button
              onClick={() => onOpenQuoteModal({})}
              className="px-2.5 py-1.5 text-xs font-bold text-black bg-amber-400 rounded-lg cursor-pointer shadow-sm shadow-amber-400/20"
            >
              {t.nav.quoteShort}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-300 hover:text-white rounded-lg border border-white/10 bg-white/5 cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-white/10 bg-[#0E1218]/98 px-6 py-6 space-y-4 shadow-2xl backdrop-blur-2xl">
            <div className="flex flex-col space-y-3 text-base font-medium text-slate-300">
              <a
                href="#studio"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-amber-300 border-b border-white/5 flex items-center justify-between"
              >
                <span>{t.nav.studio}</span>
                <span className="text-xs bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded font-mono">3D</span>
              </a>
              <a
                href="#hardware"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-amber-300 border-b border-white/5"
              >
                {t.nav.hardware}
              </a>
              <a
                href="#comparison"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-amber-300 border-b border-white/5"
              >
                {t.nav.comparison}
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-amber-300 border-b border-white/5"
              >
                {t.nav.pricing}
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-amber-300 border-b border-white/5"
              >
                {t.nav.faq}
              </a>
            </div>
            
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSampleModal();
                }}
                className="w-full py-3 text-sm font-semibold text-slate-200 border border-white/15 rounded-xl bg-white/5 text-center"
              >
                {t.nav.sampleKit}
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal({});
                }}
                className="w-full py-3 text-sm font-bold text-black bg-gradient-to-r from-amber-300 to-amber-500 rounded-xl shadow-lg shadow-amber-500/20 text-center"
              >
                {t.nav.getQuote}
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
