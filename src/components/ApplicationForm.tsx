import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Building, User, DollarSign, FileText, Loader2 } from 'lucide-react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const formSchema = z.object({
  businessName: z.string().min(1, { message: 'Business Name is required.' }),
  ownerName: z.string().min(1, { message: 'Full Name is required.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  phone: z.string().min(10, { message: 'Phone number is required.' }).max(15, { message: 'Invalid phone number.' }),
  fundingAmount: z.string().min(1, { message: 'Funding Amount is required.' }),
  fundingPurpose: z.string().min(1, { message: 'Funding Purpose is required.' }),
  businessType: z.string().min(1, { message: 'Business Type is required.' }),
  monthlyRevenue: z.string().min(1, { message: 'Monthly Revenue is required.' }),
  creditScore: z.string().min(1, { message: 'Credit Score is required.' }),
  smsConsent: z.boolean().refine(val => val === true, {
    message: 'You must agree to receive SMS messages.',
  }),
});

const ApplicationForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: '',
      ownerName: '',
      email: '',
      phone: '',
      fundingAmount: '',
      fundingPurpose: '',
      businessType: '',
      monthlyRevenue: '',
      creditScore: '',
      smsConsent: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    
    try {
      const webhookData = {
        business_name: values.businessName,
        owner_name: values.ownerName,
        email: values.email,
        phone: values.phone,
        funding_amount: values.fundingAmount,
        funding_purpose: values.fundingPurpose,
        business_type: values.businessType,
        monthly_revenue: values.monthlyRevenue,
        credit_score: values.creditScore,
        sms_consent: values.smsConsent,
        timestamp: new Date().toISOString(),
        source: 'website_application_form'
      };

      // Use environment variable for webhook URL
      const WEBHOOK_URL = import.meta.env.VITE_WEBHOOK_URL; 

      if (!WEBHOOK_URL) {
        throw new Error('Webhook URL not configured. Please set VITE_WEBHOOK_URL in your .env file.');
      }

      const response = await fetch(WEBHOOK_URL, {
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
        form.reset(); // Reset form using react-hook-form
      } else {
        throw new Error('Failed to submit application');
      }
    } catch (error: any) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission Failed",
        description: error.message || "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Business Information */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Building className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">Business Information</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="businessName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your business name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="businessType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Type *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select business type" />
                            </SelectTrigger>
                          </FormControl>
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
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Owner Information */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2 mb-4">
                  <User className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">Owner Information</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="ownerName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="Enter your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="monthlyRevenue"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Monthly Revenue *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select monthly revenue" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="0-10k">$0 - $10,000</SelectItem>
                            <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                            <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                            <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                            <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                            <SelectItem value="250k+">$250,000+</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Funding Information */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2 mb-4">
                  <DollarSign className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">Funding Requirements</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fundingAmount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Funding Amount Needed *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select funding amount" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="5k-25k">$5,000 - $25,000</SelectItem>
                            <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                            <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                            <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                            <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                            <SelectItem value="500k+">$500,000+</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="fundingPurpose"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Purpose of Funding *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select funding purpose" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="working-capital">Working Capital</SelectItem>
                            <SelectItem value="equipment">Equipment Purchase</SelectItem>
                            <SelectItem value="expansion">Business Expansion</SelectItem>
                            <SelectItem value="inventory">Inventory</SelectItem>
                            <SelectItem value="marketing">Marketing</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="creditScore"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Credit Score *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your credit score range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="570-640">570-640</SelectItem>
                          <SelectItem value="640-700">640-700</SelectItem>
                          <SelectItem value="700-750">700-750</SelectItem>
                          <SelectItem value="750-800+">750-800+</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* SMS Opt-in */}
              <div className="border-t border-border pt-6">
                <FormField
                  control={form.control}
                  name="smsConsent"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="mt-1"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm leading-relaxed cursor-pointer">
                          By submitting, you agree to receive SMS from Prince Capital at the number provided. Msg & data rates may apply. 
                          Msg freq varies. Reply STOP to opt out, HELP for help. Consent is not required as a condition of credit. See our Terms and Privacy Policy.
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
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
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;