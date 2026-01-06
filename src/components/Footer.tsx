import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation(); // To handle scroll-to-section on homepage
  const handleScroll = (hash: string) => {
    if (location.pathname !== '/') {
      // If not on homepage, navigate to homepage and then scroll
      // This is a simplified approach; a more robust solution would involve `navigate` and `useEffect`
      window.location.href = `/${hash}`;
    } else {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" }, // Remains anchor
      { name: "How It Works", href: "#how-it-works" }, // Remains anchor
      { name: "Success Stories", href: "#testimonials" }, // Remains anchor
      { name: "Contact", href: "/contact", isRoute: true }
    ],
    products: [
      { name: "Working Capital", href: "/working-capital", isRoute: true },
      { name: "Equipment Financing", href: "/equipment-financing", isRoute: true },
      { name: "Invoice Factoring", href: "/invoice-factoring", isRoute: true },
      { name: "Revenue-Based Funding", href: "/revenue-based-funding", isRoute: true }
    ],
    resources: [
      { name: "FAQ", href: "/faq", isRoute: true },
      { name: "Blog", href: "/blog", isRoute: true }, // New route
      { name: "Resources", href: "/resources", isRoute: true }, // New route
      { name: "Support", href: "/support", isRoute: true } // New route
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy", isRoute: true },
      { name: "Terms of Service", href: "/terms-of-service", isRoute: true },
      { name: "Cookie Policy", href: "/cookie-policy", isRoute: true },
      { name: "Compliance", href: "/compliance", isRoute: true }
    ]
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <Link to="/" className="text-2xl font-bold text-background font-playfair">Prince Capital</Link>
              </div>
              <p className="text-muted text-sm mb-6 max-w-md">
                Empowering businesses with premium, flexible funding solutions. 
                Your trusted partner for business growth and financial success.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-muted" />
                  <span className="text-sm">(305) 587-6471</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-muted" />
                  <span className="text-sm">sales@getyourbizfunded.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-muted" />
                  <span className="text-sm">92 SW 3RD ST APT 4605</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div>
              <h3 className="font-semibold mb-4 font-playfair">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    {link.isRoute ? (
                      <Link to={link.href} className="text-sm text-muted hover:text-background transition-colors">
                        {link.name}
                      </Link>
                    ) : (
                      <button onClick={() => handleScroll(link.href)} className="text-sm text-muted hover:text-background transition-colors">
                        {link.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 font-playfair">Products</h3>
              <ul className="space-y-2">
                {footerLinks.products.map((link, index) => (
                  <li key={index}>
                    <Link to={link.href} className="text-sm text-muted hover:text-background transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 font-playfair">Resources</h3>
              <ul className="space-y-2">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <Link to={link.href} className="text-sm text-muted hover:text-background transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 font-playfair">Legal</h3>
              <ul className="space-y-2">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <Link to={link.href} className="text-sm text-muted hover:text-background transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-muted/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted">© 2025 Prince Capital. All rights reserved.</div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a href="https://facebook.com/princecapital" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-muted/10 rounded-full flex items-center justify-center hover:bg-muted/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://twitter.com/princecapital" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-muted/10 rounded-full flex items-center justify-center hover:bg-muted/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com/company/princecapital" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-muted/10 rounded-full flex items-center justify-center hover:bg-muted/20 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;