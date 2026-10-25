import React, { useState } from 'react';
import {
  Wrench,
  X,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
  ArrowRight,
  Calculator,
  MessageSquare,
  Globe,
  Truck,
  Search,
  Mail,
  DollarSign,
  Layers,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { APP_CONFIG } from '../config';

export default function OpsWorkbench({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('magic'); // 'magic' | 'bridge' | 'replies' | 'supply'
  const [copiedId, setCopiedId] = useState('');

  // Tab 1: Magic Link & Outreach State
  const [targetCompany, setTargetCompany] = useState('Vance Luxury Realty');
  const [targetName, setTargetName] = useState('Michael Vance');
  const [targetRole, setTargetRole] = useState('Managing Partner');
  const [targetFinish, setTargetFinish] = useState('gold');
  const [targetNiche, setTargetNiche] = useState('realestate');

  // Tab 2: Bilateral Deal Bridge State
  const [orderQty, setOrderQty] = useState(100);
  const [orderFinish, setOrderFinish] = useState('曜石哑光黑 (304不锈钢 PVD)');
  const [rmbUnitCost, setRmbUnitCost] = useState(16);
  const [rmbShippingCost, setRmbShippingCost] = useState(180);
  const [customNotes, setCustomNotes] = useState('正面激光深雕公司Logo+人名职务，背面刻独立二维码，内嵌NTAG216高频芯片');

  if (!isOpen) return null;

  const copyText = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(''), 2000);
  };

  // Base URL for magic link (auto-sets lang=en for overseas prospects)
  const baseUrl = 'https://jikelihua.github.io/tapcraft-web/';
  const magicLink = `${baseUrl}?lang=en&company=${encodeURIComponent(targetCompany)}&name=${encodeURIComponent(targetName)}&role=${encodeURIComponent(targetRole)}&finish=${encodeURIComponent(targetFinish)}#studio`;

  // Niche Cold Email Templates
  const nicheOutreachMap = {
    realestate: {
      label: '🏡 欧美豪宅房产经纪 (Real Estate)',
      dorkUrl: 'https://www.google.com/search?q=site%3Ainstagram.com+OR+site%3Alinkedin.com+%22Luxury+Real+Estate%22+%22Miami%22+OR+%22Beverly+Hills%22+%22%40gmail.com%22',
      subject: `Custom 24K Gold / Matte Black NFC Metal Card mockup for ${targetCompany}`,
      body: `Hi ${targetName.split(' ')[0] || 'there'},

I noticed ${targetCompany}'s impressive luxury property portfolio and wanted to share something we just mocked up for you.

Our hardware studio in Shenzhen crafts 22-gram solid 304 stainless steel & 24K gold NFC business cards for top real estate brokerages — with $0 monthly subscription fees forever.

I created an interactive 3D laser-engraved proof with your name on it here (no login required):
👉 ${magicLink}

When tapped against any iPhone or Android, it instantly pops up your property listings and contact card (.vcf) in 0.2 seconds.

Would you like us to ship a physical Evaluation Sample Kit to your office, or prepare a formal PDF proof with your official vector logo?

Best regards,
Alex | TapCraft Precision Hardware
Official Site: ${baseUrl}
Email: ${APP_CONFIG.contactEmail}`
    },
    law: {
      label: '⚖️ 律所与私募基金合伙人 (Law & VC)',
      dorkUrl: 'https://www.google.com/search?q=site%3Alinkedin.com+%22Managing+Partner%22+%22Venture+Capital%22+OR+%22Law+Firm%22+%22New+York%22+OR+%22London%22',
      subject: `Executive 304 Steel NFC Card Proof for ${targetCompany}`,
      body: `Hi ${targetName.split(' ')[0] || 'there'},

Our engineering team prepared a custom laser-etched 304 stainless steel NFC executive card concept for ${targetCompany}.

You can view and flip your personalized 3D card proof directly in your browser here:
👉 ${magicLink}

Unlike software-based cards that charge $60+/employee every year, TapCraft hardware is a one-time buyout ($0/yr forever) with individual employee name laser engraving included.

If you send over ${targetCompany}'s vector logo (.AI or .PDF), our engineers will send back a studio-grade 3D production render within 4 hours at zero cost.

Warm regards,
Alex | TapCraft Fleet Concierge
Email: ${APP_CONFIG.contactEmail}`
    },
    auto: {
      label: '🏎️ 迪拜/欧美豪车租赁与游艇会 (Exotic Car & VIP Club)',
      dorkUrl: 'https://www.google.com/search?q=%22Exotic+Car+Rental%22+OR+%22Yacht+Charter%22+%22Dubai%22+OR+%22Miami%22+contact+email',
      subject: `Bespoke Metal VIP Membership & NFC Cards for ${targetCompany}`,
      body: `Hi ${targetName.split(' ')[0] || 'there'},

For a luxury brand like ${targetCompany}, paper business and membership cards don't match the caliber of your fleet.

We mocked up a custom solid metal NFC card for ${targetCompany} — click below to test the live 3D preview:
👉 ${magicLink}

Clients simply tap the heavy 22g metal card to their phone to book a vehicle, save your WhatsApp/contact, or leave a 5-star Google review.

Reply with your logo if you'd like a complimentary 4-hour 3D render for your team.

Best regards,
Alex | TapCraft Precision Hardware
Email: ${APP_CONFIG.contactEmail}`
    }
  };

  const activeOutreach = nicheOutreachMap[targetNiche] || nicheOutreachMap.realestate;

  // Tab 2 Calculations
  const getSuggestedUsdUnit = (qty) => {
    if (qty >= 500) return 9.5;
    if (qty >= 250) return 11.0;
    if (qty >= 100) return 13.5;
    if (qty >= 50) return 15.5;
    return 18.0;
  };

  const usdUnit = getSuggestedUsdUnit(orderQty);
  const usdRevenue = orderQty * usdUnit;
  const totalRmbCost = orderQty * rmbUnitCost + Number(rmbShippingCost);
  const totalUsdCost = totalRmbCost / 7.25;
  const netProfitUsd = usdRevenue - totalUsdCost;
  const netProfitRmb = netProfitUsd * 7.25;
  const profitMargin = usdRevenue > 0 ? Math.round((netProfitUsd / usdRevenue) * 100) : 0;

  // 1688 Factory Spec Sheet (Chinese)
  const factoryOrderText = `【外贸独立站采购询价与排产单 - 长期合作】
老板你好，我是做海外B2B独立站的，客户刚下一单定制金属NFC名片，请按以下规格核价并让美工帮忙排个效果图：

1. 采购数量：${orderQty} 张（后续每月稳定返单）
2. 基材与工艺：${orderFinish}，厚度 0.8mm，倒角抛光边，不可有毛刺
3. 内置芯片：全新足容 NTAG216 高频芯片（ISO 14443A，灵敏度要高，出货前逐张检测）
4. 雕刻要求：${customNotes}
5. 定制名单：共 ${orderQty} 张，每张刻不同员工人名（可变数据激光雕刻）
6. 包装与发货：单张独立透明保护袋 + 空白中性黑盒（⚠️切勿放贵厂任何中文Logo、名片或二维码，外贸盲发单）

👉 请老板先报【不含税出厂底价】+【发深圳国际货代转运仓运费】，并麻烦美工收到Logo后先出一版无水印3D/平面效果图给我发老外确认，确认后立即拍下付款！`;

  // Foreign Buyer Quote Email (English)
  const buyerQuoteEmail = `Subject: Official B2B Quotation & 3D Production Spec - ${targetCompany} (${orderQty} Custom Metal NFC Cards)

Hi ${targetName.split(' ')[0] || 'there'},

Thank you for your inquiry with TapCraft. Our engineering team has reviewed your requirements for ${orderQty} custom laser-engraved NFC metal cards.

Here is your official factory-direct wholesale breakdown:
------------------------------------------------------------
• Product: TapCraft Solid 304 Stainless Steel NFC Card (0.8mm / 22g)
• Embedded Chip: NXP NTAG216 Universal Smartphone Chip (iOS & Android, No App Needed)
• Quantity: ${orderQty} Custom Engraved Units
• Tiered Wholesale Price: $${usdUnit.toFixed(2)} USD / card
• Total Order Amount: $${usdRevenue.toFixed(2)} USD
• Variable Employee Name Engraving: FREE ($0 Setup Fee)
• Annual Software / SaaS Subscription: $0 / Lifetime Free
• Express Air Shipping (DHL / FedEx 4-5 Days): INCLUDED (Free Door-to-Door)
------------------------------------------------------------

NEXT STEPS TO PROCEED:
1. Reply to this email with your company logo (Vector .AI, .EPS, .PDF, or high-res .PNG) and the names/titles you want engraved.
2. Within 4 hours, our design engineers will send you the high-resolution digital production proof for your final approval before laser etching begins.
3. Payment can be completed via PayPal, Wise, or Wire Transfer upon proof approval.

Please let me know if you have any questions!

Best regards,
Alex | Senior Procurement Engineer
TapCraft Precision Hardware (Shenzhen)
Web: ${baseUrl}
Email: ${APP_CONFIG.contactEmail}`;

  // Tab 3: Canned Replies for non-English speakers
  const cannedReplies = [
    {
      id: 'ask-logo',
      title: '1. 老外刚联系你 ➔ 索要 Logo 并承诺免费出 3D 效果图',
      zhMeaning: '中文大意：感谢询盘！请把你们公司的 Logo 发我，我让工厂设计师 4 小时内免费帮您出好 3D 金属卡预览图，确认满意后再付款。',
      enText: `Hi there,\n\nThank you for reaching out to TapCraft! We would love to craft custom NFC metal cards for your team.\n\nCould you please reply with your company logo (PDF, AI, SVG, or PNG format) and let us know which finish you prefer (Matte Obsidian Black, 24K Brushed Gold, or Cyber Titanium)?\n\nOur engineers will generate a complimentary 3D laser-engraving proof for you within 4 hours with zero obligation.\n\nBest regards,\nAlex | TapCraft Hardware`
    },
    {
      id: 'send-proof',
      title: '2. 1688 美工做好图了 ➔ 把效果图发给老外确认并催促付款',
      zhMeaning: '中文大意：附件是为您做好的激光雕刻效果图，请过目！如果确认无误，请告知收件地址并完成付款，我们立即安排激光产线雕刻，4天内顺丰/DHL发出。',
      enText: `Hi there,\n\nAttached is the custom laser-engraving production proof prepared by our engineering team for your review.\n\nPlease check the spelling, layout, and finish details. Once you approve this proof and complete the payment, our fiber-laser line will begin production immediately and dispatch via DHL Express within 4 business days.\n\nPlease also reply with your shipping address and phone number for the DHL courier.\n\nBest regards,\nAlex | TapCraft Hardware`
    },
    {
      id: 'sample-pitch',
      title: '3. 老外不敢直接下大单 ➔ 引导老外先买 $29 样品盒（承诺大货退还）',
      zhMeaning: '中文大意：完全理解您想先看实物品質！我们可以寄一套 $29 美金的实物评测礼盒给您（含黑、金、银三张实卡），而且这 $29 在您后续下大货订单时 100% 全额抵扣退还！',
      enText: `Hi there,\n\nWe completely understand wanting to feel the 22-gram solid steel weight and test the NFC tap speed in person before placing a bulk fleet order.\n\nWe can dispatch our Evaluation Sample Kit (includes Matte Black, 24K Gold, and Cyber Titanium physical cards + acrylic stand) via DHL Express for just $29 USD all-inclusive. Best of all, this $29 is 100% credited back toward your future bulk order.\n\nJust reply with your shipping address and we will send over the payment link right away!\n\nBest regards,\nAlex | TapCraft Hardware`
    },
    {
      id: 'excel-roster',
      title: '4. 老外要订几十张不同人名的卡 ➔ 让老外用 Excel 表格发名单',
      zhMeaning: '中文大意：每张卡刻不同员工姓名和职位是完全免费的！请直接发一个 Excel 或 CSV 表格给我，包含每张卡的：姓名、职位、以及芯片要跳转的网址即可。',
      enText: `Hi there,\n\nYes, individual variable laser engraving (unique employee name, title, and custom NFC URL on each card) is 100% included at no extra cost!\n\nSimply send us a simple Excel (.xlsx) or CSV spreadsheet with 3 columns:\n1. Full Name\n2. Job Title\n3. Target NFC Link (or vCard info)\n\nWe will generate proofs for your entire team prior to engraving.\n\nBest regards,\nAlex | TapCraft Hardware`
    },
    {
      id: 'shipped-notice',
      title: '5. 货代已发出 ➔ 把 DHL/FedEx 国际快递单号发给老外',
      zhMeaning: '中文大意：好消息！您的定制金属名片已通过质检并由 DHL 特快发出，运单号如下，预计 3-5 天送达您手上！',
      enText: `Hi there,\n\nGreat news! Your custom TapCraft NFC metal cards have passed final ISO 14443A chip inspection and have been dispatched via DHL Express.\n\n• Courier: DHL Express Worldwide\n• Tracking Number: [在此填入货代给你的单号]\n• Estimated Delivery: 3–5 Business Days\n\nThank you for choosing TapCraft! Please let us know once the package arrives.\n\nBest regards,\nAlex | TapCraft Hardware`
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
      <div className="bg-[#0B0E14] border border-amber-400/40 rounded-3xl w-full max-w-6xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Top Header */}
        <div className="p-4 sm:p-6 bg-[#111621] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-black flex items-center justify-center font-black shadow-lg shadow-amber-400/20">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-xl font-black text-white font-['Space_Grotesk']">
                  TapCraft 跨境操盘手工作台 (B2B Deal Bridge)
                </h3>
                <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full">
                  店主专属内控中枢
                </span>
              </div>
              <p className="text-xs text-slate-400">
                无需懂英语、无需自己画图、无需囤货 —— 3秒打通「海外高管客户 ⇄ 中国 1688 源头制卡厂」
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto bg-[#0E121B] border-b border-white/10 px-4 sm:px-6 pt-3 gap-2">
          <button
            onClick={() => setActiveTab('magic')}
            className={`px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 transition-all cursor-pointer shrink-0 ${
              activeTab === 'magic'
                ? 'border-amber-400 text-amber-300 bg-amber-400/10'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>1. 获客魔法链接生成 (主动出击截流)</span>
          </button>

          <button
            onClick={() => setActiveTab('bridge')}
            className={`px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 transition-all cursor-pointer shrink-0 ${
              activeTab === 'bridge'
                ? 'border-amber-400 text-amber-300 bg-amber-400/10'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>2. 中英双边秒级转单器 (老外 ⇄ 1688工厂)</span>
          </button>

          <button
            onClick={() => setActiveTab('replies')}
            className={`px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 transition-all cursor-pointer shrink-0 ${
              activeTab === 'replies'
                ? 'border-amber-400 text-amber-300 bg-amber-400/10'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>3. 零英语秒回话术库 (一键复制回老外)</span>
          </button>

          <button
            onClick={() => setActiveTab('supply')}
            className={`px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 transition-all cursor-pointer shrink-0 ${
              activeTab === 'supply'
                ? 'border-amber-400 text-amber-300 bg-amber-400/10'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Truck className="w-4 h-4" />
            <span>4. 1688 源头找厂与国际盲发代发 SOP</span>
          </button>
        </div>

        {/* Main Body Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 text-left">
          
          {/* ==================== TAB 1: MAGIC LINK & OUTREACH ==================== */}
          {activeTab === 'magic' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-start gap-3">
                <Zap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  <strong className="text-amber-300">为什么别人发外贸开发信没人理，而这套方法回复率极高？</strong><br />
                  因为普通人发邮件只写干巴巴的文字；而你在这里输入目标客户的<strong>公司名和人名</strong>后，系统会自动生成一个<strong>「专属 3D 定制预览链接」</strong>。当老外点开链接时，网页上的 3D 金属卡<strong>已经提前刻好了他自己的名字和公司名</strong>！这种视觉冲击感会让老外瞬间以为你是专门为他定制的。
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left: Input Target Client Info */}
                <div className="lg:col-span-5 bg-[#121722] p-5 rounded-2xl border border-white/10 space-y-4">
                  <div className="text-sm font-bold text-white flex items-center justify-between">
                    <span>第一步：挑选行业 & 填入老外名字</span>
                    <span className="text-[11px] font-mono text-amber-400">3秒定制</span>
                  </div>

                  {/* Niche Selector */}
                  <div>
                    <label className="text-xs text-slate-400 block mb-1.5">选择海外高暴利目标客群（自带一键搜客户功能）：</label>
                    <div className="grid grid-cols-1 gap-2">
                      {Object.entries(nicheOutreachMap).map(([key, item]) => (
                        <button
                          key={key}
                          onClick={() => setTargetNiche(key)}
                          className={`p-2.5 rounded-xl text-xs font-bold text-left flex items-center justify-between border transition-all cursor-pointer ${
                            targetNiche === key
                              ? 'bg-amber-400/15 border-amber-400 text-amber-300'
                              : 'bg-black/40 border-white/10 text-slate-300 hover:border-white/25'
                          }`}
                        >
                          <span>{item.label}</span>
                          {targetNiche === key && <Check className="w-4 h-4 text-amber-400" />}
                        </button>
                      ))}
                    </div>

                    <a
                      href={activeOutreach.dorkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2.5 w-full py-2 px-3 rounded-xl bg-blue-500/15 hover:bg-blue-500/25 border border-blue-400/30 text-blue-300 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Search className="w-3.5 h-3.5" />
                      <span>在 Google 一键精准抓取该行业海外老板名单 ➔</span>
                    </a>
                  </div>

                  {/* Inputs */}
                  <div className="space-y-3 pt-2 border-t border-white/10">
                    <div>
                      <label className="text-xs text-slate-300 block mb-1">老外的公司名称 (Company Name)</label>
                      <input
                        type="text"
                        value={targetCompany}
                        onChange={(e) => setTargetCompany(e.target.value)}
                        className="w-full bg-[#090B0E] border border-white/15 rounded-xl px-3 py-2 text-sm text-white"
                        placeholder="e.g. Vance Luxury Realty"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs text-slate-300 block mb-1">老外姓名 (Contact Name)</label>
                        <input
                          type="text"
                          value={targetName}
                          onChange={(e) => setTargetName(e.target.value)}
                          className="w-full bg-[#090B0E] border border-white/15 rounded-xl px-3 py-2 text-sm text-white"
                          placeholder="e.g. Michael Vance"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-slate-300 block mb-1">他的头衔 (Title)</label>
                        <input
                          type="text"
                          value={targetRole}
                          onChange={(e) => setTargetRole(e.target.value)}
                          className="w-full bg-[#090B0E] border border-white/15 rounded-xl px-3 py-2 text-sm text-white"
                          placeholder="e.g. Founder / Broker"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-slate-300 block mb-1">预设展示给他的卡片材质</label>
                      <select
                        value={targetFinish}
                        onChange={(e) => setTargetFinish(e.target.value)}
                        className="w-full bg-[#090B0E] border border-white/15 rounded-xl px-3 py-2 text-sm text-white"
                      >
                        <option value="gold">24K 皇家拉丝金 (最受房产/豪车老板欢迎)</option>
                        <option value="obsidian">曜石哑光黑 (最受律所/科技高管欢迎)</option>
                        <option value="titanium">赛博钛银 (适合工业/建筑/航天)</option>
                        <option value="rose">奢华磨砂玫瑰金 (适合医美/时尚/设计)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Right: Generated Magic Link & Ready-to-Send Email */}
                <div className="lg:col-span-7 bg-[#121722] p-5 rounded-2xl border border-white/10 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="text-sm font-bold text-white mb-2 flex items-center justify-between">
                      <span>第二步：一键复制「专属 3D 魔法链接」与开发信</span>
                      <a
                        href={magicLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-amber-400 hover:underline flex items-center gap-1"
                      >
                        <span>点此测试老外看到的专属效果</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    {/* Magic Link Box */}
                    <div className="p-3 rounded-xl bg-black/60 border border-amber-400/30 flex items-center justify-between gap-2 mb-4">
                      <div className="text-xs font-mono text-amber-300 truncate">{magicLink}</div>
                      <button
                        onClick={() => copyText(magicLink, 'magicLink')}
                        className="px-3 py-1.5 rounded-lg bg-amber-400 text-black font-bold text-xs shrink-0 cursor-pointer flex items-center gap-1"
                      >
                        {copiedId === 'magicLink' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedId === 'magicLink' ? '已复制' : '复制专属链接'}</span>
                      </button>
                    </div>

                    {/* Email Content Box */}
                    <div className="text-xs text-slate-400 mb-1">
                      自动生成的母语级英文开发信（可直接发邮件、Instagram 私信或 LinkedIn 私信）：
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#090B0E] border border-white/10 font-mono text-xs text-slate-200 whitespace-pre-wrap max-h-60 overflow-y-auto leading-relaxed">
                      <div className="text-amber-300 font-bold mb-2">Subject: {activeOutreach.subject}</div>
                      {activeOutreach.body}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      onClick={() => copyText(`Subject: ${activeOutreach.subject}\n\n${activeOutreach.body}`, 'outreachBody')}
                      className="flex-1 py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-400/20"
                    >
                      {copiedId === 'outreachBody' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      <span>{copiedId === 'outreachBody' ? '整封开发信已复制！' : '一键复制整封英文开发信'}</span>
                    </button>

                    <a
                      href={`mailto:?subject=${encodeURIComponent(activeOutreach.subject)}&body=${encodeURIComponent(activeOutreach.body)}`}
                      className="py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer border border-white/10"
                    >
                      <Mail className="w-4 h-4 text-amber-400" />
                      <span>直接调起邮箱发送</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ==================== TAB 2: BILATERAL DEAL BRIDGE ==================== */}
          {activeTab === 'bridge' && (
            <div className="space-y-6">
              {/* Profit Dashboard Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#121722] p-4 rounded-2xl border border-emerald-500/30">
                <div className="p-3 rounded-xl bg-black/40">
                  <div className="text-[11px] text-slate-400">对老外标准总报价 (USD)</div>
                  <div className="text-2xl font-black text-white font-['Space_Grotesk']">
                    ${usdRevenue.toFixed(0)} <span className="text-xs font-normal text-slate-400">(${usdUnit}/张)</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-black/40">
                  <div className="text-[11px] text-slate-400">1688 拿货+国际运费总成本</div>
                  <div className="text-2xl font-black text-slate-300 font-['Space_Grotesk']">
                    ¥{totalRmbCost} <span className="text-xs font-normal text-slate-400">(约${totalUsdCost.toFixed(0)})</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30">
                  <div className="text-[11px] text-emerald-300 font-bold">🔥 本单你净赚纯利润 (RMB)</div>
                  <div className="text-2xl font-black text-emerald-400 font-['Space_Grotesk']">
                    ¥{netProfitRmb.toFixed(0)} 元
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-amber-400/15 border border-amber-400/30">
                  <div className="text-[11px] text-amber-300 font-bold">折合美元净利 / 毛利率</div>
                  <div className="text-2xl font-black text-amber-300 font-['Space_Grotesk']">
                    +${netProfitUsd.toFixed(0)} <span className="text-sm">({profitMargin}%)</span>
                  </div>
                </div>
              </div>

              {/* Input Parameters */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 bg-[#121722] p-4 rounded-2xl border border-white/10">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">老外采购张数 (Quantity)</label>
                  <input
                    type="number"
                    value={orderQty}
                    onChange={(e) => setOrderQty(Math.max(1, Number(e.target.value)))}
                    className="w-full bg-[#090B0E] border border-white/15 rounded-xl px-3 py-2 text-sm text-white font-bold"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">金属材质工艺</label>
                  <select
                    value={orderFinish}
                    onChange={(e) => setOrderFinish(e.target.value)}
                    className="w-full bg-[#090B0E] border border-white/15 rounded-xl px-3 py-2 text-sm text-white"
                  >
                    <option value="曜石哑光黑 (304不锈钢 PVD)">曜石哑光黑 (304不锈钢)</option>
                    <option value="24K皇家拉丝金 (304不锈钢真空镀)">24K 皇家拉丝金</option>
                    <option value="赛博钛银 (304不锈钢原色拉丝)">赛博钛银拉丝</option>
                    <option value="磨砂玫瑰金 (304不锈钢电镀)">奢华磨砂玫瑰金</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">1688 工厂报给你的单价 (人民币/张)</label>
                  <input
                    type="number"
                    value={rmbUnitCost}
                    onChange={(e) => setRmbUnitCost(Number(e.target.value))}
                    className="w-full bg-[#090B0E] border border-white/15 rounded-xl px-3 py-2 text-sm text-amber-300 font-bold"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">国际快递货代运费估算 (人民币)</label>
                  <input
                    type="number"
                    value={rmbShippingCost}
                    onChange={(e) => setRmbShippingCost(Number(e.target.value))}
                    className="w-full bg-[#090B0E] border border-white/15 rounded-xl px-3 py-2 text-sm text-white"
                  />
                </div>
              </div>

              {/* Dual Bridge Columns: Left to 1688 Factory, Right to Foreign Customer */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Left: To 1688 Factory (Chinese) */}
                <div className="bg-[#121722] p-5 rounded-2xl border border-white/10 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold text-amber-300">
                        🇨🇳 发给中国 1688 厂家的标准排产/询价指令
                      </span>
                      <span className="text-[11px] font-mono bg-amber-400/10 text-amber-300 px-2 py-0.5 rounded">
                        让工厂免费帮你画图
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mb-3">
                      直接复制下面这段内行话发给 1688 客服，厂家一眼看出你是老手，不仅报底价，还会让厂里美工免费帮你做好 3D 效果图！
                    </p>
                    <div className="p-3.5 rounded-xl bg-[#090B0E] border border-white/10 font-mono text-xs text-slate-200 whitespace-pre-wrap h-64 overflow-y-auto leading-relaxed">
                      {factoryOrderText}
                    </div>
                  </div>

                  <button
                    onClick={() => copyText(factoryOrderText, 'factoryOrder')}
                    className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {copiedId === 'factoryOrder' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedId === 'factoryOrder' ? '已复制！直接去粘贴给 1688 客服' : '一键复制 1688 厂家下单指令'}</span>
                  </button>
                </div>

                {/* Right: To Overseas Buyer (English) */}
                <div className="bg-[#121722] p-5 rounded-2xl border border-white/10 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold text-emerald-300">
                        🌍 发给海外客户的正式美元报价单 (English Quote)
                      </span>
                      <span className="text-[11px] font-mono bg-emerald-500/10 text-emerald-300 px-2 py-0.5 rounded">
                        母语级外贸回信
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mb-3">
                      自动嵌入阶梯单价 (${usdUnit}/张) 与总价 (${usdRevenue})，直接复制回复给老外的邮件即可，零语法破绽！
                    </p>
                    <div className="p-3.5 rounded-xl bg-[#090B0E] border border-white/10 font-mono text-xs text-slate-200 whitespace-pre-wrap h-64 overflow-y-auto leading-relaxed">
                      {buyerQuoteEmail}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => copyText(buyerQuoteEmail, 'buyerQuote')}
                      className="flex-1 py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-bold text-xs flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {copiedId === 'buyerQuote' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      <span>{copiedId === 'buyerQuote' ? '已复制英文报价邮件！' : '一键复制全英文正式报价信'}</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* ==================== TAB 3: ZERO-ENGLISH CANNED REPLIES ==================== */}
          {activeTab === 'replies' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-400/30 text-xs sm:text-sm text-slate-200">
                💡 <strong className="text-blue-300">完全不用担心英语不好：</strong> 整个金属名片外贸交易从头到尾只有这 5 个标准动作。老外发来邮件后，你对照下面的中文场景，直接点右侧的<strong>「一键复制英文回复」</strong>粘贴发回即可！
              </div>

              <div className="grid grid-cols-1 gap-4">
                {cannedReplies.map((item) => (
                  <div key={item.id} className="bg-[#121722] p-5 rounded-2xl border border-white/10 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
                      <div>
                        <h4 className="text-sm font-bold text-amber-300">{item.title}</h4>
                        <p className="text-xs text-slate-400 mt-0.5">{item.zhMeaning}</p>
                      </div>
                      <button
                        onClick={() => copyText(item.enText, item.id)}
                        className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs flex items-center gap-1.5 shrink-0 cursor-pointer self-start sm:self-auto"
                      >
                        {copiedId === item.id ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedId === item.id ? '已复制英文！' : '一键复制英文回复'}</span>
                      </button>
                    </div>
                    <pre className="text-xs font-mono text-slate-300 whitespace-pre-wrap bg-[#090B0E] p-3.5 rounded-xl border border-white/5 leading-relaxed">
                      {item.enText}
                    </pre>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ==================== TAB 4: 1688 SUPPLIERS & BLIND DROPSHIP SOP ==================== */}
          {activeTab === 'supply' && (
            <div className="space-y-6">
              {/* 4 Step Visual Flow */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-[#121722] p-4 rounded-2xl border border-white/10">
                  <div className="text-xs font-mono text-amber-400 font-bold mb-1">STEP 01 · 老外询盘</div>
                  <div className="text-sm font-bold text-white mb-2">老外发来 Logo 与数量</div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    老外通过你网站的邮箱 (`{APP_CONFIG.contactEmail}`) 发来他公司的 Logo，想要订购比如 100 张黑金卡。
                  </p>
                </div>

                <div className="bg-[#121722] p-4 rounded-2xl border border-white/10">
                  <div className="text-xs font-mono text-amber-400 font-bold mb-1">STEP 02 · 1688 免费借图</div>
                  <div className="text-sm font-bold text-white mb-2">发给 1688 厂家免费排版</div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    你把老外的 Logo 转发给 1688 深圳/苍南制卡厂客服，厂里美工 1 小时内免费帮你排好高清效果图发你。你再转手发给老外！
                  </p>
                </div>

                <div className="bg-[#121722] p-4 rounded-2xl border border-white/10">
                  <div className="text-xs font-mono text-emerald-400 font-bold mb-1">STEP 03 · 先收美金后下单</div>
                  <div className="text-sm font-bold text-white mb-2">老外付全款 ➔ 你去 1688 拍下</div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    老外确认效果图后，通过 PayPal / Wise 付给你 $1,350 美金（约 ¥9,700 元）。你拿出其中 ¥1,600 元去 1688 下单生产，净落袋 ¥8,000+！
                  </p>
                </div>

                <div className="bg-[#121722] p-4 rounded-2xl border border-white/10">
                  <div className="text-xs font-mono text-blue-400 font-bold mb-1">STEP 04 · 深圳货代盲发</div>
                  <div className="text-sm font-bold text-white mb-2">换英文面单 DHL 直飞欧美</div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    1688 收货地址填「深圳国际快递货代仓」。货代收到后撕掉国内单，贴上 `TapCraft` 英文 DHL 面单，4 天直达老外办公室！
                  </p>
                </div>
              </div>

              {/* Direct 1688 Search Links */}
              <div className="bg-[#121722] p-5 rounded-2xl border border-white/10 space-y-4">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-amber-400" />
                  <span>一键直达中国源头工厂搜索（1688 拿货价约 ¥12 ~ ¥18 元/张）</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <a
                    href="https://s.1688.com/selloffer/offer_search.htm?keywords=NFC%E9%87%91%E5%B1%9E%E5%90%8D%E7%89%87+%E4%B8%8D%E9%94%88%E9%92%A2+NTAG216+%E6%BF%80%E5%85%89"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs font-bold flex items-center justify-between transition-colors"
                  >
                    <span>🔍 1688 搜：不锈钢 NFC 激光金属名片源头厂</span>
                    <ExternalLink className="w-4 h-4 shrink-0" />
                  </a>

                  <a
                    href="https://s.1688.com/selloffer/offer_search.htm?keywords=Google+Review+NFC+%E4%BA%9A%E5%85%8B%E5%8A%9B%E7%AB%8B%E7%89%8C"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs font-bold flex items-center justify-between transition-colors"
                  >
                    <span>🔍 1688 搜：谷歌五星好评 NFC 亚克力桌面立牌</span>
                    <ExternalLink className="w-4 h-4 shrink-0" />
                  </a>

                  <a
                    href="https://s.1688.com/selloffer/offer_search.htm?keywords=%E5%90%8D%E7%89%87%E5%A4%A9%E5%9C%B0%E7%9B%92+%E9%BB%91%E8%89%B2%E7%A4%BC%E7%9B%92+%E5%86%85%E6%89%98"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs font-bold flex items-center justify-between transition-colors"
                  >
                    <span>🔍 1688 搜：黑色高档名片天地盖礼盒包装</span>
                    <ExternalLink className="w-4 h-4 shrink-0" />
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-black/50 border border-white/5 text-xs text-slate-300 space-y-2 leading-relaxed">
                  <div className="font-bold text-amber-300">📌 筛选 1688 工厂的 3 条铁律（防踩坑）：</div>
                  <div>1. <strong>必须选「凹槽内嵌芯片款」或「金属拉丝复合款」</strong>：全封闭金属会屏蔽信号，合格的 NFC 金属卡背面都有一个精准的激光开槽耦合区或 PVC 复合层，向厂家确认“苹果和安卓手机裸机一碰即出”。</div>
                  <div>2. <strong>认准广东深圳 / 东莞 或 浙江温州苍南金乡</strong>：这两个地方占了全球 90% 的金属名片产能，欧美大牌 V1CE、Popl 的代工厂全在这里。</div>
                  <div>3. <strong>国际快递怎么发最便宜省心？</strong>：在淘宝或微信搜「深圳国际快递货代 DHL」，让 1688 厂家直接顺丰包邮寄到货代的深圳仓库。货代会帮你免费拍照验货、撕掉中文标签、换贴英文国际运单直发美国/欧洲，运费仅需 140 元左右！</div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}