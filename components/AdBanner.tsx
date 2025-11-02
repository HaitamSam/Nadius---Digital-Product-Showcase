import React from 'react';

interface AdBannerProps {
    className?: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ className }) => {
  return (
    <a 
      href="#" 
      className={`block my-8 rounded-lg overflow-hidden shadow-lg group ${className}`}
      aria-label="Advertisement"
    >
      <svg 
        viewBox="0 0 728 90" 
        className="w-full h-auto bg-gray-800"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="ad-bg-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#1e293b' }} />
            <stop offset="100%" style={{ stopColor: '#0f172a' }} />
          </linearGradient>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#ad-bg-gradient)" />
        
        <text x="718" y="12" fontFamily="Roboto, sans-serif" fontSize="8" fill="#9ca3af" textAnchor="end" style={{ textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Advertisement
        </text>
        
        <g transform="translate(30, 28)">
          <text fontFamily="Poppins, sans-serif" fontSize="18" fontWeight="bold" fill="white">
            <tspan x="0" dy="0">Elevate Your Digital Presence</tspan>
          </text>
          
          <text fontFamily="Roboto, sans-serif" fontSize="12" fill="#e5e7eb" transform="translate(0, 22)">
            <tspan x="0" dy="0">The ultimate toolkit for modern creators and businesses.</tspan>
          </text>
        </g>
        
        <g 
          transform="translate(578, 25)" 
          className="transition-transform duration-300 group-hover:scale-105"
          style={{ transformOrigin: 'center' }}
        >
          <rect width="120" height="40" rx="8" fill="#2563eb" />
          <text x="60" y="25" fontFamily="Poppins, sans-serif" fontSize="14" fontWeight="600" fill="white" textAnchor="middle">
            Learn More
          </text>
        </g>
      </svg>
    </a>
  );
};

export default AdBanner;