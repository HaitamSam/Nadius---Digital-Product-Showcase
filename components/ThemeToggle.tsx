
import React from 'react';
import { SunIcon, MoonIcon } from './icons';

interface ThemeToggleProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-gray-800"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ThemeToggle;
