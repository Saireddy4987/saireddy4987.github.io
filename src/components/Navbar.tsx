
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 py-4 px-6 md:px-10 ${
        scrolled ? 'bg-white/90 backdrop-blur shadow-md py-3' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue via-lavender to-coral rounded-lg flex items-center justify-center">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                className="w-6 h-6 text-white" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M18 10L12 3L6 10" />
                <path d="M15 10V18H9V10" />
                <path d="M12 3V18" />
              </svg>
            </div>
            <span className="font-poppins font-bold text-lg md:text-xl">Scholar's Summit</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'text-blue' : ''}`}>Home</Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'text-blue' : ''}`}>About</Link>
          <Link to="/blog" className={`nav-link ${location.pathname === '/blog' ? 'text-blue' : ''}`}>Blog</Link>
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'text-blue' : ''}`}>Contact</Link>
        </div>

        <div className="flex items-center space-x-4">
          <div className={`relative transition-all duration-300 ${searchOpen ? 'w-64' : 'w-10'}`}>
            {searchOpen && (
              <Input 
                placeholder="Search..." 
                className="pr-10 rounded-full"
                autoFocus
                onBlur={() => setSearchOpen(false)}
              />
            )}
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className={`${searchOpen ? 'absolute right-2 top-1/2 -translate-y-1/2' : ''} 
              hover:text-blue transition-colors duration-300`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          <div className="md:hidden">
            <button className="p-2" aria-label="Menu">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
