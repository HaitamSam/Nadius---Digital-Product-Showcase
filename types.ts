
export interface Author {
  name: string;
  avatarUrl: string;
  bio: string;
}

export interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  author: Author;
  publishedDate: string;
  readingTime: number;
  content: string; 
  tags: string[];
  affiliateLink: string;
}
