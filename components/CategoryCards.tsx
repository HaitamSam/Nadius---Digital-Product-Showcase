import React from 'react';
import { Article } from '../types';
import { 
    FashionIcon, FoodIcon, HealthIcon, InteriorIcon, LifestyleIcon, 
    TravelIcon, TechnologyIcon, BusinessIcon, DIYIcon, SportsIcon, ArrowRightIcon
} from './icons';

interface CategoryCardsProps {
  articles: Article[];
  onArticleSelect: (article: Article) => void;
}

const categories = [
  { name: 'Fashion', icon: <FashionIcon />, key: 'Fashion' },
  { name: 'Food', icon: <FoodIcon />, key: 'Food' }, // No dedicated article, will use a fallback
  { name: 'Health', icon: <HealthIcon />, key: 'Health' }, // No dedicated article, will use a fallback
  { name: 'Interior', icon: <InteriorIcon />, key: 'Design Tools' },
  { name: 'Lifestyle', icon: <LifestyleIcon />, key: 'Opinion' },
  { name: 'Travel', icon: <TravelIcon />, key: 'Travel' },
  { name: 'Technology', icon: <TechnologyIcon />, key: 'AI & Machine Learning' },
  { name: 'Business', icon: <BusinessIcon />, key: 'SaaS' },
  { name: 'DIY', icon: <DIYIcon />, key: 'Web Dev' },
  { name: 'Sports', icon: <SportsIcon />, key: 'Sports' }, // No dedicated article, will use a fallback
];

const CategoryCards: React.FC<CategoryCardsProps> = ({ articles, onArticleSelect }) => {
  const getArticleForCategory = (categoryKey: string) => {
    // Find the first article that matches the category or a related keyword
    const foundArticle = articles.find(article => 
      article.category.includes(categoryKey) || 
      article.tags.includes(categoryKey)
    );
    // Fallback to the first article if no match is found
    return foundArticle || articles[0];
  };

  return (
    <div className="py-8">
        <div className="flex space-x-4 overflow-x-auto pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            {categories.map((category) => {
                const articleToLink = getArticleForCategory(category.key);
                return (
                    <a
                        key={category.name}
                        href="#"
                        onClick={(e) => { e.preventDefault(); onArticleSelect(articleToLink); }}
                        className="group flex-shrink-0 w-36 h-48 md:w-40 md:h-56 flex flex-col justify-between p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-white to-blue-100 dark:from-gray-800 dark:to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                            {React.cloneElement(category.icon, {className: "w-10 h-10 md:w-12 md:h-12 text-primary dark:text-accent"})}
                            <h3 className="mt-4 text-base md:text-lg font-bold font-heading text-gray-900 dark:text-white">{category.name}</h3>
                        </div>

                        <div className="relative z-10 transition-all duration-300 transform translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 delay-100">
                             <div className="flex items-center space-x-2 text-sm font-semibold text-primary dark:text-accent group-hover:text-primary-dark dark:group-hover:text-white transition-colors">
                                <span>Explore</span>
                                <ArrowRightIcon />
                            </div>
                        </div>
                    </a>
                );
            })}
        </div>
        <style>{`
            /* Simple utility to hide scrollbar but keep functionality */
            .overflow-x-auto::-webkit-scrollbar {
                display: none;
            }
            .overflow-x-auto {
                -ms-overflow-style: none;  /* IE and Edge */
                scrollbar-width: none;  /* Firefox */
            }
        `}</style>
    </div>
  );
};

export default CategoryCards;