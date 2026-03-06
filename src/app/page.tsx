import { AnnouncementBar } from '@/components/AnnouncementBar';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { DashboardVisual } from '@/components/DashboardVisual';
import { TrustSection } from '@/components/TrustSection';
import { ProblemSection } from '@/components/ProblemSection';
import { SolutionSection } from '@/components/SolutionSection';
import { CoreFeatures } from '@/components/CoreFeatures';
import { Benefits } from '@/components/Benefits';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { HowItWorks } from '@/components/HowItWorks';
import { IdealCustomer } from '@/components/IdealCustomer';
import { FAQSection } from '@/components/FAQSection';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200">
      <AnnouncementBar />
      <Navigation />
      <main>
        <Hero />
        <DashboardVisual />
        <TrustSection />
        <ProblemSection />
        <SolutionSection />
        <CoreFeatures />
        <Benefits />
        <WhyChooseUs />
        <HowItWorks />
        <IdealCustomer />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
