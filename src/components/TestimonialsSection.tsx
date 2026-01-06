import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/ui/motion';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechStart Solutions",
      role: "CEO",
      content: "Prince Capital helped us secure $200K in working capital when traditional banks said no. Their process was incredibly fast and transparent.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      company: "Rodriguez Manufacturing",
      role: "Owner",
      content: "The equipment financing we received allowed us to purchase new machinery and increase our production capacity by 40%. Game-changing!",
      rating: 5
    },
    {
      name: "Emily Thompson",
      company: "Green Valley Retail",
      role: "Founder",
      content: "Invoice factoring through Prince Capital improved our cash flow dramatically. We can now take on larger orders without worrying about payment delays.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <FadeInUp className="text-center mb-12">
          <h2 className="heading-large text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-large max-w-2xl mx-auto">
            Don't just take our word for it. See how we've helped businesses like yours achieve their funding goals.
          </p>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="bg-card border border-border rounded-lg p-6 relative h-full"
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i, duration: 0.3 }}
                    >
                      <Star className="w-4 h-4 fill-primary text-primary" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default TestimonialsSection;