import React from 'react';
import { Article } from '../types';

// Helper function to add tracking parameters to a URL
const addTrackingParams = (url: string) => {
    if (url === '#') return url;
    const params = 'utm_source=Nadius&utm_medium=affiliate';
    if (url.includes('?')) {
        return `${url}&${params}`;
    }
    return `${url}?${params}`;
};

interface ArticleCardProps {
  article: Article;
  onArticleSelect: (article: Article) => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, onArticleSelect }) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800 h-full transition-transform duration-300 hover:-translate-y-1">
      <div className="flex-shrink-0">
        <a href="#" onClick={(e) => { e.preventDefault(); onArticleSelect(article); }}>
          <img className="h-40 sm:h-48 w-full object-cover" src={article.imageUrl} alt={article.title} />
        </a>
      </div>
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-primary dark:text-accent">
            <a href="#" className="hover:underline">{article.category}</a>
          </p>
          <a href="#" onClick={(e) => { e.preventDefault(); onArticleSelect(article); }} className="block mt-2">
            <p className="text-xl font-semibold font-heading text-gray-900 dark:text-white">{article.title}</p>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-400">{article.excerpt}</p>
          </a>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-10 w-10 rounded-full" src={article.author.avatarUrl} alt={article.author.name} />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900 dark:text-white">{article.author.name}</p>
              <div className="flex space-x-1 text-sm text-gray-500 dark:text-gray-400">
                <time dateTime={article.publishedDate}>{article.publishedDate}</time>
                <span aria-hidden="true">&middot;</span>
                <span>{article.readingTime} min read</span>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 ml-4">
            <a
              href={addTrackingParams(article.affiliateLink)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-primary dark:text-accent hover:underline whitespace-nowrap"
            >
              Get Deal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;