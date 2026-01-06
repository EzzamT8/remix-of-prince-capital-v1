import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const fundingProducts = [
    { name: 'Working Capital', path: '/working-capital' },
    { name: 'Revenue Based Funding', path: '/revenue-based-funding' },
    { name: 'Equipment Financing', path: '/equipment-financing' },
    { name: 'Invoice Factoring', path: '/invoice-factoring' },
    { name: 'SBA Loans', path: '/sba-loans' },
    { name: 'Strategic Financing', path: '/strategic-financing' },
    { name: 'Real Estate Financing', path: '/real-estate-financing' },
    { name: 'Business Lines of Credit', path: '/business-lines-of-credit' },
  ];
  
  const handleNavClick = (target: string) => {
    setIsMenuOpen(false); // Close mobile menu on click
    if (target.startsWith('/')) {
      // It's a route, use navigate
      navigate(target);
    } else if (target.startsWith('#')) {
      // It's an anchor on the current page
      if (location.pathname !== '/') {
        // If not on homepage, navigate to homepage and then scroll
        navigate('/').then(() => {
          const section = document.querySelector(target);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        });
      } else {
        // Already on homepage, just scroll
        const section = document.querySelector(target);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };
  
  return (
    <header className="fixed top-0 left-0 right-0 header-glass z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-all duration-300 hover:scale-105">
            <span className="text-2xl font-bold text-foreground font-playfair">Prince Capital</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <DropdownMenu>
              <DropdownMenuTrigger className="nav-link group flex items-center">
                Funding Solutions <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {fundingProducts.map((product) => (
                  <DropdownMenuItem key={product.path} onClick={() => handleNavClick(product.path)}>
                    {product.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <button onClick={() => handleNavClick('#about')} className="nav-link">
              About Us
            </button>
            <button onClick={() => handleNavClick('/contact')} className="nav-link">
              Contact
            </button>
            <button onClick={() => handleNavClick('#apply')} className="nav-link">
              Apply Now
            </button>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="cta-primary" onClick={() => handleNavClick('#apply')}>
              <span className="relative z-10">Get Funded Today</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden p-3 rounded-lg text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mobile-menu py-6 animate-fade-in">
            <nav className="flex flex-col space-y-2">
              <span className="mobile-nav-link font-semibold text-muted-foreground pt-4 pb-2">
                Funding Solutions
              </span>
              {fundingProducts.map((product) => (
                <button 
                  key={`mobile-${product.path}`} 
                  onClick={() => handleNavClick(product.path)} 
                  className="mobile-nav-link pl-8" // Indent for sub-item feel
                >
                  {product.name}
                </button>
              ))}
              <button onClick={() => handleNavClick('#about')} className="mobile-nav-link">
                About Us
              </button>
              <button onClick={() => handleNavClick('/contact')} className="mobile-nav-link">
                Contact
              </button>
              <button onClick={() => handleNavClick('#apply')} className="mobile-nav-link">
                Apply Now
              </button>
              <div className="pt-6 mt-4 border-t border-border/30">
                <button className="cta-primary w-full" onClick={() => handleNavClick('#apply')}>
                  <span className="relative z-10">Get Funded Today</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;