import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedContent from '@/components/FeaturedContent';
import FundingProducts from '@/components/FundingProducts';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import ApplicationForm from '@/components/ApplicationForm';
import BottomSection from '@/components/BottomSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedContent />
        <FundingProducts />
        <AboutSection />
        <TestimonialsSection />
        <CTASection />
        <ApplicationForm />
        <BottomSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
