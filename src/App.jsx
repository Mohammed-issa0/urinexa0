import Navbar from "./components/1-Navbar";
import HeroSection from './components/2-HeroSection';
import ProblemsSection from './components/3-ProblemsSection';
import StatisticsSection from './components/4-StatisticsSection';
import HealthRisksSection from './components/5-HealthRisksSection';
import BenefitsSection from './components/6-BenefitsSection';
import AdditionalBenefitsSection from './components/7-AdditionalBenefitsSection';
import FAQSection from './components/9-FAQSection';
import PricingSection from './components/8-PricingSection';
import FinalCTASection from './components/10-FinalCTASection';

function App() {
  return (
    <div className="min-h-screen bg-secondary text-center" dir="rtl">
      <Navbar/>
      <HeroSection />
      <ProblemsSection />
      <StatisticsSection />
      <HealthRisksSection />
      <BenefitsSection />
      <AdditionalBenefitsSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
}

export default App;