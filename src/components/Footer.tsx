import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/prince-capital-logo.png';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "How It Works", href: "#how-it-works" },
      { name: "Success Stories", href: "#testimonials" },
      { name: "Contact", href: "/contact", isRoute: true }
    ],
    products: [
      { name: "Working Capital", href: "/working-capital" },
      { name: "Equipment Financing", href: "/equipment-financing" },
      { name: "Invoice Factoring", href: "/invoice-factoring" },
      { name: "Revenue-Based Funding", href: "/revenue-based-funding" }
    ],
    resources: [
      { name: "FAQ", href: "/faq", isRoute: true },
      { name: "Blog", href: "#blog" },
      { name: "Resources", href: "#resources" },
      { name: "Support", href: "#support" }
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
                <img src={logo} alt="Prince Capital logo" className="h-24 w-auto invert" />
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
                      <a href={link.href} className="text-sm text-muted hover:text-background transition-colors">
                        {link.name}
                      </a>
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
                    {link.isRoute ? (
                      <Link to={link.href} className="text-sm text-muted hover:text-background transition-colors">
                        {link.name}
                      </Link>
                    ) : (
                      <a href={link.href} className="text-sm text-muted hover:text-background transition-colors">
                        {link.name}
                      </a>
                    )}
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
              <a href="#" className="w-8 h-8 bg-muted/10 rounded-full flex items-center justify-center hover:bg-muted/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-muted/10 rounded-full flex items-center justify-center hover:bg-muted/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-muted/10 rounded-full flex items-center justify-center hover:bg-muted/20 transition-colors">
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