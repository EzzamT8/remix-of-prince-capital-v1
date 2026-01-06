import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToHome from '@/components/BackToHome';

const CompliancePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BackToHome currentPage="Compliance" />
          <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-8">Compliance</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold font-playfair mb-4">Our Commitment to Compliance</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Prince Capital, we are committed to operating with the highest standards of integrity and compliance. 
                We adhere to all applicable federal and state regulations governing business financing and maintain 
                robust internal controls to ensure ethical business practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold font-playfair mb-4">Regulatory Framework</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our operations comply with applicable regulations including but not limited to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Truth in Lending Act (TILA)</li>
                <li>Equal Credit Opportunity Act (ECOA)</li>
                <li>Fair Credit Reporting Act (FCRA)</li>
                <li>Bank Secrecy Act (BSA) / Anti-Money Laundering (AML)</li>
                <li>State licensing requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold font-playfair mb-4">Fair Lending Practices</h2>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to fair lending and do not discriminate on the basis of race, color, religion, national 
                origin, sex, marital status, age, or because you receive public assistance. All funding decisions are 
                based on legitimate business factors and objective underwriting criteria.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold font-playfair mb-4">Data Protection</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement comprehensive data protection measures to safeguard your personal and financial information. 
                This includes encryption, secure data storage, access controls, and regular security assessments. We are 
                committed to protecting your information in compliance with applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold font-playfair mb-4">Transparency</h2>
              <p className="text-muted-foreground leading-relaxed">
                We believe in clear and transparent communication. All terms, rates, and fees associated with our funding 
                products are disclosed upfront. We provide clear documentation and ensure you understand the terms before 
                accepting any funding offer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold font-playfair mb-4">Complaints and Concerns</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any complaints or concerns about our practices, we encourage you to contact us. We take all 
                concerns seriously and have established procedures for investigating and resolving complaints promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold font-playfair mb-4">Contact Our Compliance Team</h2>
              <p className="text-muted-foreground leading-relaxed">
                For compliance-related inquiries, please contact us at:<br />
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

export default CompliancePage;
