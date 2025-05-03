
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkgray text-softwhite pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
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
              <span className="font-poppins font-bold text-xl">Scholar's Summit</span>
            </Link>
            <p className="mt-4 text-softwhite/80">
              Scaling the Heights of Academics and Teen Life Together!
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="hover:text-coral transition-colors duration-300 hover:scale-110 inline-block transform" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-coral transition-colors duration-300 hover:scale-110 inline-block transform" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-coral transition-colors duration-300 hover:scale-110 inline-block transform" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-coral transition-colors duration-300 hover:scale-110 inline-block transform" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-coral transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-coral transition-colors duration-300">About</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-coral transition-colors duration-300">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-coral transition-colors duration-300">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog/category/productivity" className="hover:text-coral transition-colors duration-300">Productivity Tips</Link>
              </li>
              <li>
                <Link to="/blog/category/study" className="hover:text-coral transition-colors duration-300">Study Hacks</Link>
              </li>
              <li>
                <Link to="/blog/category/teen-life" className="hover:text-coral transition-colors duration-300">Teen Life</Link>
              </li>
              <li>
                <Link to="/blog/category/exam-prep" className="hover:text-coral transition-colors duration-300">Exam Prep</Link>
              </li>
              <li>
                <Link to="/blog/category/mental-health" className="hover:text-coral transition-colors duration-300">Mental Health</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Subscribe</h3>
            <p className="text-softwhite/80 mb-4">Stay updated with our latest content!</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg bg-white/10 border-white/20 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent w-full"
              />
              <button className="bg-coral px-4 py-2 rounded-r-lg hover:bg-coral/90 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-softwhite/70">
          <p>© 2025 Scholar's Summit. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
