import React, { useState } from 'react';
import { Package, Check, Truck, ShieldCheck, ArrowRight, Sparkles, Copy, Mail } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { APP_CONFIG } from '../config';
import sampleKitImg from '../assets/images/sample_kit_unboxing.jpg';

export default function SampleKitSection({ onOpenSampleModal }) {
  const { t, lang } = useLanguage();
  const [copiedWechat, setCopiedWechat] = useState(false);

  const handleCopyWechat = () => {
    navigator.clipboard.writeText(APP_CONFIG.wechatId);
    setCopiedWechat(true);
    setTimeout(() => setCopiedWechat(false), 2000);
  };

  return (
    <section id="sample-kit" className="py-20 md:py-32 bg-[#0B0E14] relative border-t border-b border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/25 text-xs font-semibold text-amber-300 font-mono uppercase tracking-wider">
            <Package className="w-3.5 h-3.5" />
            {lang === 'zh' ? '实物先行 · 零试错成本' : 'Physical Verification · Zero Risk'}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Space_Grotesk'] tracking-tight">
            {lang === 'zh' ? 'TapCraft 实物评测样盒' : 'TapCraft Evaluation Sample Kit'}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            {lang === 'zh' 
              ? '先亲手触摸 22g 实心金属的压手分量与光纤微雕精度，再做团队采购决策。大货采购全额抵扣样卡费用。'
              : 'Feel the 22-gram solid stainless steel heft and laser-etched precision in your own hands before committing to a fleet order. 100% refundable against bulk production.'}
          </p>
        </div>

        {/* Product Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#10141D] rounded-3xl border border-white/10 p-6 sm:p-10 shadow-2xl overflow-hidden">
          
          {/* Left: Real High-Res Unboxing Photography */}
          <div className="lg:col-span-7 relative group">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
              <img 
                src={sampleKitImg} 
                alt="TapCraft Evaluation Sample Kit Unboxed" 
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Badge overlay on image */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/90 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10">
                <span className="flex items-center gap-1.5 text-amber-300">
                  <Sparkles className="w-3.5 h-3.5" />
                  {lang === 'zh' ? '实物拍摄 · 现货顺丰/DHL特快直飞' : 'Real Studio Photo · Ready for DHL Express'}
                </span>
                <span className="text-slate-400">0.8mm 304 Steel</span>
              </div>
            </div>
          </div>

          {/* Right: Kit Specs & Direct Ordering */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Price Badge */}
            <div className="flex items-baseline gap-3 pb-4 border-b border-white/10">
              <span className="text-4xl sm:text-5xl font-black text-white font-['Space_Grotesk']">
                $29
              </span>
              <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">
                {lang === 'zh' ? '美元 / 顺丰包邮 · DHL 全球直发' : 'USD / Free Express Worldwide Shipping'}
              </span>
            </div>

            {/* What's Inside The Box */}
            <div className="space-y-3">
              <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                {lang === 'zh' ? '样盒内含清单 (Box Contents)' : "What's Included in the Kit"}
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">1x 曜石哑光黑 (Obsidian Black)</strong> — 304不锈钢实卡 + 哑光 PVD 防指纹涂层
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">1x 24K 皇家拉丝金 (Royale Gold)</strong> — 真金真空电镀 + 高精光纤微雕样张
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">1x 赛博钛银 (Cyber Titanium)</strong> — 航天拉丝原色 + 镜面高光倒角
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">1x 碰一碰亚克力立牌</strong> — 商用前台/展会 Tap-to-Review 测试展具
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">芯片质检卡 + $29 抵扣代码</strong> — 后续大货订单直接冲抵 $29（相当于样卡免费）
                  </span>
                </li>
              </ul>
            </div>

            {/* Value Guarantees */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <Truck className="w-4 h-4 text-amber-400 mb-1" />
                <div className="text-xs font-bold text-white">{lang === 'zh' ? '24小时内顺丰发货' : 'Ships in 24 Hours'}</div>
                <div className="text-[10px] text-slate-400">{lang === 'zh' ? '顺丰空运 / DHL 直飞' : 'Tracked Express Air'}</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 mb-1" />
                <div className="text-xs font-bold text-white">{lang === 'zh' ? '大货 100% 抵扣' : '100% Bulk Credit'}</div>
                <div className="text-[10px] text-slate-400">{lang === 'zh' ? '试样成本全额返还' : 'Sample cost deducted'}</div>
              </div>
            </div>

            {/* Direct Action Buttons - NO intrusive forms */}
            <div className="pt-2 space-y-2.5">
              <button
                onClick={() => onOpenSampleModal()}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-bold text-sm shadow-xl shadow-amber-400/20 flex items-center justify-center gap-2 transition-all cursor-pointer font-['Space_Grotesk']"
              >
                <span>{lang === 'zh' ? '立即申领评测样盒 ($29 顺丰包邮)' : 'Claim Evaluation Sample Kit ($29)'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${APP_CONFIG.contactEmail}?subject=TapCraft%20Sample%20Kit%20Order%20($29)`}
                  className="flex-1 py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-white/10"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>{lang === 'zh' ? '邮件直接订购' : 'Order via Email'}</span>
                </a>

                <button
                  onClick={handleCopyWechat}
                  className="flex-1 py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-white/10"
                >
                  <Copy className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{copiedWechat ? (lang === 'zh' ? '微信号已复制！' : 'WeChat Copied!') : (lang === 'zh' ? '微信直订样盒' : 'WeChat Order')}</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}