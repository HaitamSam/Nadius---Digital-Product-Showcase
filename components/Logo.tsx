import React from 'react';

interface LogoProps {
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    className?: string;
    variant?: 'default' | 'inverse';
}

const Logo: React.FC<LogoProps> = ({ onClick, className, variant = 'default' }) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (onClick) {
            e.preventDefault();
            onClick(e);
        }
    };

    const isInverse = variant === 'inverse';
    const textColor = isInverse ? 'text-white' : 'text-primary dark:text-white';
    const taglineColor = isInverse ? 'text-gray-400' : 'text-gray-600 dark:text-gray-400';
    // The stroke color should be the background color it's placed on.
    const waveStrokeColor = isInverse ? 'stroke-slate-900' : 'stroke-white dark:stroke-gray-900';


    return (
        <a href="#" onClick={handleClick} className={className} aria-label="Nadius Home Page">
            <svg viewBox="0 0 190 42" className="h-full w-auto">
                <g className={`fill-current ${textColor}`}>
                    {/* The 'N' shape, built with 3 paths to create a slab-serif style */}
                    <path d="M4.3 3.1H0v35.8h4.3V3.1z" />
                    <path d="M35.2 3.1h-4.3v35.8h4.3V3.1z" />
                    <path d="M12.8 3.1H8.2v35.8h4.6V18.3L26.9 40h4.5V4.2h-4.6v20.6L12.8 3.1z" />
                    
                    {/* The wave that "cuts" through the 'N'. It uses the background color for its stroke. */}
                    <path d="M2,24 C8,18, 16,18, 22,24 C28,30, 36,30, 42,24" strokeWidth="4.5" strokeLinecap="round" fill="none" className={waveStrokeColor} />
                </g>
                <text x="52" y="28" fontFamily="Poppins, sans-serif" fontSize="26" fontWeight="700" className={`fill-current ${textColor}`}>
                    Nadius
                </text>
                <text x="53" y="40" fontFamily="Roboto, sans-serif" fontSize="8" fontWeight="500" letterSpacing="0.05em" className={`fill-current ${taglineColor}`}>
                    NEWS & MAGAZINE THEME
                </text>
            </svg>
        </a>
    );
}

export default Logo;