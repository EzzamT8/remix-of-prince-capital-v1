import { motion } from 'framer-motion';
import { FadeInUp } from '@/components/ui/motion';

const BottomSection = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-20">
      <div className="max-w-7xl mx-auto">
        <FadeInUp className="text-center max-w-5xl mx-auto">
          <h2 className="heading-large text-foreground leading-tight">
            Now we've made funding accessible to even more businesses{' '}
            <span className="gradient-text-silver">
              directly through our platform
            </span>
          </h2>
        </FadeInUp>
      </div>
    </section>
  );
};

export default BottomSection;