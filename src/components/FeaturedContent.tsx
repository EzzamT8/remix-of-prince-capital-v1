import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';
import { motion } from 'framer-motion';
import { ScaleIn } from '@/components/ui/motion';

const FeaturedContent = () => {
  const navigate = useNavigate();
  
  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-16">
      <div className="max-w-7xl mx-auto">
        <ScaleIn>
          <div className="relative rounded-2xl overflow-hidden shadow-medium h-[500px] md:h-[600px]">
            {/* Background Image */}
            <motion.div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
              style={{ backgroundImage: `url(${heroImage})` }}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            >
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/40"></div>
            </motion.div>
            
            {/* Content Overlay */}
            <div className="relative h-full flex flex-col justify-between p-6 md:p-8 lg:p-12">
              {/* Top Badge */}
              <motion.div 
                className="flex justify-start"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="inline-flex items-center space-x-2 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-foreground bg-black/80 border border-primary/20">
                  <Globe size={16} />
                  <span>Prince Capital</span>
                </div>
              </motion.div>
              
              {/* Bottom Content */}
              <div className="flex flex-col space-y-6">
                <motion.h2 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-2xl font-playfair"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  Get Funding in 24 — Hours
                  <br />
                  <span className="gradient-text-silver">Business Growth</span>
                </motion.h2>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                    <Button className="btn-primary" onClick={() => navigate('/#application')}>
                      Start Application
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                    <Button className="btn-primary" onClick={() => navigate('/#application')}>
                      Learn More
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
};

export default FeaturedContent;