import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Sparkles, Send, ShieldCheck, ArrowRight, PhoneCall, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function LeadModal({ isOpen, onClose, initialData = {} }) {
  const [activeTab, setActiveTab] = useState('quote'); // 'quote' or 'sample'
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    whatsapp: '',
    quantity: '100',
    finish: 'Obsidian Black',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialData.mode === 'sample') {
      setActiveTab('sample');
    } else {
      setActiveTab('quote');
    }

    if (initialData.finish) {
      setFormData((prev) => ({ ...prev, finish: initialData.finish }));
    }
    if (initialData.quantity) {
      setFormData((prev) => ({ ...prev, quantity: String(initialData.quantity) }));
    }
    if (initialData.company) {
      setFormData((prev) => ({ ...prev, company: initialData.company }));
    }
    if (initialData.contactPerson) {
      setFormData((prev) => ({ ...prev, name: initialData.contactPerson }));
    }
    setSubmitted(false);
  }, [isOpen, initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const id = `TC-${activeTab === 'sample' ? 'SMP' : 'FLT'}-${randomNum}`;
    setTicketId(id);
    setSubmitted(true);

    // Fire confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // safe fallback
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('wholesale@tapcraft.co');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#0E1218] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black overflow-hidden text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            {/* Header Tabs */}
            <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
              <button
                type="button"
                onClick={() => setActiveTab('quote')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'quote'
                    ? 'bg-amber-400 text-black shadow-md shadow-amber-400/20'
                    : 'text-slate-400 hover:text-white bg-white/5'
                }`}
              >
                Fleet Quote & 3D Proof
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('sample')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'sample'
                    ? 'bg-amber-400 text-black shadow-md shadow-amber-400/20'
                    : 'text-slate-400 hover:text-white bg-white/5'
                }`}
              >
                Sample Kit ($29 Priority Air)
              </button>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white font-['Space_Grotesk'] mb-1">
                {activeTab === 'quote'
                  ? 'Request Free 3D Proof & Wholesale Tier'
                  : 'Order B2B Fleet Evaluation Sample Kit'}
              </h3>
              <p className="text-xs text-slate-400">
                {activeTab === 'quote'
                  ? 'Our hardware design team will render your logo in 3D within 4 hours. No obligation.'
                  : 'Receive 3 metal cards (Black, Gold, Silver) + 1 Review Stand dispatched via priority air.'}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">
                    Company / Organization <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#080A0D] border border-white/15 focus:border-amber-400 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors"
                    placeholder="e.g. Acme Capital LLC"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">
                    Your Name <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#080A0D] border border-white/15 focus:border-amber-400 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors"
                    placeholder="e.g. John Miller"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">
                    Corporate Email <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#080A0D] border border-white/15 focus:border-amber-400 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors"
                    placeholder="john@acmecapital.com"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">
                    WhatsApp or Mobile (Optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full bg-[#080A0D] border border-white/15 focus:border-amber-400 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors"
                    placeholder="+1 (555) 019-2834"
                  />
                </div>
              </div>

              {activeTab === 'quote' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">
                      Estimated Fleet Size (MOQ 20)
                    </label>
                    <select
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full bg-[#080A0D] border border-white/15 focus:border-amber-400 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors"
                    >
                      <option value="30">30 Cards ($18.00/ea)</option>
                      <option value="50">50 Cards ($15.50/ea)</option>
                      <option value="100">100 Cards ($13.50/ea) — Most Popular</option>
                      <option value="250">250 Cards ($11.00/ea)</option>
                      <option value="500">500+ Cards ($9.50/ea)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">
                      Primary Finish
                    </label>
                    <select
                      value={formData.finish}
                      onChange={(e) => setFormData({ ...formData, finish: e.target.value })}
                      className="w-full bg-[#080A0D] border border-white/15 focus:border-amber-400 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors"
                    >
                      <option value="Obsidian Black">Obsidian Matte Black (Steel)</option>
                      <option value="Royale Gold">Royale 24K Brushed Gold</option>
                      <option value="Cyber Titanium">Cyber Titanium Brushed Steel</option>
                      <option value="Review Stand">Tap-to-Review Acrylic Stand</option>
                      <option value="Mixed Fleet">Mixed Fleet Combination</option>
                    </select>
                  </div>
                </div>
              )}

              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">
                  Logo / Vector Artwork Notes
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#080A0D] border border-white/15 focus:border-amber-400 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none transition-colors"
                  placeholder="You can reply to our confirmation email with your AI/SVG/PDF logo file, or include notes here."
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 text-sm font-bold text-black bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 rounded-xl shadow-xl shadow-amber-400/25 transition-all flex items-center justify-center gap-2 cursor-pointer font-['Space_Grotesk']"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {activeTab === 'quote'
                      ? 'Submit & Generate 4-Hour 3D Proof'
                      : 'Authorize $29 Evaluation Sample Kit'}
                  </span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-2 font-mono">
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Zero Spam Guarantee</span>
                </div>
                <span>&middot;</span>
                <div className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Direct Factory Engineer Assigned</span>
                </div>
              </div>
            </form>
          </>
        ) : (
          /* Submission Confirmation View */
          <div className="text-center py-6 space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-mono text-amber-400 font-bold bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20">
                Ticket Reference: {ticketId}
              </span>
              <h3 className="text-2xl font-black text-white font-['Space_Grotesk'] mt-3 mb-2">
                Inquiry Received by Shenzhen Engineering Team!
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{formData.name}</strong> from <strong className="text-white">{formData.company}</strong>. Our hardware team is preparing your custom 3D digital photorealistic proof and official wholesale invoice.
              </p>
            </div>

            <div className="bg-[#080A0D] p-5 rounded-2xl border border-white/10 text-left max-w-md mx-auto space-y-2 text-xs text-slate-300">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">Request Type:</span>
                <span className="font-bold text-white uppercase">{activeTab === 'quote' ? 'Wholesale Fleet Proof' : 'Sample Kit'}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">Contact Email:</span>
                <span className="font-mono text-amber-300">{formData.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Turnaround Expectation:</span>
                <span className="text-emerald-400 font-semibold">Under 4 Hours</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-bold text-white transition-colors cursor-pointer"
              >
                Back to Site
              </button>
              <button
                onClick={handleCopyEmail}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-xs font-bold text-black transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Email Copied!' : 'Copy Direct Wholesale Email'}</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
