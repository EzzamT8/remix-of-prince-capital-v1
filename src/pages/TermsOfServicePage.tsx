import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToHome from '@/components/BackToHome';

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BackToHome currentPage="Terms of Service" />
          <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold font-playfair mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using Prince Capital's services, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our services. We reserve the right to modify 
                these terms at any time, and your continued use constitutes acceptance of any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold font-playfair mb-4">2. Eligibility</h2>
              <p className="text-muted-foreground leading-relaxed">
                To use our services, you must be at least 18 years old and have the legal capacity to enter into 
                binding contracts. If you are applying on behalf of a business, you represent that you have the 
                authority to bind that business to these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold font-playfair mb-4">3. Services Description</h2>
              <p className="text-muted-foreground leading-relaxed">
                Prince Capital provides business funding solutions including working capital, equipment financing, 
                invoice factoring, and other financial products. All funding is subject to approval based on our 
                underwriting criteria and verification of information provided.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold font-playfair mb-4">4. Application Process</h2>
              <p className="text-muted-foreground leading-relaxed">
                By submitting an application, you authorize us to verify the information provided, including but not 
                limited to credit checks, bank statement verification, and business verification. You agree to provide 
                accurate and complete information throughout the application process.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold font-playfair mb-4">5. Fees and Charges</h2>
              <p className="text-muted-foreground leading-relaxed">
                All fees, interest rates, and charges associated with our funding products will be clearly disclosed 
                before you accept any funding offer. You are responsible for understanding and agreeing to all terms 
                before accepting funding.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold font-playfair mb-4">6. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Prince Capital shall not be liable for any indirect, incidental, special, consequential, or punitive 
                damages arising out of or related to your use of our services. Our total liability shall not exceed 
                the amount of fees paid by you in the twelve months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold font-playfair mb-4">7. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of the State of 
                Florida, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold font-playfair mb-4">8. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms of Service, please contact us at:<br />
                Email: sales@getyourbizfunded.com<br />
                Phone: (305) 587-6471
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfServicePage;
