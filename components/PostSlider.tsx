import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Article } from '../types';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';

interface PostSliderProps {
  articles: Article[];
  onArticleSelect: (article: Article) => void;
}

const PostSlider: React.FC<PostSliderProps> = ({ articles, onArticleSelect }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // FIX: Changed NodeJS.Timeout to ReturnType<typeof setTimeout> for browser compatibility.
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === articles.length - 1 ? 0 : prevIndex + 1
        ),
      5000 // Change slide every 5 seconds
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex, articles.length, resetTimeout]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? articles.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === articles.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, articles.length]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  if (!articles || articles.length === 0) {
    return null;
  }

  return (
    <div className="relative h-[60vh] max-h-[500px] w-full mx-auto my-8 rounded-lg overflow-hidden shadow-lg group">
      <div
        className="w-full h-full flex transition-transform ease-in-out duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {articles.map((article) => (
          <div
            key={article.id}
            className="w-full h-full flex-shrink-0 relative bg-gray-800 text-white cursor-pointer"
            onClick={() => onArticleSelect(article)}
          >
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-105"
              style={{ backgroundImage: `url(${article.imageUrl})` }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
            </div>
            
            <div className="relative h-full flex flex-col justify-end p-8 md:p-12">
              <div className="max-w-3xl">
                <span className="text-sm font-semibold uppercase tracking-wider bg-primary px-3 py-1 rounded-full">{article.category}</span>
                <h2 className="mt-4 text-3xl md:text-4xl font-extrabold font-heading tracking-tight">
                  <a href="#" onClick={(e) => { e.preventDefault(); onArticleSelect(article); }} className="hover:underline">
                    {article.title}
                  </a>
                </h2>
                <p className="mt-4 text-base text-gray-200 hidden md:block">
                  {article.excerpt}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition-colors">
        <button onClick={prevSlide} aria-label="Previous slide">
            <ChevronLeftIcon />
        </button>
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition-colors">
        <button onClick={nextSlide} aria-label="Next slide">
            <ChevronRightIcon />
        </button>
      </div>
      
      {/* Dots Navigation */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex justify-center space-x-2">
        {articles.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === slideIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
            aria-label={`Go to slide ${slideIndex + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default PostSlider;
