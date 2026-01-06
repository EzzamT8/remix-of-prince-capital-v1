import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToHome from '@/components/BackToHome';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQPage = () => {
  const faqs = [
    {
      category: "General Questions",
      questions: [
        {
          question: "What types of businesses do you fund?",
          answer: "We fund a wide variety of businesses across most industries including retail, restaurants, healthcare, construction, transportation, and professional services. We work with businesses that have been operating for at least 6 months and generate consistent revenue."
        },
        {
          question: "How much funding can I qualify for?",
          answer: "Funding amounts typically range from $10,000 to $5 million, depending on your business revenue, time in business, and overall financial health. Most businesses qualify for funding equal to 100-150% of their average monthly revenue."
        },
        {
          question: "How long does the approval process take?",
          answer: "Our streamlined process allows most applications to be reviewed within 24-48 hours. Once approved, funds can be deposited into your business account as quickly as the same day or within 1-3 business days."
        },
        {
          question: "What credit score do I need to qualify?",
          answer: "Unlike traditional banks, we take a holistic approach to underwriting. While credit is a factor, we focus more on your business performance and revenue. Many business owners with credit scores as low as 500 have qualified for funding."
        }
      ]
    },
    {
      category: "Application Process",
      questions: [
        {
          question: "What documents do I need to apply?",
          answer: "The basic requirements include 3-6 months of business bank statements, a valid ID, and a simple one-page application. Depending on the funding product, we may request additional documentation such as tax returns or financial statements."
        },
        {
          question: "Is there an application fee?",
          answer: "No, there is absolutely no fee to apply for funding. We only earn when we successfully help you secure the capital your business needs."
        },
        {
          question: "Will applying affect my credit score?",
          answer: "Our initial application uses a soft credit pull, which does not affect your credit score. A hard inquiry may be required for certain products, but we will always inform you before proceeding."
        },
        {
          question: "Can I apply if I have an existing loan or advance?",
          answer: "Yes, many of our clients have existing financing. We can often provide additional capital or help consolidate existing debt into a single, more manageable payment."
        }
      ]
    },
    {
      category: "Funding Products",
      questions: [
        {
          question: "What is a Merchant Cash Advance (MCA)?",
          answer: "A Merchant Cash Advance provides upfront capital in exchange for a percentage of your future sales. Payments are automatically deducted daily or weekly based on your revenue, making it flexible for businesses with fluctuating income."
        },
        {
          question: "How does Revenue-Based Funding work?",
          answer: "Revenue-Based Funding provides capital based on your business revenue. Repayment is tied to a fixed percentage of your daily or weekly revenue, so payments adjust naturally with your business performance."
        },
        {
          question: "What is Invoice Factoring?",
          answer: "Invoice Factoring allows you to sell your outstanding invoices to us at a discount for immediate cash. This is ideal for B2B businesses that have customers with 30-90 day payment terms and need faster access to their receivables."
        },
        {
          question: "Do you offer equipment financing?",
          answer: "Yes, we offer equipment financing for purchasing or leasing new or used equipment. The equipment itself serves as collateral, which often results in more favorable terms and longer repayment periods."
        }
      ]
    },
    {
      category: "Repayment & Terms",
      questions: [
        {
          question: "What are the repayment terms?",
          answer: "Repayment terms vary by product and typically range from 3 to 24 months. We work with you to find terms that align with your cash flow and business needs. Some products offer weekly or daily payment options."
        },
        {
          question: "Are there prepayment penalties?",
          answer: "Many of our funding products have no prepayment penalties, allowing you to pay off your balance early and save on fees. Specific terms vary by product, and your funding specialist will explain all details before you commit."
        },
        {
          question: "What happens if I miss a payment?",
          answer: "We understand that business cash flow can be unpredictable. If you anticipate difficulty making a payment, contact us immediately. We work with our clients to find solutions and avoid default situations whenever possible."
        },
        {
          question: "Can I renew my funding?",
          answer: "Yes, many clients renew their funding after paying down a portion of their existing balance (typically 50-60%). Renewals often come with improved terms based on your payment history with us."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BackToHome currentPage="FAQ" />
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-4">Frequently Asked Questions</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Find answers to common questions about our business funding solutions. 
              Can't find what you're looking for? Contact us directly.
            </p>
          </div>
          
          <div className="space-y-10">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-semibold font-playfair mb-6 text-primary">{category.category}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border border-border/50 rounded-lg px-6 bg-card/50"
                    >
                      <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center p-8 bg-primary/5 rounded-2xl border border-primary/10">
            <h3 className="text-xl font-semibold font-playfair mb-3">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our funding specialists are here to help. Reach out for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:3055876471" className="cta-primary">
                <span className="relative z-10">Call (305) 587-6471</span>
              </a>
              <a href="mailto:sales@getyourbizfunded.com" className="cta-secondary">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;
