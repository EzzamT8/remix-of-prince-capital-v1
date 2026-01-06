import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/prince-capital-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleNavClick = (hash: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/${hash}`;
    } else {
      document.querySelector(hash)?.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };
  
  return (
    <header className="fixed top-0 left-0 right-0 header-glass z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-all duration-300 hover:scale-105">
            <img src={logo} alt="Prince Capital logo" className="h-24 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <button onClick={() => handleNavClick('#products')} className="nav-link">
              Funding Products
            </button>
            <button onClick={() => handleNavClick('#about')} className="nav-link">
              About Us
            </button>
            <button onClick={() => handleNavClick('#testimonials')} className="nav-link">
              Success Stories
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
              <button onClick={() => handleNavClick('#products')} className="mobile-nav-link">
                Funding Products
              </button>
              <button onClick={() => handleNavClick('#about')} className="mobile-nav-link">
                About Us
              </button>
              <button onClick={() => handleNavClick('#testimonials')} className="mobile-nav-link">
                Success Stories
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