import React from 'react';
import { Article } from '../types';

interface LatestPostsWidgetProps {
  posts: Article[];
  onArticleSelect: (article: Article) => void;
}

const LatestPostsWidget: React.FC<LatestPostsWidgetProps> = ({ posts, onArticleSelect }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-white mb-4">
        Latest Posts
      </h3>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0 last:pb-0">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); onArticleSelect(post); }}
              className="font-semibold text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-accent transition-colors"
            >
              {post.title}
            </a>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{post.publishedDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestPostsWidget;
