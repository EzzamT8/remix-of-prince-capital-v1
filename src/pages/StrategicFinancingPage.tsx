import { CreditCard, CheckCircle, ArrowRight, Clock, FileText, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToHome from '@/components/BackToHome';

const StrategicFinancingPage = () => {
  const navigate = useNavigate();

  const benefits = [
    "0% APR for 12-21 months intro period",
    "No collateral or business revenue required",
    "Build business credit history",
    "Fast approval process (2-3 weeks)",
    "Keep 100% equity in your business",
    "Flexible fund usage - inventory, marketing, equipment, payroll"
  ];

  const requirements = [
    "Personal credit score 680+ (700+ preferred)",
    "No bankruptcies in the last 7 years",
    "Clean credit history with limited recent inquiries",
    "Valid government-issued ID",
    "Proof of income (for certain cards)"
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Credit Profile Review",
      description: "We analyze your credit profile to identify the best 0% APR business credit cards for your situation."
    },
    {
      step: "2",
      title: "Strategic Card Selection",
      description: "Our experts select and apply for multiple cards with the longest 0% intro periods and highest limits."
    },
    {
      step: "3",
      title: "Approval & Credit Stacking",
      description: "As cards are approved, we strategically stack credit limits to maximize your available funding."
    },
    {
      step: "4",
      title: "Access Your Funds",
      description: "Use your new credit lines directly or via balance transfers to access cash at 0% interest."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="px-4 sm:px-6 lg:px-8 py-16 pt-32">
        <div className="max-w-4xl mx-auto">
          <BackToHome currentPage="0% Credit Card Stacking" />
          
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-6">
              <CreditCard className="w-8 h-8 text-primary" />
            </div>
            <h1 className="heading-large text-foreground mb-4">
              0% Credit Card Stacking
            </h1>
            <p className="text-large max-w-2xl mx-auto mb-8">
              Access $50K - $250K+ in business funding at 0% APR by strategically stacking multiple business credit cards with introductory offers.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>$50K - $250K+</span>
              </div>
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4 text-primary" />
                <span>0% APR for 12-21 months</span>
              </div>
            </div>
          </div>

          {/* How It Works Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-primary" />
                How Credit Card Stacking Works
              </CardTitle>
              <CardDescription>
                A strategic approach to accessing interest-free business capital
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {howItWorks.map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-lg bg-muted/30">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Key Benefits</CardTitle>
                <CardDescription>Why choose 0% credit card stacking</CardDescription>
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

          {/* Important Note */}
          <Card className="mb-12 border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Important:</strong> The 0% APR is an introductory rate that typically lasts 12-21 months depending on the card. After the intro period, standard APR rates apply. Our team helps you plan for this transition, whether through payoff strategies or refinancing options.
              </p>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center bg-muted/30 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Access 0% Funding?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get started with a free credit consultation. We'll review your profile and show you exactly how much 0% funding you can access.
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

export default StrategicFinancingPage;
