import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Sparkles, Send, ShieldCheck, Copy, Check, Loader2, CreditCard, Box, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../i18n/LanguageContext';
import { APP_CONFIG } from '../config';

export default function LeadModal({ isOpen, onClose, initialData = {} }) {
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState('single');
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    quantity: '1',
    finish: 'Obsidian Black',
    nfcUrl: '',
    shippingCountry: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialData.mode === 'sample') {
      setActiveTab('sample');
      setFormData(prev => ({ ...prev, quantity: '1' }));
    } else if (initialData.mode === 'quote') {
      setActiveTab('quote');
      setFormData(prev => ({ ...prev, quantity: String(initialData.quantity || '50') }));
    } else {
      setActiveTab('single');
      setFormData(prev => ({ ...prev, quantity: '1' }));
    }

    if (initialData.finish) {
      setFormData(prev => ({ ...prev, finish: initialData.finish }));
    }
    if (initialData.company) {
      setFormData(prev => ({ ...prev, company: initialData.company }));
    }
    if (initialData.contactPerson) {
      setFormData(prev => ({ ...prev, name: initialData.contactPerson }));
    }
    if (initialData.customUrl) {
      setFormData(prev => ({ ...prev, nfcUrl: initialData.customUrl }));
    }
    setSubmitted(false);
  }, [isOpen, initialData]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const prefix = activeTab === 'single' ? 'BESPOKE' : (activeTab === 'sample' ? 'SMP' : 'FLT');
    const id = `TC-${prefix}-${randomNum}`;
    setTicketId(id);

    // 1. Persist lead in browser storage (zero data loss)
    try {
      const savedLeads = JSON.parse(localStorage.getItem('tapcraft_leads') || '[]');
      const newLead = {
        id,
        timestamp: new Date().toISOString(),
        tab: activeTab,
        ...formData
      };
      savedLeads.unshift(newLead);
      localStorage.setItem('tapcraft_leads', JSON.stringify(savedLeads));
    } catch (err) {}

    // 2. Dispatch to email / Web3Forms if key configured
    if (APP_CONFIG.web3FormsKey) {
      try {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: APP_CONFIG.web3FormsKey,
            subject: `[TapCraft ${activeTab.toUpperCase()}] ${formData.name || 'Client'} - ${formData.company || 'Individual'} (${id})`,
            from_name: formData.name || 'TapCraft Client',
            ...formData,
            ticket_id: id
          })
        });
      } catch (err) {
        console.warn('Inquiry dispatch error', err);
      }
    }

    setLoading(false);
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {}
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(APP_CONFIG.contactEmail || 'wholesale@tapcraft.co');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#0E1218] border border-white/15 rounded-3xl p-5 sm:p-7 shadow-2xl shadow-black overflow-hidden text-left my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            {/* Header 3-Tier Tabs */}
            <div className="grid grid-cols-3 gap-1.5 mb-5 border-b border-white/10 pb-3.5 pr-8">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('single');
                  setFormData(prev => ({ ...prev, quantity: '1' }));
                }}
                className={`py-2 px-2 text-center rounded-xl text-[11px] sm:text-xs font-bold transition-all cursor-pointer font-['Space_Grotesk'] truncate ${
                  activeTab === 'single'
                    ? 'bg-amber-400 text-black shadow-md shadow-amber-400/20'
                    : 'text-slate-400 hover:text-white bg-white/5'
                }`}
              >
                {t.modal.tabSingle || '1 Bespoke Card ($49)'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('sample');
                  setFormData(prev => ({ ...prev, quantity: '1' }));
                }}
                className={`py-2 px-2 text-center rounded-xl text-[11px] sm:text-xs font-bold transition-all cursor-pointer font-['Space_Grotesk'] truncate ${
                  activeTab === 'sample'
                    ? 'bg-amber-400 text-black shadow-md shadow-amber-400/20'
                    : 'text-slate-400 hover:text-white bg-white/5'
                }`}
              >
                {t.modal.tabSample}
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('quote');
                  setFormData(prev => ({ ...prev, quantity: '50' }));
                }}
                className={`py-2 px-2 text-center rounded-xl text-[11px] sm:text-xs font-bold transition-all cursor-pointer font-['Space_Grotesk'] truncate ${
                  activeTab === 'quote'
                    ? 'bg-amber-400 text-black shadow-md shadow-amber-400/20'
                    : 'text-slate-400 hover:text-white bg-white/5'
                }`}
              >
                {t.modal.tabQuote}
              </button>
            </div>

            {/* Modal Heading & Badge */}
            <div className="mb-5">
              {activeTab === 'single' && (
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-[11px] font-mono font-bold mb-2">
                  <Zap className="w-3 h-3" />
                  <span>{t.modal.singlePriceNotice || '$49 USD Flat · Free Worldwide Air Shipping'}</span>
                </div>
              )}
              {activeTab === 'sample' && (
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-300 text-[11px] font-mono font-bold mb-2">
                  <Box className="w-3 h-3" />
                  <span>$29 USD · 3 Finishes + Stand · Priority Airmail</span>
                </div>
              )}
              {activeTab === 'quote' && (
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-[11px] font-mono font-bold mb-2">
                  <Sparkles className="w-3 h-3" />
                  <span>Wholesale Fleet Tiers ($9.50 – $18.00 / card)</span>
                </div>
              )}

              <h3 className="text-xl sm:text-2xl font-bold text-white font-['Space_Grotesk'] mb-1">
                {activeTab === 'single' ? t.modal.titleSingle : (activeTab === 'sample' ? t.modal.titleSample : t.modal.titleQuote)}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {activeTab === 'single' ? t.modal.descSingle : (activeTab === 'sample' ? t.modal.descSample : t.modal.descQuote)}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">
                    {t.modal.nameLabel} <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#080A0D] border border-white/15 focus:border-amber-400 rounded-xl px-3 py-2 text-sm text-white focus:outline-none transition-colors"
                    placeholder={t.modal.namePlaceholder || 'e.g. Alexander Chen'}
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">
                    {t.modal.companyLabel}
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#080A0D] border border-white/15 focus:border-amber-400 rounded-xl px-3 py-2 text-sm text-white focus:outline-none transition-colors"
                    placeholder={t.modal.companyPlaceholder || 'e.g. Apex Studio LLC'}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">
                    {t.modal.emailLabel} <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#080A0D] border border-white/15 focus:border-amber-400 rounded-xl px-3 py-2 text-sm text-white focus:outline-none transition-colors"
                    placeholder={t.modal.emailPlaceholder || 'alex@example.com'}
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">
                    {t.modal.phoneLabel}
                  </label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#080A0D] border border-white/15 focus:border-amber-400 rounded-xl px-3 py-2 text-sm text-white focus:outline-none transition-colors"
                    placeholder={t.modal.phonePlaceholder || '+1 (555) 019-2834'}
                  />
                </div>
              </div>

              {/* NFC URL and Metal Finish */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">
                    {t.modal.finishLabel}
                  </label>
                  <select
                    value={formData.finish}
                    onChange={(e) => setFormData({ ...formData, finish: e.target.value })}
                    className="w-full bg-[#080A0D] border border-white/15 focus:border-amber-400 rounded-xl px-3 py-2 text-sm text-white focus:outline-none transition-colors"
                  >
                    <option value="Obsidian Black">Obsidian Matte Black (304 Steel)</option>
                    <option value="Royale Gold">Royale 24K Brushed Gold</option>
                    <option value="Cyber Titanium">Cyber Titanium Steel</option>
                    {activeTab === 'quote' && <option value="Mixed Fleet">Mixed Fleet Combination</option>}
                  </select>
                </div>

                <div>
                  {activeTab === 'quote' ? (
                    <>
                      <label className="text-xs font-medium text-slate-300 block mb-1">
                        {t.modal.fleetSizeLabel}
                      </label>
                      <select
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        className="w-full bg-[#080A0D] border border-white/15 focus:border-amber-400 rounded-xl px-3 py-2 text-sm text-white focus:outline-none transition-colors"
                      >
                        <option value="10">10 Cards ($22.00/ea)</option>
                        <option value="30">30 Cards ($18.00/ea)</option>
                        <option value="50">50 Cards ($15.50/ea)</option>
                        <option value="100">100 Cards ($13.50/ea)</option>
                        <option value="250">250 Cards ($11.00/ea)</option>
                        <option value="500">500+ Cards ($9.50/ea)</option>
                      </select>
                    </>
                  ) : (
                    <>
                      <label className="text-xs font-medium text-slate-300 block mb-1">
                        {t.modal.nfcUrlLabel || 'Target URL (Tap Action)'}
                      </label>
                      <input
                        type="url"
                        value={formData.nfcUrl}
                        onChange={(e) => setFormData({ ...formData, nfcUrl: e.target.value })}
                        className="w-full bg-[#080A0D] border border-white/15 focus:border-amber-400 rounded-xl px-3 py-2 text-sm text-white focus:outline-none transition-colors font-mono"
                        placeholder={t.modal.nfcUrlPlaceholder || 'https://linkedin.com/in/...'}
                      />
                    </>
                  )}
                </div>
              </div>

              {/* Shipping Destination */}
              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">
                  {t.modal.shippingCountryLabel || 'Shipping Country & City'}
                </label>
                <input
                  type="text"
                  value={formData.shippingCountry}
                  onChange={(e) => setFormData({ ...formData, shippingCountry: e.target.value })}
                  className="w-full bg-[#080A0D] border border-white/15 focus:border-amber-400 rounded-xl px-3 py-2 text-sm text-white focus:outline-none transition-colors"
                  placeholder={t.modal.shippingCountryPlaceholder || 'e.g. Austin, TX, USA or Frankfurt, Germany'}
                />
              </div>

              {/* Laser Notes */}
              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">
                  {t.modal.notesLabel}
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#080A0D] border border-white/15 focus:border-amber-400 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none transition-colors"
                  placeholder={t.modal.notesPlaceholder}
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 text-sm font-bold text-black bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 rounded-xl shadow-xl shadow-amber-400/25 transition-all flex items-center justify-center gap-2 cursor-pointer font-['Space_Grotesk'] disabled:opacity-60"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  <span>
                    {activeTab === 'single'
                      ? (t.modal.btnSubmitSingle || 'Lock In 1 Custom Card ($49) & Get 3D Proof')
                      : (activeTab === 'sample' ? t.modal.btnSubmitSample : t.modal.btnSubmitQuote)}
                  </span>
                </button>
              </div>

              {/* Safe Trust Badges */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 text-[11px] text-slate-400 pt-1 font-mono flex-wrap">
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t.modal.guaranteeApproval || 'Proof Approved Before Laser'}</span>
                </div>
                <span>&middot;</span>
                <div className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.modal.guaranteeEngineer}</span>
                </div>
                <span>&middot;</span>
                <div className="flex items-center gap-1">
                  <CreditCard className="w-3.5 h-3.5 text-sky-400" />
                  <span>PayPal / Card Protected</span>
                </div>
              </div>
            </form>
          </>
        ) : (
          /* Submission Confirmation View */
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 rounded-2xl bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-mono text-amber-400 font-bold bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20">
                {t.modal.ticketPrefix}{ticketId}
              </span>
              <h3 className="text-2xl font-black text-white font-['Space_Grotesk'] mt-3 mb-2">
                {t.modal.successTitle}
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                {t.modal.successMsg
                  .replace('{name}', formData.name)
                  .replace('{company}', formData.company || 'Personal')}
              </p>
            </div>

            <div className="bg-[#080A0D] p-4 sm:p-5 rounded-2xl border border-white/10 text-left max-w-md mx-auto space-y-2 text-xs text-slate-300">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">{t.modal.reqTypeLabel}</span>
                <span className="font-bold text-amber-400 uppercase">
                  {activeTab === 'single' ? '1 Bespoke Custom Card ($49)' : (activeTab === 'sample' ? 'Sample Kit ($29)' : 'Wholesale Fleet Proof')}
                </span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">{t.modal.contactEmailLabel}</span>
                <span className="font-mono text-white">{formData.email}</span>
              </div>
              {formData.nfcUrl && (
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Target URL:</span>
                  <span className="font-mono text-slate-300 truncate max-w-[200px]">{formData.nfcUrl}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-slate-400">{t.modal.turnaroundLabel}</span>
                <span className="text-emerald-400 font-semibold">{t.modal.turnaroundVal}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-bold text-white transition-colors cursor-pointer"
              >
                {t.modal.btnBack}
              </button>
              <button
                onClick={handleCopyEmail}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-xs font-bold text-black transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? t.modal.emailCopied : t.modal.btnCopyEmail}</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}