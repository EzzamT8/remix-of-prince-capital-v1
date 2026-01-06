import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToHome from '@/components/BackToHome';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BackToHome currentPage="Privacy Policy" />
          <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold font-playfair mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Prince Capital, we collect information you provide directly to us, such as when you apply for funding, 
                create an account, or contact us for support. This may include your name, email address, phone number, 
                business information, financial data, and any other information you choose to provide.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold font-playfair mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use the information we collect to process your funding applications, communicate with you about our 
                services, improve our offerings, and comply with legal obligations. We may also use your information 
                to send you marketing communications, which you can opt out of at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold font-playfair mb-4">3. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell your personal information. We may share your information with third-party service providers 
                who assist us in operating our business, processing applications, or servicing you. All third parties are 
                contractually obligated to protect your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold font-playfair mb-4">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the 
                Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold font-playfair mb-4">5. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to access, correct, or delete your personal information. You may also have the right 
                to data portability and to object to certain processing of your information. To exercise these rights, 
                please contact us at sales@getyourbizfunded.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold font-playfair mb-4">6. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:<br />
                Email: sales@getyourbizfunded.com<br />
                Phone: (305) 587-6471<br />
                Address: 92 SW 3RD ST APT 4605
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
