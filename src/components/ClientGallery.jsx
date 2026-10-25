import React, { useState } from 'react';
import { Camera, Sparkles, CheckCircle2, Shield, Eye, Layers } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import galleryImg from '../assets/images/gallery_client_cards.jpg';
import swatchesImg from '../assets/images/materials_swatches_macro.jpg';

export default function ClientGallery() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState('gallery');

  const clients = [
    {
      name: 'Apex Global Ventures',
      sector: lang === 'zh' ? '硅谷风险投资' : 'Silicon Valley Venture Capital',
      finish: lang === 'zh' ? '曜石哑光黑 304 不锈钢' : 'Matte Obsidian Black 304 Steel',
      specs: '0.05mm 激光深雕 · 银白底纹',
    },
    {
      name: 'Vance Luxury Real Estate',
      sector: lang === 'zh' ? '比弗利山庄豪宅经纪' : 'Beverly Hills Luxury Real Estate',
      finish: lang === 'zh' ? '24K 皇家拉丝金 PVD' : '24K Royale Brushed Gold PVD',
      specs: '镜面抛光倒角 · 纯黑雕刻',
    },
    {
      name: 'Kestrel Aerospace',
      sector: lang === 'zh' ? '航天商业防务' : 'Commercial Aerospace & Defense',
      finish: lang === 'zh' ? '赛博钛银拉丝' : 'Cyber Titanium Brushed Steel',
      specs: '原色拉丝纹理 · 纳米抗指纹',
    },
    {
      name: 'Aura Architecture',
      sector: lang === 'zh' ? '精品建筑设计事务所' : 'Boutique Architectural Studio',
      finish: lang === 'zh' ? '奢华磨砂玫瑰金' : 'Satin Rose Gold / Bronze',
      specs: '高透激光精雕 · 极简几何',
    },
  ];

  return (
    <section id="gallery" className="py-20 md:py-32 bg-[#090B0E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 font-mono uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5 text-amber-400" />
            {lang === 'zh' ? '真实实物摄影 · 深圳工厂出品' : 'Real Hardware Photography · Shenzhen Crafted'}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Space_Grotesk'] tracking-tight">
            {lang === 'zh' ? '实物拍摄：全球顶尖机构的实卡案例' : 'Physical Showcase: Crafted for Leading Firms'}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            {lang === 'zh'
              ? '拒绝廉价塑料与贴纸印刷。纯手工打磨倒角边缘与医用级 304 不锈钢，带来无可替代的物理信任感。'
              : 'Zero cheap plastic or sticker prints. Hand-finished chamfered edges and surgical-grade 304 stainless steel deliver unmatched tangible authority.'}
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab('gallery')}
            className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'gallery'
                ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/20'
                : 'bg-[#12161E] text-slate-300 border border-white/10 hover:text-white'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{lang === 'zh' ? '客户实卡全景展台 (Client Cards)' : 'Client Deployments'}</span>
          </button>

          <button
            onClick={() => setActiveTab('swatches')}
            className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'swatches'
                ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/20'
                : 'bg-[#12161E] text-slate-300 border border-white/10 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{lang === 'zh' ? '材质微距拉丝细节 (Macro Swatches)' : 'Macro Texture Detail'}</span>
          </button>
        </div>

        {/* Main Image Showcase Frame */}
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/10 bg-[#10141D] shadow-2xl relative group">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
            <img
              src={activeTab === 'gallery' ? galleryImg : swatchesImg}
              alt="TapCraft Physical NFC Metal Cards Photography"
              className="w-full h-full object-cover object-center group-hover:scale-101 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

            {/* Bottom Floating Info Pill */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15">
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>
                    {activeTab === 'gallery'
                      ? (lang === 'zh' ? '4款定制实物实拍：深雕光纤激光 + 镜面高光倒角' : '4 Bespoke Metal Cards: Precision Fiber Etched & Mirror Chamfered')
                      : (lang === 'zh' ? '微距实拍：曜石黑防指纹涂层、24K黄金细纹拉丝、赛博钛银工业原色' : 'Extreme Macro: Obsidian Matte, 24K Brushed Gold, Cyber Titanium Satin')}
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                  Weight: 22.0g · Thickness: 0.80mm · Substrate: 304 Solid Stainless Steel
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 font-mono text-[11px] border border-emerald-500/30">
                  ISO 14443A Passed
                </span>
                <span className="px-2.5 py-1 rounded-md bg-amber-400/20 text-amber-300 font-mono text-[11px] border border-amber-400/30">
                  Zero App Required
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Client Specs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 max-w-5xl mx-auto">
          {clients.map((c, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl bg-[#12161E] border border-white/5 hover:border-amber-400/30 transition-colors"
            >
              <div className="text-xs font-mono text-amber-400 mb-1 font-semibold">{c.sector}</div>
              <div className="text-sm font-bold text-white mb-2 font-['Space_Grotesk']">{c.name}</div>
              <div className="text-[11px] text-slate-300 space-y-1 pt-2 border-t border-white/5">
                <div className="text-slate-400">{c.finish}</div>
                <div className="text-emerald-400 font-mono text-[10px]">{c.specs}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}