import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToHome from '@/components/BackToHome';

const CookiePolicyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BackToHome currentPage="Cookie Policy" />
          <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-8">Cookie Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold font-playfair mb-4">1. What Are Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files that are stored on your computer or mobile device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and understanding how 
                you use our site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold font-playfair mb-4">2. Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Essential Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    These cookies are necessary for the website to function properly. They enable basic functions like 
                    page navigation and access to secure areas of the website.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Analytics Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    These cookies help us understand how visitors interact with our website by collecting and reporting 
                    information anonymously. This helps us improve our website and services.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Marketing Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    These cookies are used to track visitors across websites to display relevant advertisements. 
                    They may be set by our advertising partners.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold font-playfair mb-4">3. Managing Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Most web browsers allow you to control cookies through their settings. You can set your browser to 
                refuse cookies or delete certain cookies. However, if you block or delete cookies, some features of 
                our website may not function properly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold font-playfair mb-4">4. Third-Party Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may use third-party services that set cookies on your device. These third parties have their own 
                privacy policies and we encourage you to read them. We do not have control over how these third 
                parties use their cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold font-playfair mb-4">5. Updates to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other 
                operational, legal, or regulatory reasons. Please revisit this page periodically to stay informed 
                about our use of cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold font-playfair mb-4">6. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about our use of cookies, please contact us at:<br />
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

export default CookiePolicyPage;
