import React from 'react';

const iconProps = {
  className: "w-6 h-6",
};

export const SearchIcon = () => (
  <svg {...iconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

export const SunIcon = () => (
  <svg {...iconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

export const MoonIcon = () => (
  <svg {...iconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

export const XIcon = () => (
    <svg {...iconProps} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zm-1.61 19.99h2.546L6.354 2.165H3.8L17.29 21.143z"></path>
    </svg>
);

export const FacebookIcon = () => (
  <svg {...iconProps} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.675 0h-21.35C.582 0 0 .582 0 1.325v21.351C0 23.418.582 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.742 0 1.325-.582 1.325-1.325V1.325C24 .582 23.418 0 22.675 0z" />
  </svg>
);

export const BehanceIcon = () => (
    <svg {...iconProps} viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.21 6.54h-7.76v1.45h7.76v-1.45zM17.81 9.42h-3.36v5.15s.18 1.93 1.68 1.93c1.5 0 1.68-1.53 1.68-1.53v-5.55zm-16.49-.24h5.66c0-1.28-1.28-2.61-2.83-2.61s-2.83 1.33-2.83 2.61zm2.83 8.35c-2.43 0-4.14-1.8-4.14-4.22s1.71-4.22 4.14-4.22 4.14 1.8 4.14 4.22-1.71 4.22-4.14 4.22zm11.77-5.32c-.31-.08-1-.24-1-.24s-.85.45-.85 1.39v.11s.03 2.01 1.68 2.01c1.65 0 2.33-1.45 2.33-1.45s.94 2.89-3.23 2.89c-4.17 0-5.01-4.25-5.01-4.25s-1.09 5.86-6.19 5.86H1.32V1.32h9.45s3.29-.14 3.29 3.03c0 3.17-2.22 3.11-2.22 3.11h3.35v1.73z"></path>
    </svg>
);

export const InstagramIcon = () => (
    <svg {...iconProps} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.74 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.74 24 12 24s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.687.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.26 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"></path>
    </svg>
);

export const ShareIcon = () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8m-4-6l-4-4m0 0L8 8m4-4v12" />
    </svg>
);

export const ChevronDownIcon = () => (
  <svg {...iconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

export const ChevronLeftIcon = () => (
    <svg {...iconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
);

export const ChevronRightIcon = () => (
    <svg {...iconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
);


const categoryIconProps = {
  className: "w-12 h-12 text-primary dark:text-accent",
  strokeWidth: 1.5,
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
};

export const FashionIcon = () => (
  <svg {...categoryIconProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m-4-4h8m6-4a2 2 0 00-2-2h-2.586a1 1 0 01-.707-.293l-1.414-1.414a1 1 0 00-.707-.293H9.414a1 1 0 00-.707.293L7.293 5.707a1 1 0 01-.707.293H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V8z" />
  </svg>
);
export const FoodIcon = () => (
  <svg {...categoryIconProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 15.586V19a2 2 0 01-2 2H5a2 2 0 01-2-2v-3.414c0-.53.211-1.039.586-1.414l5-5a2 2 0 012.828 0l5 5c.375.375.586.884.586 1.414z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 5h.01" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5h.01" />
  </svg>
);
export const HealthIcon = () => (
  <svg {...categoryIconProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);
export const InteriorIcon = () => (
  <svg {...categoryIconProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);
export const LifestyleIcon = () => (
  <svg {...categoryIconProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10s5 2 8 -3a8 8 0 01-2.343 11.657zM12 12c-3 0-5 2-5 2s2 5 5 5 5-2 5-2-2-5-5-5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
export const TravelIcon = () => (
  <svg {...categoryIconProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-3.333 0-5 2-5 4s1.667 4 5 4 5-2 5-4-1.667-4-5-4zm0 0V6m0 12v-2m-7-5H3m18 0h-2M5.636 5.636L4.222 4.222m15.556 15.556l-1.414-1.414M5.636 18.364l-1.414 1.414M19.778 4.222l-1.414 1.414" />
  </svg>
);
export const TechnologyIcon = () => (
  <svg {...categoryIconProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
export const BusinessIcon = () => (
  <svg {...categoryIconProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
export const DIYIcon = () => (
  <svg {...categoryIconProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);
export const SportsIcon = () => (
  <svg {...categoryIconProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);
export const ArrowRightIcon = () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
);