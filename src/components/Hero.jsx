import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Eye, Smartphone, Download, UserCheck } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import heroMacroImg from '../assets/images/hero_metal_card_macro.jpg';
import lifestyleTapImg from '../assets/images/lifestyle_nfc_tap.jpg';

export default function Hero({ onOpenQuoteModal, onScrollToStudio }) {
  const { t, lang } = useLanguage();
  const [activeView, setActiveView] = useState('macro'); // 'macro' | 'tap'
  const [showIosPopup, setShowIosPopup] = useState(false);

  const handleScrollToSample = () => {
    const el = document.getElementById('sample-kit');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTriggerTap = () => {
    setActiveView('tap');
    setShowIosPopup(true);
  };

  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-28">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-amber-500/15 to-amber-700/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Shenzhen Hardware Capital Badge */}
            <div className="inline-flex items-center justify-center lg:justify-start gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] sm:text-xs font-medium text-slate-300 backdrop-blur-md max-w-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
              <span>{t.hero.badge}</span>
              <span className="text-white/30">|</span>
              <span className="text-amber-300 font-semibold">{t.hero.badgeHighlight}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-['Space_Grotesk']">
              {t.hero.titleLine1} <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                {t.hero.titleLine2}
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {t.hero.subtitle}
            </p>

            {/* Micro value tags */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 sm:gap-3 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-1.5 bg-white/[0.03] px-3 py-1.5 rounded-md border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.hero.pill1}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/[0.03] px-3 py-1.5 rounded-md border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.hero.pill2}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/[0.03] px-3 py-1.5 rounded-md border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.hero.pill3}</span>
              </div>
            </div>

            {/* CTAs - Direct actions that don't force a form */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onScrollToStudio}
                className="w-full sm:w-auto px-7 py-3.5 text-sm font-bold text-black bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 rounded-xl shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer group font-['Space_Grotesk']"
              >
                <Sparkles className="w-4 h-4" />
                <span>{lang === 'zh' ? '进入 3D 定制工作室' : 'Open 3D Card Studio'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={handleScrollToSample}
                className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-white hover:text-amber-300 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-amber-400/50 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer font-['Space_Grotesk']"
              >
                <span>{lang === 'zh' ? '查看评测实物样包 ($29)' : 'View Evaluation Sample Kit ($29)'}</span>
              </button>
            </div>

            {/* Trust Metrics Bar */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <div className="text-xl sm:text-2xl font-black text-white font-['Space_Grotesk']">{t.hero.stat1Val}</div>
                <div className="text-[11px] sm:text-xs text-slate-400">{t.hero.stat1Label}</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-white font-['Space_Grotesk']">{t.hero.stat2Val}</div>
                <div className="text-[11px] sm:text-xs text-slate-400">{t.hero.stat2Label}</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-white font-['Space_Grotesk']">{t.hero.stat3Val}</div>
                <div className="text-[11px] sm:text-xs text-slate-400">{t.hero.stat3Label}</div>
              </div>
            </div>

          </div>

          {/* Right Column: High-Res Real Product Photography Showcase */}
          <div className="lg:col-span-6 flex flex-col items-center">
            
            {/* View Switcher Controls */}
            <div className="flex items-center gap-2 mb-3 bg-black/40 p-1 rounded-xl border border-white/10 backdrop-blur-md">
              <button
                onClick={() => { setActiveView('macro'); setShowIosPopup(false); }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeView === 'macro'
                    ? 'bg-amber-400 text-black shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>{lang === 'zh' ? '实物微距微雕实拍' : 'Macro Studio Detail'}</span>
              </button>

              <button
                onClick={() => { setActiveView('tap'); setShowIosPopup(true); }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeView === 'tap'
                    ? 'bg-amber-400 text-black shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>{lang === 'zh' ? '真实手机碰一碰' : 'NFC Tap in Action'}</span>
              </button>
            </div>

            {/* Photo Container Frame */}
            <div className="relative w-full max-w-lg rounded-2xl overflow-hidden border border-white/15 bg-black shadow-2xl shadow-black/80 group">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-[#12161E] via-[#0A0D12] to-[#12161E]">
                <img
                  src={activeView === 'macro' ? heroMacroImg : lifestyleTapImg}
                  alt={activeView === 'macro' ? 'TapCraft Obsidian Black Metal Card Macro' : 'TapCraft NFC Metal Card Tapped on iPhone'}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                />
                
                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Animated NFC Tap Pulse Beacon */}
                {activeView === 'tap' && (
                  <div className="absolute top-[40%] left-[52%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <span className="absolute w-20 h-20 -top-10 -left-10 rounded-full bg-amber-400/25 animate-ping" />
                    <span className="absolute w-32 h-32 -top-16 -left-16 rounded-full bg-amber-400/15 animate-pulse" />
                    <span className="w-3.5 h-3.5 rounded-full bg-amber-400 shadow-lg shadow-amber-400 block" />
                  </div>
                )}

                {/* Simulated iOS Card Notification Pop-up */}
                {activeView === 'tap' && showIosPopup && (
                  <div className="absolute bottom-4 left-4 right-4 bg-[#1C1C1E]/95 backdrop-blur-xl border border-white/20 rounded-2xl p-3.5 shadow-2xl text-left">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300 font-bold text-xs font-['Space_Grotesk']">
                          TC
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">Alexander Chen</div>
                          <div className="text-[10px] text-slate-400">Vertex Capital · Managing Partner</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/30">
                        NFC 0.2s
                      </span>
                    </div>

                    <div className="flex items-center gap-2 pt-1 border-t border-white/10 text-xs">
                      <button 
                        onClick={() => alert(lang === 'zh' ? '已触发名片保存 (.vcf) 模拟下载！' : 'Simulated Contact .vcf Download!')}
                        className="flex-1 py-1.5 rounded-lg bg-amber-400 text-black font-bold text-[11px] flex items-center justify-center gap-1 hover:bg-amber-300 transition-colors"
                      >
                        <UserCheck className="w-3.5 h-3.5" />
                        <span>{lang === 'zh' ? '保存到手机通讯录' : 'Add to Contacts'}</span>
                      </button>
                      <button
                        onClick={() => setShowIosPopup(false)}
                        className="px-2.5 py-1.5 rounded-lg bg-white/10 text-slate-300 text-[11px] hover:bg-white/20"
                      >
                        {lang === 'zh' ? '关闭' : 'Dismiss'}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Spec Badge */}
              <div className="p-3 bg-[#0D1016] border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  {activeView === 'macro'
                    ? (lang === 'zh' ? '304 医用级实心钢 · 光纤激光深雕' : '304 Surgical Steel · Fiber Laser Etched')
                    : (lang === 'zh' ? '轻碰手机顶部 · 无需安装任何 App' : 'Tap Phone Top · Zero App Needed')}
                </span>

                {activeView === 'macro' ? (
                  <button
                    onClick={handleTriggerTap}
                    className="text-amber-400 hover:text-amber-300 underline underline-offset-2 cursor-pointer"
                  >
                    {lang === 'zh' ? '点击查看碰一碰 ➔' : 'See Tap Demo ➔'}
                  </button>
                ) : (
                  <button
                    onClick={() => setActiveView('macro')}
                    className="text-amber-400 hover:text-amber-300 underline underline-offset-2 cursor-pointer"
                  >
                    {lang === 'zh' ? '查看微距细节 ➔' : 'Back to Macro ➔'}
                  </button>
                )}
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}