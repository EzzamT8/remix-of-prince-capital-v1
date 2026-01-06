import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Shield, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/ui/motion';

const CTASection = () => {
  const navigate = useNavigate();
  
  const benefits = [
    { icon: Clock, text: "24-hour approval process" },
    { icon: Shield, text: "No collateral required" },
    { icon: DollarSign, text: "Competitive rates" }
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="max-w-4xl mx-auto text-center">
        <FadeInUp>
          <h2 className="heading-large text-foreground mb-6">
            Ready to Fund Your Business Growth?
          </h2>
          <p className="text-large mb-8 max-w-2xl mx-auto">
            Join thousands of successful businesses that have secured funding through Prince Capital. 
            Get started with our simple application process today.
          </p>
        </FadeInUp>
        
        {/* Benefits */}
        <StaggerContainer className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <StaggerItem key={index}>
                <motion.div 
                  className="flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <IconComponent className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{benefit.text}</span>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* CTA Buttons */}
        <FadeInUp delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button className="cta-primary group" onClick={() => navigate('/#application')}>
                Apply Now
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            * No impact on credit score during initial application review
          </p>
        </FadeInUp>
      </div>
    </section>
  );
};

export default CTASection;