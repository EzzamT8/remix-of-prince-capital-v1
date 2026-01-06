import { DollarSign, TrendingUp, Zap, Shield, Building, CreditCard, Home, Repeat } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/ui/motion';

const FundingProducts = () => {
  const navigate = useNavigate();
  
  const products = [
    {
      icon: DollarSign,
      title: "Working Capital",
      description: "Flexible funding for day-to-day operations and growth opportunities.",
      amount: "$10K - $500K",
      term: "3-18 months",
      path: "/working-capital"
    },
    {
      icon: TrendingUp,
      title: "Revenue-Based Funding",
      description: "Funding based on your monthly revenue with flexible repayment terms.",
      amount: "$25K - $2M",
      term: "6-24 months",
      path: "/revenue-based-funding"
    },
    {
      icon: Zap,
      title: "Equipment Financing",
      description: "Fast funding for equipment purchases and business infrastructure.",
      amount: "$5K - $1M",
      term: "12-60 months",
      path: "/equipment-financing"
    },
    {
      icon: Shield,
      title: "Invoice Factoring",
      description: "Convert outstanding invoices into immediate cash flow.",
      amount: "$10K - $5M",
      term: "30-90 days",
      path: "/invoice-factoring"
    },
    {
      icon: Building,
      title: "SBA Loans",
      description: "Government-backed loans with competitive rates and extended terms.",
      amount: "$50K - $5M",
      term: "5-25 years",
      path: "/sba-loans"
    },
    {
      icon: CreditCard,
      title: "0% Credit Card Stacking",
      description: "Access interest-free funding by strategically stacking 0% APR business credit cards.",
      amount: "$50K - $250K+",
      term: "0% APR for 12-21 mo",
      path: "/strategic-financing"
    },
    {
      icon: Home,
      title: "Real Estate Financing",
      description: "Specialized funding for commercial real estate purchases and development.",
      amount: "$100K - $10M",
      term: "5-30 years",
      path: "/real-estate-financing"
    },
    {
      icon: Repeat,
      title: "Business Lines of Credit",
      description: "Revolving credit line for ongoing business needs and flexibility.",
      amount: "$10K - $2M",
      term: "12-24 months",
      path: "/business-lines-of-credit"
    }
  ];

  return (
    <section id="products" className="px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <FadeInUp className="text-center mb-12">
          <h2 className="heading-large text-foreground mb-4">
            Funding Solutions for Every Business
          </h2>
          <p className="text-large max-w-2xl mx-auto">
            Choose from our range of flexible funding products designed to meet your business needs
          </p>
        </FadeInUp>
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <StaggerItem key={index}>
                <motion.div
                  className="card-premium rounded-xl p-8 hover:shadow-large transition-all duration-500 group h-full"
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  {/* Top accent line */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Icon with glow effect */}
                  <div className="relative mb-6">
                    <motion.div 
                      className="icon-glow flex items-center justify-center w-16 h-16 rounded-xl mb-1 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <IconComponent className="w-8 h-8 text-black" />
                    </motion.div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 font-playfair">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                      {product.description}
                    </p>
                    
                    {/* Enhanced info section */}
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center p-3 rounded-lg bg-background/30 border border-border/30">
                        <span className="text-muted-foreground text-sm font-medium">Amount</span>
                        <span className="font-bold text-foreground text-sm">{product.amount}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-background/30 border border-border/30">
                        <span className="text-muted-foreground text-sm font-medium">Term</span>
                        <span className="font-bold text-foreground text-sm">{product.term}</span>
                      </div>
                    </div>
                    
                    {/* Enhanced button */}
                    <motion.button
                      className="btn-card w-full group-hover:shadow-glow"
                      onClick={() => navigate(product.path)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10">Learn More</span>
                    </motion.button>
                  </div>
                  
                  {/* Subtle background decoration */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                    <IconComponent className="w-full h-full text-primary" />
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default FundingProducts;