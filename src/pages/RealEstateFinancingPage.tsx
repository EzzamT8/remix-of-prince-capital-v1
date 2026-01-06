import { Home, CheckCircle, ArrowRight, Clock, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToHome from '@/components/BackToHome';

const RealEstateFinancingPage = () => {
  const navigate = useNavigate();

  const benefits = [
    "Specialized commercial real estate funding",
    "Competitive interest rates",
    "Extended repayment terms",
    "Purchase or refinance options",
    "Expert real estate guidance"
  ];

  const requirements = [
    "Commercial real estate project",
    "Property appraisal required",
    "Down payment typically 20-25%",
    "Strong credit profile",
    "Business financial statements"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="px-4 sm:px-6 lg:px-8 py-16 pt-32">
        <div className="max-w-4xl mx-auto">
          <BackToHome currentPage="Real Estate Financing" />
          
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-6">
              <Home className="w-8 h-8 text-primary" />
            </div>
            <h1 className="heading-large text-foreground mb-4">
              Real Estate Financing
            </h1>
            <p className="text-large max-w-2xl mx-auto mb-8">
              Specialized funding for commercial real estate purchases and development projects to expand your business footprint.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>$100K - $10M</span>
              </div>
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4 text-primary" />
                <span>5-30 years</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Key Benefits</CardTitle>
                <CardDescription>Why choose real estate financing</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Requirements</CardTitle>
                <CardDescription>What you need to qualify</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-muted/30 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Apply for real estate financing and secure the commercial property your business needs.
            </p>
            <Button 
              onClick={() => navigate('/#application')} 
              className="btn-primary px-8"
            >
              Start Application
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RealEstateFinancingPage;