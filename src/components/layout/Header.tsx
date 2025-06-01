import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from '../ui/Button';
import { navItems } from '../../data';
import Logo from './Logo';

interface DropdownItem {
  title: string;
  href: string;
  description?: string;
}

interface NavItemWithDropdown {
  title: string;
  href: string;
  dropdown?: DropdownItem[];
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const enhancedNavItems: NavItemWithDropdown[] = [
    {
      title: 'Home',
      href: '#home'
    },
    {
      title: 'About',
      href: '#about',
      dropdown: [
        { title: 'Our Story', href: '#about', description: 'Learn about our journey and values' },
        { title: 'Team', href: '#about-team', description: 'Meet our expert advisors' },
        { title: 'Certifications', href: '#about-certifications', description: 'Our professional qualifications' }
      ]
    },
    {
      title: 'Services',
      href: '#services',
      dropdown: [
        { title: 'Investment Planning', href: '#investment-planning', description: 'Strategic investment solutions' },
        { title: 'Wealth Management', href: '#wealth-management', description: 'Comprehensive wealth services' },
        { title: 'Tax Planning', href: '#tax-planning', description: 'Tax optimization strategies' },
        { title: 'Retirement Planning', href: '#retirement-planning', description: 'Secure your future' }
      ]
    },
    {
      title: 'Resources',
      href: '#resources',
      dropdown: [
        { title: 'Market Insights', href: '#market-insights', description: 'Latest market analysis' },
        { title: 'Financial Guides', href: '#guides', description: 'Educational resources' },
        { title: 'Calculators', href: '#calculators', description: 'Financial planning tools' }
      ]
    },
    {
      title: 'Contact',
      href: '#contact'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {enhancedNavItems.map((item) => (
              <div key={item.title} className="relative group">
                <button
                  className="text-gray-800 hover:text-primary font-medium transition-colors flex items-center"
                  onClick={() => handleDropdownToggle(item.title)}
                >
                  {item.title}
                  {item.dropdown && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </button>
                
                {item.dropdown && activeDropdown === item.title && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
                    {item.dropdown.map((dropdownItem) => (
                      <a
                        key={dropdownItem.href}
                        href={dropdownItem.href}
                        className="block px-4 py-2 hover:bg-gray-50"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="font-medium text-gray-900">{dropdownItem.title}</div>
                        {dropdownItem.description && (
                          <div className="text-sm text-gray-500">{dropdownItem.description}</div>
                        )}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          
          <div className="hidden md:block">
            <Button href="#contact">
              Schedule a Consultation
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {enhancedNavItems.map((item) => (
                <div key={item.title}>
                  <button
                    className="text-gray-800 hover:text-primary py-2 font-medium transition-colors w-full text-left flex items-center justify-between"
                    onClick={() => handleDropdownToggle(item.title)}
                  >
                    {item.title}
                    {item.dropdown && (
                      <ChevronDown className={`h-4 w-4 transform transition-transform ${
                        activeDropdown === item.title ? 'rotate-180' : ''
                      }`} />
                    )}
                  </button>
                  
                  {item.dropdown && activeDropdown === item.title && (
                    <div className="pl-4 mt-2 space-y-2">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          className="block py-2 text-gray-600 hover:text-primary"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setActiveDropdown(null);
                          }}
                        >
                          {dropdownItem.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button href="#contact" className="mt-4 w-full">
                Schedule a Consultation
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;