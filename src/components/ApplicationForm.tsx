import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Building, User, DollarSign, FileText, Loader2 } from 'lucide-react';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    email: '',
    phone: '',
    fundingAmount: '',
    fundingPurpose: '',
    businessType: '',
    monthlyRevenue: '',
    creditScore: '',
    smsConsent: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    const requiredFields = [
      'businessName', 'ownerName', 'email', 'phone', 
      'fundingAmount', 'fundingPurpose', 'businessType', 'monthlyRevenue', 'creditScore'
    ];
    
    for (const field of requiredFields) {
      if (!formData[field]) {
        toast({
          title: "Validation Error",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
        return false;
      }
    }

    if (!formData.smsConsent) {
      toast({
        title: "SMS Consent Required",
        description: "Please agree to receive SMS messages to continue.",
        variant: "destructive",
      });
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      const webhookData = {
        business_name: formData.businessName,
        owner_name: formData.ownerName,
        email: formData.email,
        phone: formData.phone,
        funding_amount: formData.fundingAmount,
        funding_purpose: formData.fundingPurpose,
        business_type: formData.businessType,
        monthly_revenue: formData.monthlyRevenue,
        credit_score: formData.creditScore,
        sms_consent: formData.smsConsent,
        timestamp: new Date().toISOString(),
        source: 'website_application_form'
      };

      const response = await fetch('https://services.leadconnectorhq.com/hooks/nYnCLEScAp34P3qm6p2Y/webhook-trigger/kPKskQFpVLQJdTUuWVIJ', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData),
      });

      if (response.ok) {
        toast({
          title: "Application Submitted!",
          description: "Thank you! We'll review your application and get back to you within 24 hours.",
        });
        
        // Reset form
        setFormData({
          businessName: '',
          ownerName: '',
          email: '',
          phone: '',
          fundingAmount: '',
          fundingPurpose: '',
          businessType: '',
          monthlyRevenue: '',
          creditScore: '',
          smsConsent: false
        });
      } else {
        throw new Error('Failed to submit application');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="apply" className="px-4 sm:px-6 lg:px-8 py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-large text-foreground mb-4">
            Start Your Funding Application
          </h2>
          <p className="text-large max-w-2xl mx-auto">
            Complete this quick form to get started. Our team will review your application and get back to you within 24 hours.
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Business Information */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <Building className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Business Information</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name *</Label>
                  <Input
                    id="businessName"
                    value={formData.businessName}
                    onChange={(e) => handleInputChange('businessName', e.target.value)}
                    placeholder="Enter your business name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="businessType">Business Type *</Label>
                  <Select value={formData.businessType} onValueChange={(value) => handleInputChange('businessType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select business type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="restaurant">Restaurant</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="services">Services</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Owner Information */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <User className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Owner Information</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="ownerName">Full Name *</Label>
                  <Input
                    id="ownerName"
                    value={formData.ownerName}
                    onChange={(e) => handleInputChange('ownerName', e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="monthlyRevenue">Monthly Revenue *</Label>
                  <Select value={formData.monthlyRevenue} onValueChange={(value) => handleInputChange('monthlyRevenue', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select monthly revenue" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-10k">$0 - $10,000</SelectItem>
                      <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                      <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                      <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                      <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                      <SelectItem value="250k+">$250,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Funding Information */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <DollarSign className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Funding Requirements</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fundingAmount">Funding Amount Needed *</Label>
                  <Select value={formData.fundingAmount} onValueChange={(value) => handleInputChange('fundingAmount', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select funding amount" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5k-25k">$5,000 - $25,000</SelectItem>
                      <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                      <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                      <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                      <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                      <SelectItem value="500k+">$500,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="fundingPurpose">Purpose of Funding *</Label>
                  <Select value={formData.fundingPurpose} onValueChange={(value) => handleInputChange('fundingPurpose', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select funding purpose" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="working-capital">Working Capital</SelectItem>
                      <SelectItem value="equipment">Equipment Purchase</SelectItem>
                      <SelectItem value="expansion">Business Expansion</SelectItem>
                      <SelectItem value="inventory">Inventory</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="creditScore">Credit Score *</Label>
                <Select value={formData.creditScore} onValueChange={(value) => handleInputChange('creditScore', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your credit score range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="570-640">570-640</SelectItem>
                    <SelectItem value="640-700">640-700</SelectItem>
                    <SelectItem value="700-750">700-750</SelectItem>
                    <SelectItem value="750-800+">750-800+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* SMS Opt-in */}
            <div className="border-t border-border pt-6">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="smsConsent"
                  checked={formData.smsConsent}
                  onCheckedChange={(checked) => handleInputChange('smsConsent', checked === true)}
                  className="mt-1"
                />
                <div className="space-y-1">
                  <Label htmlFor="smsConsent" className="text-sm leading-relaxed cursor-pointer">
                    By submitting, you agree to receive SMS from Prince Capital at the number provided. Msg & data rates may apply. 
                    Msg freq varies. Reply STOP to opt out, HELP for help. Consent is not required as a condition of credit. See our Terms and Privacy Policy.
                  </Label>
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="text-center pt-6">
              <Button type="submit" className="btn-primary px-12" disabled={isLoading}>
                {isLoading ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <FileText className="w-4 h-4 mr-2" />
                )}
                {isLoading ? 'Submitting...' : 'Submit Application'}
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                By submitting this form, you agree to our terms and privacy policy. Your information is secure and confidential.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;