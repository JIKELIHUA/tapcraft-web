import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Download, Copy, CheckCircle2, FileText } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { APP_CONFIG } from '../config';

export default function PricingCalculator({ onOpenQuoteModal }) {
  const { t, lang } = useLanguage();
  const [quantity, setQuantity] = useState(100);
  const [copiedQuote, setCopiedQuote] = useState(false);

  const getUnitPrice = (qty) => {
    if (qty === 1) return 49.00;
    if (qty < 10) return 39.00;
    if (qty < 30) return 22.00;
    if (qty < 50) return 18.00;
    if (qty < 100) return 15.50;
    if (qty < 250) return 13.50;
    if (qty < 500) return 11.00;
    return 9.50;
  };

  const unitPrice = getUnitPrice(quantity);
  const totalCost = (quantity * unitPrice).toFixed(2);
  const paperCardsReplaced = (quantity * 500).toLocaleString();
  const savings = quantity === 1
    ? '1,200+'
    : Math.max(0, (quantity * 55 + quantity * 72 * 2) - (quantity * unitPrice)).toLocaleString();

  const handleCopyBreakdown = () => {
    const text = lang === 'zh'
      ? `【TapCraft B2B 智能金属名片批量出厂核算单】
• 采购数量：${quantity} 张
• 工艺基材：304 医用级实心不锈钢 + 光纤激光深雕
• 出厂单价：$${unitPrice.toFixed(2)} 美元/张 (约 ¥${(unitPrice * 7.25).toFixed(1)}元)
• 订单总额：$${totalCost} 美元 (约 ¥${(Number(totalCost) * 7.25).toFixed(0)}元)
• 软件平台费：永久 $0 元 (终身免订阅费)
• 国际/国内物流：顺丰包邮 / DHL 特快直航
• 官方联系：${APP_CONFIG.contactEmail} | 商务微信：${APP_CONFIG.wechatId}`
      : `TapCraft B2B Formal Wholesale Quotation:
• Fleet Quantity: ${quantity} Cards
• Substrate: 304 Solid Stainless Steel + Precision Fiber Laser Etch
• Tiered Unit Price: $${unitPrice.toFixed(2)} / card
• Total Order Value: $${totalCost} USD
• Software Subscription: $0 Lifetime Free (Zero SaaS Fee)
• Logistics: Free Express Worldwide Air Shipping (DHL / SF)
• Official Contact: ${APP_CONFIG.contactEmail} | WeChat: ${APP_CONFIG.wechatId}`;

    navigator.clipboard.writeText(text);
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(false), 2000);
  };

  const handleDownloadQuoteCard = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 700;
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = '#090B0E';
    ctx.fillRect(0, 0, 1200, 700);

    // Decorative gradient box
    const grad = ctx.createLinearGradient(0, 0, 1200, 700);
    grad.addColorStop(0, '#131722');
    grad.addColorStop(1, '#0C0F14');
    ctx.fillStyle = grad;
    ctx.roundRect(40, 40, 1120, 620, 24);
    ctx.fill();
    ctx.strokeStyle = '#F59E0B33';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Brand Header
    ctx.fillStyle = '#F59E0B';
    ctx.font = 'bold 36px "Space Grotesk", sans-serif';
    ctx.fillText('TapCraft.', 80, 110);

    ctx.fillStyle = '#94A3B8';
    ctx.font = '16px monospace';
    ctx.fillText('OFFICIAL B2B FLEET SPECIFICATION & QUOTATION', 80, 140);

    // Divider
    ctx.strokeStyle = '#FFFFFF1A';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(80, 165);
    ctx.lineTo(1120, 165);
    ctx.stroke();

    // Key metrics boxes
    // Box 1: Quantity
    ctx.fillStyle = '#1A202C';
    ctx.roundRect(80, 195, 300, 130, 16);
    ctx.fill();
    ctx.fillStyle = '#94A3B8';
    ctx.font = '14px monospace';
    ctx.fillText('ORDER QUANTITY', 105, 230);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 44px "Space Grotesk", sans-serif';
    ctx.fillText(`${quantity} Cards`, 105, 285);

    // Box 2: Unit Price
    ctx.fillStyle = '#1A202C';
    ctx.roundRect(420, 195, 320, 130, 16);
    ctx.fill();
    ctx.fillStyle = '#94A3B8';
    ctx.font = '14px monospace';
    ctx.fillText('TIERED UNIT PRICE', 445, 230);
    ctx.fillStyle = '#F59E0B';
    ctx.font = 'bold 44px "Space Grotesk", sans-serif';
    ctx.fillText(`$${unitPrice.toFixed(2)} / ea`, 445, 285);

    // Box 3: Total
    ctx.fillStyle = '#1A202C';
    ctx.roundRect(780, 195, 340, 130, 16);
    ctx.fill();
    ctx.fillStyle = '#94A3B8';
    ctx.font = '14px monospace';
    ctx.fillText('TOTAL ORDER VALUE', 805, 230);
    ctx.fillStyle = '#10B981';
    ctx.font = 'bold 44px "Space Grotesk", sans-serif';
    ctx.fillText(`$${totalCost} USD`, 805, 285);

    // Specifications list
    ctx.fillStyle = '#F59E0B';
    ctx.font = 'bold 16px monospace';
    ctx.fillText('INCLUDED HARDWARE & FACTORY SPECIFICATIONS:', 80, 375);

    const specs = [
      '• Substrate: 304 Surgical-Grade Solid Stainless Steel (0.80mm Thickness / 22g Weight)',
      '• NFC Core: High-Frequency NTAG216 Chip (ISO 14443A Universal Smartphone Compatible)',
      '• Precision: Fiber Laser Deep Etching (0.05mm Micro-depth with Hand-Chamfered Edges)',
      '• Software Policy: Lifetime Zero Software Subscriptions ($0 / year perpetual)',
      '• Logistics: Express Air Courier Dispatch directly from Shenzhen Hardware Hub',
    ];

    ctx.fillStyle = '#E2E8F0';
    ctx.font = '18px sans-serif';
    specs.forEach((spec, idx) => {
      ctx.fillText(spec, 80, 420 + idx * 36);
    });

    // Footer Contact Bar
    ctx.fillStyle = '#64748B';
    ctx.font = '15px monospace';
    ctx.fillText(`Official Procurement Inquiries: ${APP_CONFIG.contactEmail}  |  WeChat: ${APP_CONFIG.wechatId}`, 80, 625);

    // Download trigger
    const link = document.createElement('a');
    link.download = `TapCraft_Formal_Quote_${quantity}_Cards.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <section id="pricing" className="py-20 md:py-32 bg-[#090B0E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-xs font-semibold text-emerald-300 font-mono uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            {t.pricing.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Space_Grotesk'] tracking-tight">
            {t.pricing.title}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* Preset Tier Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {t.pricing.tiers.map((tier) => (
            <button
              key={tier.qty}
              onClick={() => setQuantity(tier.qty)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                quantity === tier.qty
                  ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/25 ring-2 ring-amber-300'
                  : 'bg-[#12161E] text-slate-300 border border-white/10 hover:border-amber-400/50 hover:text-white'
              }`}
            >
              <span>{tier.label}</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${quantity === tier.qty ? 'bg-black/20 text-black' : 'bg-white/5 text-amber-300'}`}>
                ${tier.price.toFixed(2)}/ea
              </span>
            </button>
          ))}
        </div>

        {/* Interactive Calculator Card */}
        <div className="max-w-4xl mx-auto bg-[#12161E] rounded-3xl border border-white/10 p-6 sm:p-10 shadow-2xl">
          
          {/* Slider Row */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-slate-300 font-mono uppercase">
                {t.pricing.sliderLabel}
              </label>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-white font-['Space_Grotesk']">
                  {quantity}
                </span>
                <span className="text-xs text-slate-400 font-mono">{t.pricing.sliderUnit}</span>
              </div>
            </div>

            <input
              type="range"
              min={1}
              max={500}
              step={quantity > 50 ? 25 : (quantity > 10 ? 5 : 1)}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full h-2.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
            />

            <div className="flex justify-between text-[10px] sm:text-[11px] text-slate-400 font-mono">
              <span>{t.pricing.sliderMin}</span>
              <span className="hidden sm:inline">{t.pricing.sliderCorp}</span>
              <span className="hidden sm:inline">{t.pricing.slider250}</span>
              <span className="hidden sm:inline">{t.pricing.slider500}</span>
              <span>{t.pricing.sliderMax}</span>
            </div>
          </div>

          {/* Pricing Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-[#0A0D12] p-5 rounded-2xl border border-white/5 text-center">
              <div className="text-xs text-slate-400 font-mono uppercase mb-1">{t.pricing.metricUnit}</div>
              <div className="text-3xl font-black text-amber-400 font-['Space_Grotesk']">
                ${unitPrice.toFixed(2)}
              </div>
              <div className="text-[11px] text-emerald-400 font-mono mt-1 font-semibold">{t.pricing.metricUnitSub}</div>
            </div>

            <div className="bg-[#0A0D12] p-5 rounded-2xl border border-white/5 text-center">
              <div className="text-xs text-slate-400 font-mono uppercase mb-1">{t.pricing.metricTotal}</div>
              <div className="text-3xl font-black text-white font-['Space_Grotesk']">
                ${totalCost}
              </div>
              <div className="text-[11px] text-slate-400 font-mono mt-1">{t.pricing.metricTotalSub}</div>
            </div>

            <div className="bg-[#0A0D12] p-5 rounded-2xl border border-white/5 text-center">
              <div className="text-xs text-slate-400 font-mono uppercase mb-1">{t.pricing.metricSavings}</div>
              <div className="text-3xl font-black text-emerald-400 font-['Space_Grotesk']">
                ${savings}
              </div>
              <div className="text-[11px] text-slate-400 font-mono mt-1">
                {t.pricing.metricSavingsSub.replace('{cards}', paperCardsReplaced)}
              </div>
            </div>
          </div>

          {/* What's Always Included */}
          <div className="bg-white/[0.02] p-6 rounded-2xl border border-white/5 mb-8">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono mb-4">
              {t.pricing.includedTitle}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.pricing.inc1}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.pricing.inc2}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.pricing.inc3}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.pricing.inc4}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.pricing.inc5}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.pricing.inc6}</span>
              </div>
            </div>
          </div>

          {/* Action Row - Transparent Options */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-white/10">
            {/* Quick Export & Copy Buttons (No form required) */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handleDownloadQuoteCard}
                className="flex-1 sm:flex-none py-2.5 px-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                title="Download Quotation Spec Sheet Image"
              >
                <Download className="w-3.5 h-3.5 text-amber-400" />
                <span>{lang === 'zh' ? '下载正式核算单 (PNG)' : 'Download Spec Sheet (PNG)'}</span>
              </button>

              <button
                onClick={handleCopyBreakdown}
                className="flex-1 sm:flex-none py-2.5 px-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                title="Copy breakdown to clipboard"
              >
                {copiedQuote ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                <span>{copiedQuote ? (lang === 'zh' ? '已复制！' : 'Copied!') : (lang === 'zh' ? '复制方案' : 'Copy Quote')}</span>
              </button>
            </div>

            {/* Action CTA Button */}
            <button
              onClick={() => onOpenQuoteModal({
                mode: quantity === 1 ? 'single' : 'quote',
                quantity: quantity,
                finish: 'Obsidian Black',
                price: unitPrice
              })}
              className="w-full sm:w-auto px-6 py-3 text-xs font-bold text-black bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 rounded-xl shadow-lg shadow-amber-400/20 transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer font-['Space_Grotesk']"
            >
              <span>
                {quantity === 1
                  ? (lang === 'zh' ? '订购 1 张专属定制卡 ($49 包邮) ➔' : 'Order 1 Bespoke Card ($49 All-Inclusive) ➔')
                  : (lang === 'zh' ? `索取 ${quantity} 张 3D 出样图 ➔` : `Request 3D Proof for ${quantity} Cards ➔`)}
              </span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}