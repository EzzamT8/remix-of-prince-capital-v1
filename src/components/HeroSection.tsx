import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px]" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 className="heading-hero text-foreground mb-6">
                <span className="block">Unlock Your</span>
                <span className="block gradient-text-silver">Business Potential</span>
              </h1>
              <p className="text-large max-w-xl mb-8">
                We provide ambitious businesses with the fast, flexible capital they need to scale, innovate, and lead their industry. Your vision, our funding.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button
                className="cta-primary group"
                onClick={() => {
                  const applicationSection = document.getElementById('apply');
                  if (applicationSection) {
                    applicationSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Apply For Funding
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>

          {/* Visual Element */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            <div className="relative w-full h-[400px] enhanced-image-container">
              <div className="absolute inset-0 card-premium rounded-2xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-primary/10 shadow-glow" />
                <div className="absolute w-64 h-64 rounded-full border border-border" />
                <div className="absolute w-80 h-80 rounded-full border border-border/50 animate-pulse" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;