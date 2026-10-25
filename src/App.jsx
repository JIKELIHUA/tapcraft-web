import React, { useState } from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CardStudio from './components/CardStudio';
import ProductCatalog from './components/ProductCatalog';
import CostComparison from './components/CostComparison';
import PricingCalculator from './components/PricingCalculator';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import LeadModal from './components/LeadModal';
import QuickContact from './components/QuickContact';

function MainApp() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInitialData, setModalInitialData] = useState({});

  const handleOpenQuoteModal = (data = {}) => {
    setModalInitialData({ ...data, mode: 'quote' });
    setModalOpen(true);
  };

  const handleOpenSampleModal = () => {
    setModalInitialData({ mode: 'sample' });
    setModalOpen(true);
  };

  const handleScrollToStudio = () => {
    const el = document.getElementById('studio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#090B0E] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] overflow-x-hidden">
      {/* Navigation */}
      <Navbar
        onOpenQuoteModal={handleOpenQuoteModal}
        onOpenSampleModal={handleOpenSampleModal}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenQuoteModal={handleOpenQuoteModal}
          onScrollToStudio={handleScrollToStudio}
        />

        {/* Interactive 3D Card Studio */}
        <CardStudio
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* Hardware Fleet Catalog */}
        <ProductCatalog
          onOpenQuoteModal={handleOpenQuoteModal}
          onOpenSampleModal={handleOpenSampleModal}
        />

        {/* Comparison: Why 0 Subscription */}
        <CostComparison
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* Wholesale Pricing Tier Calculator */}
        <PricingCalculator
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* How It Works (3 Steps) */}
        <HowItWorks
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* Verified Enterprise Case Studies */}
        <Testimonials />

        {/* Procurement FAQ */}
        <FAQ
          onOpenSampleModal={handleOpenSampleModal}
        />
      </main>

      {/* Footer & Mobile Sticky Bar */}
      <Footer
        onOpenQuoteModal={handleOpenQuoteModal}
        onOpenSampleModal={handleOpenSampleModal}
      />

      {/* Unified Lead & Sample Modal */}
      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialData={modalInitialData}
      />

      {/* Floating Quick B2B Concierge Widget */}
      <QuickContact />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
