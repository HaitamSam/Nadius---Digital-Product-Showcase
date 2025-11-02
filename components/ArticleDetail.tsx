import React, { useState, useEffect } from 'react';
import { Article } from '../types';
import { FacebookIcon, XIcon, ShareIcon, ChevronDownIcon } from './icons';
import AdBanner from './AdBanner';

// Helper function to add tracking parameters to a URL
const addTrackingParams = (url: string) => {
    if (url === '#') return url;
    const params = 'utm_source=Nadius&utm_medium=affiliate';
    if (url.includes('?')) {
        return `${url}&${params}`;
    }
    return `${url}?${params}`;
};

interface AuthorBoxProps {
    author: Article['author'];
}

const AuthorBox: React.FC<AuthorBoxProps> = ({ author }) => {
    return (
        <div className="mt-12 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-6">
            <img className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover flex-shrink-0" src={author.avatarUrl} alt={author.name} />
            <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">About the author</h3>
                <p className="text-xl font-semibold font-heading text-gray-800 dark:text-gray-200 mt-1">{author.name}</p>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{author.bio}</p>
            </div>
        </div>
    );
};

interface ArticleDetailProps {
  article: Article;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article }) => {
  const [tocItems, setTocItems] = useState<{ id: string; text: string; level: number }[]>([]);
  const [isTocOpen, setIsTocOpen] = useState(true);

  useEffect(() => {
    const contentContainer = document.querySelector('.article-content-body');
    if (!contentContainer) return;

    const headings = Array.from(contentContainer.querySelectorAll('h2, h3'));
    
    if (headings.length < 2) {
        setTocItems([]);
        return;
    }

    const newTocItems = headings.map((heading, index) => {
        const id = `toc-heading-${index}`;
        if (!heading.id) {
            heading.id = id;
        }
        return {
            id: heading.id,
            text: heading.textContent || '',
            level: heading.tagName === 'H2' ? 2 : 3,
        };
    });

    setTocItems(newTocItems);

    return () => {
        headings.forEach(h => {
            if (h.id.startsWith('toc-heading-')) {
                h.removeAttribute('id');
            }
        });
    };
  }, [article.id]);

  const handleTocClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
        const headerOffset = 100; // Account for sticky header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
  };
  
  const TableOfContents = () => {
    if (tocItems.length === 0) return null;

    return (
        <div className="my-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border dark:border-gray-700">
            <button
                onClick={() => setIsTocOpen(!isTocOpen)}
                className="flex justify-between items-center w-full text-left font-bold text-lg text-gray-900 dark:text-white"
                aria-expanded={isTocOpen}
                aria-controls="toc-content"
            >
                <span>Table of Contents</span>
                <div className={`transition-transform duration-300 ${isTocOpen ? 'rotate-180' : ''}`}>
                    <ChevronDownIcon />
                </div>
            </button>
            {isTocOpen && (
                <nav id="toc-content" className="mt-4">
                    <ul className="space-y-2 list-none p-0">
                        {tocItems.map(item => (
                            <li key={item.id} className={`${item.level === 3 ? 'ml-4' : ''}`}>
                                <a
                                    href={`#${item.id}`}
                                    onClick={(e) => handleTocClick(e, item.id)}
                                    className="text-primary dark:text-accent hover:underline text-base"
                                >
                                    {item.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </div>
    );
  };


  return (
    <div>
      <div className="text-center">
        <p className="text-base font-semibold text-primary dark:text-accent uppercase tracking-wide">{article.category}</p>
        <h1 className="mt-2 text-3xl font-extrabold font-heading text-gray-900 dark:text-white sm:text-4xl">
          {article.title}
        </h1>
        <div className="mt-6 flex items-center justify-center space-x-4">
            <img className="w-12 h-12 rounded-full object-cover" src={article.author.avatarUrl} alt={article.author.name} />
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">{article.author.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{article.publishedDate} &middot; {article.readingTime} min read</p>
            </div>
          </div>
      </div>

      <figure className="my-8">
        <img className="w-full rounded-lg shadow-lg" src={article.imageUrl} alt={article.title} />
      </figure>

      <TableOfContents />

      <div className="article-content-body prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: article.content }}>
      </div>
      
      <div className="my-8 text-center">
        <a 
            href={addTrackingParams(article.affiliateLink)} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-primary hover:bg-primary-dark text-white font-bold text-base py-3 px-8 sm:text-lg sm:py-4 sm:px-10 rounded-lg transition-colors duration-300 shadow-lg transform hover:scale-105"
        >
            Check Out The Product
        </a>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            This is an affiliate link. We may earn a commission.
        </p>
      </div>

      <div className="my-8 flex justify-between items-center border-t border-b border-gray-200 dark:border-gray-700 py-4">
        <div className="flex items-center space-x-2">
            <span className="font-semibold text-gray-800 dark:text-gray-200">Tags:</span>
            {article.tags.map(tag => (
                <span key={tag} className="text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full">{tag}</span>
            ))}
        </div>
        <div className="flex items-center space-x-4">
            <span className="font-semibold text-gray-800 dark:text-gray-200">Share:</span>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white"><XIcon /></a>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white"><FacebookIcon /></a>
        </div>
      </div>
      
      <AuthorBox author={article.author} />

      <AdBanner />
    </div>
  );
};

export default ArticleDetail;
