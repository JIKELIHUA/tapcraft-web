import React, { useState } from 'react';
import { MessageSquare, X, Check, Copy, ExternalLink, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { APP_CONFIG } from '../config';

export default function QuickContact() {
  const { t, lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [copiedWechat, setCopiedWechat] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactData = {
    email: APP_CONFIG.contactEmail,
    wechatId: APP_CONFIG.wechatId,
  };

  const handleCopyWechat = () => {
    navigator.clipboard.writeText(contactData.wechatId);
    setCopiedWechat(true);
    setTimeout(() => setCopiedWechat(false), 2000);
  };

  const handleCopyEmail = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(contactData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const q = t.quickContact;

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end">
      {/* Popover Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-[#0E1218] border border-amber-400/30 rounded-2xl p-5 shadow-2xl shadow-black/80 backdrop-blur-xl animate-fadeIn text-left">
          {/* Header */}
          <div className="flex items-start justify-between border-b border-white/10 pb-3 mb-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                  {q.available}
                </span>
              </div>
              <h4 className="text-sm font-bold text-white font-['Space_Grotesk']">{q.title}</h4>
              <p className="text-[11px] text-slate-400">{q.subtitle}</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Contact Methods */}
          <div className="space-y-2.5">
            {/* Official Email */}
            <div className="p-3 rounded-xl bg-gradient-to-r from-amber-400/10 to-transparent border border-amber-400/25 transition-all">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      {q.emailBtn}
                      <span className="px-1.5 py-0.2 text-[9px] font-mono rounded bg-amber-400/20 text-amber-300 font-medium">Primary</span>
                    </div>
                    <div className="text-[10px] text-slate-400">{q.emailSub}</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-2">
                <a
                  href={`mailto:${contactData.email}?subject=TapCraft%20B2B%20Inquiry%20-%20Custom%20NFC%20Metal%20Cards`}
                  className="flex-1 py-1.5 px-2.5 rounded-lg bg-amber-400 text-black font-bold text-[11px] flex items-center justify-center gap-1 hover:bg-amber-300 transition-colors cursor-pointer"
                >
                  <span>{lang === 'zh' ? '发送邮件询价' : 'Send Email'}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="py-1.5 px-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-slate-300 font-mono text-[11px] flex items-center gap-1 transition-colors cursor-pointer border border-white/10"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedEmail ? (lang === 'zh' ? '已复制' : 'Copied') : (lang === 'zh' ? '复制邮箱' : 'Copy')}</span>
                </button>
              </div>
            </div>

            {/* WeChat */}
            <button
              onClick={handleCopyWechat}
              className="w-full flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-amber-400/30 transition-all group text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-emerald-300">
                    {q.wechatBtn}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">
                    {copiedWechat ? (
                      <span className="text-emerald-400 font-bold">{q.copied}</span>
                    ) : (
                      <span>{lang === 'zh' ? `微信号: ${contactData.wechatId}` : `WeChat ID: ${contactData.wechatId}`}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-1.5 rounded-lg bg-white/5 text-slate-400 group-hover:text-white">
                {copiedWechat ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </div>
            </button>
          </div>

          <div className="mt-3 pt-2.5 border-t border-white/10 text-center">
            <span className="text-[10px] text-slate-400 font-mono">
              Shenzhen Direct Dispatch · ISO 14443A
            </span>
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-bold text-xs shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105 active:scale-95 transition-all cursor-pointer font-['Space_Grotesk'] border border-amber-300/40"
        aria-label="Toggle contact helpdesk"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-black"></span>
        </span>
        <MessageSquare className="w-4 h-4 fill-black/20" />
        <span className="tracking-wide">{q.btnLabel}</span>
      </button>
    </div>
  );
}
