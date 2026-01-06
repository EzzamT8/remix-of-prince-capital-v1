import { Users, Award, Clock, Target } from 'lucide-react';
import teamPhoto from '@/assets/team-photo.jpg';
import { motion } from 'framer-motion';
import { FadeInLeft, FadeInRight, StaggerContainer, StaggerItem } from '@/components/ui/motion';

const AboutSection = () => {
  const stats = [
    { icon: Users, value: "10,000+", label: "Businesses Funded" },
    { icon: Award, value: "$2B+", label: "Capital Deployed" },
    { icon: Clock, value: "24hrs", label: "Average Approval Time" },
    { icon: Target, value: "98%", label: "Customer Satisfaction" }
  ];

  return (
    <section id="about" className="px-4 sm:px-6 lg:px-8 py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <FadeInLeft className="space-y-8">
            <div className="space-y-6">
              <motion.div 
                className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                Since 2015
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight font-playfair">
                Empowering Business
                <span className="block gradient-text-silver">
                  Growth & Success
                </span>
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                At Prince Capital, we believe every business deserves access to capital. Our mission is to provide fast, 
                flexible funding solutions that help entrepreneurs and established businesses achieve their goals.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                With our streamlined application process and personalized approach, we've helped thousands of businesses 
                across various industries secure the funding they need to grow, expand, and thrive in today's competitive marketplace.
              </p>
            </div>
            
            {/* Enhanced Stats Grid */}
            <StaggerContainer className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <StaggerItem key={index}>
                    <motion.div 
                      className="stat-card group"
                      whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    >
                      <div className="stat-icon relative">
                        <IconComponent className="w-7 h-7 text-black" />
                      </div>
                      <div className="stat-value">{stat.value}</div>
                      <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </FadeInLeft>

          {/* Enhanced Team Photo */}
          <FadeInRight className="relative">
            <motion.div 
              className="enhanced-image-container aspect-square shadow-large hover:shadow-glow transition-all duration-500"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={teamPhoto} 
                alt="Prince Capital team working together"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div 
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl"
              animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.25, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />
          </FadeInRight>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;