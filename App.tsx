import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PostSlider from './components/PostSlider';
import ArticleCard from './components/ArticleCard';
import AdBanner from './components/AdBanner';
import ArticleDetail from './components/ArticleDetail';
import CategoryCards from './components/CategoryCards';
import JoinUsSection from './components/JoinUsSection';
import Sidebar from './components/Sidebar';
import LatestPostsWidget from './components/LatestPostsWidget';

import { articles } from './data/mockData';
import { Article } from './types';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  useEffect(() => {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };
  
  const handleArticleSelect = useCallback((article: Article) => {
    setSelectedArticle(article);
    window.scrollTo(0, 0);
  }, []);

  const handleHomeClick = useCallback(() => {
    setSelectedArticle(null);
  }, []);

  const sliderArticles = articles.slice(0, 5);
  const otherArticles = articles.slice(0); // Show all articles in the grid below

  const latestPostsForSidebar = selectedArticle
    ? articles.filter(a => a.id !== selectedArticle.id).slice(0, 5)
    : [];

  const HomePage: React.FC = () => (
    <>
      <PostSlider articles={sliderArticles} onArticleSelect={handleArticleSelect} />
      <CategoryCards articles={articles} onArticleSelect={handleArticleSelect} />
      <div className="py-8">
        <h2 className="text-3xl font-bold text-center font-heading text-gray-900 dark:text-white">Latest Reviews & Guides</h2>
        <div className="mt-8 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">
          {otherArticles.slice(0, 3).map(article => (
            <ArticleCard key={article.id} article={article} onArticleSelect={handleArticleSelect} />
          ))}
        </div>
      </div>
      <AdBanner />
       <div className="py-8">
        <div className="mt-8 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">
          {otherArticles.slice(3).map(article => (
            <ArticleCard key={article.id} article={article} onArticleSelect={handleArticleSelect} />
          ))}
        </div>
      </div>
    </>
  );

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen font-sans">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} onHomeClick={handleHomeClick} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {selectedArticle ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 py-12">
            <div className="lg:col-span-2">
              <ArticleDetail article={selectedArticle} />
            </div>
            <div className="lg:col-span-1">
              <Sidebar>
                <LatestPostsWidget posts={latestPostsForSidebar} onArticleSelect={handleArticleSelect} />
              </Sidebar>
            </div>
          </div>
        ) : (
          <HomePage />
        )}
      </main>
      <JoinUsSection />
      <Footer />
    </div>
  );
}

export default App;