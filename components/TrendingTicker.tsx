import React from 'react';

const trendingTopics = [
  "Exclusive: The Future of AI in SaaS",
  "Review: Is the new 'Dev-Host' worth it?",
  "Deep Dive: Advanced SEO Techniques for 2024",
  "First Look: The Ultimate UI Design Toolkit",
  "BREAKING: New E-Learning Platform Disrupts Market"
];

const TrendingTicker: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-1 space-x-2 sm:space-x-3">
          <span className="flex-shrink-0 bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded">
            Trending
          </span>
          <div className="flex-1 min-w-0 overflow-hidden">
            <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 animate-[marquee_30s_linear_infinite] whitespace-nowrap">
              {trendingTopics.map((topic, index) => (
                <a href="#" key={index} className="px-3 sm:px-4 hover:underline">
                  {topic}
                </a>
              ))}
              {/* Duplicate for seamless loop */}
               {trendingTopics.map((topic, index) => (
                <a href="#" key={`dup-${index}`} className="px-3 sm:px-4 hover:underline">
                  {topic}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default TrendingTicker;