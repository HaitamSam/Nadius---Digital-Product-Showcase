import React, { useState } from 'react';
import { SearchIcon, XIcon, FacebookIcon } from './icons';
import ThemeToggle from './ThemeToggle';
import TrendingTicker from './TrendingTicker';
import Logo from './Logo';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  onHomeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode, onHomeClick }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo onClick={onHomeClick} className="h-8 sm:h-10 w-auto" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex md:space-x-8">
            <a href="#" onClick={(e) => { e.preventDefault(); onHomeClick(); }} className="font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors">Home</a>
            <a href="#" className="font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors">Reviews</a>
            <a href="#" className="font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors">Tutorials</a>
            <a href="#" className="font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors">About</a>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
             <div className="hidden sm:flex items-center space-x-4">
                <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white"><XIcon /></a>
                <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white"><FacebookIcon /></a>
             </div>
             <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white">
                <SearchIcon />
             </button>
            <ThemeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          </div>
        </div>
      </div>
       {isSearchOpen && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
            <input 
                type="text"
                placeholder="Search for products, articles..."
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-primary focus:border-primary"
            />
        </div>
      )}
      <TrendingTicker />
    </header>
  );
};

export default Header;