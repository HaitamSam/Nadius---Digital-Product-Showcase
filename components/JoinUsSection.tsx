import React from 'react';
import { FacebookIcon, XIcon, BehanceIcon, InstagramIcon } from './icons';

const socialLinks = [
  { name: 'Facebook', count: '38.5K', icon: <FacebookIcon />, href: '#' },
  { name: 'X Network', count: '32.1K', icon: <XIcon />, href: '#' },
  { name: 'Behance', count: '56.2K', icon: <BehanceIcon />, href: '#' },
  { name: 'Instagram', count: '18.9K', icon: <InstagramIcon />, href: '#' },
];

const JoinUsSection: React.FC = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center font-heading text-gray-900 dark:text-white mb-8">
            JOIN US
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {socialLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="group flex flex-col items-center p-4 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                <div className="w-10 h-10 text-gray-600 dark:text-gray-400 group-hover:text-primary dark:group-hover:text-accent transition-colors">
                    {React.cloneElement(link.icon, { className: "w-full h-full" })}
                </div>
                <p className="mt-4 font-semibold text-gray-800 dark:text-white">{link.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{link.count}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUsSection;
