import React from 'react';
import { XIcon, FacebookIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div className="space-y-6">
            <p className="text-gray-400 text-base">
              Your trusted source for unbiased reviews and guides on digital products and services. We help you make smarter decisions.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <FacebookIcon />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">X Network</span>
                <XIcon />
              </a>
            </div>
          </div>

          {/* Column 2: Categories */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Categories</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-400 hover:text-white">AI Tools</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Web Hosting</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Design</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">E-Learning</a></li>
               <li><a href="#" className="text-base text-gray-400 hover:text-white">Marketing</a></li>
            </ul>
          </div>

          {/* Column 3: About */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">About</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Our Mission</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Contact Us</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Affiliate Disclosure</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Subscribe</h3>
            <p className="mt-4 text-base text-gray-400">The latest deals, articles, and resources, sent to your inbox weekly.</p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="footer-email-address" className="sr-only">Email address</label>
              <input type="email" name="email-address" id="footer-email-address" autoComplete="email" required className="appearance-none min-w-0 w-full bg-slate-800 border border-slate-700 rounded-md shadow-sm py-2 px-4 text-base text-white placeholder-gray-500 focus:outline-none focus:ring-accent focus:border-accent" placeholder="Enter your email" />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button type="submit" className="w-full bg-primary hover:bg-primary-dark border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-primary">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-500 text-center">&copy; 2023 Nadius. All rights reserved. Affiliate disclosure: We may earn a commission on purchases made through our links.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;