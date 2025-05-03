
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

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

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 py-4 px-6 md:px-10 ${
        scrolled ? 'bg-background/90 backdrop-blur shadow-md py-3' : 'bg-transparent'
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
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="hover:text-blue transition-colors duration-300"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

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
