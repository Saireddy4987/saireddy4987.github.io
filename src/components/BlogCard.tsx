
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  date: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
  };
  readTime?: number;
}

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, featured = false }) => {
  // Calculate read time if not provided
  const readTime = post.readTime || Math.max(1, Math.ceil((post.content?.length || post.excerpt.length) / 1000));
  
  return (
    <div className={`card group overflow-hidden ${featured ? 'md:flex' : ''} h-full animate-fade-in`}>
      <div className={`overflow-hidden ${featured ? 'md:w-1/2' : ''}`}>
        <Link to={`/blog/${post.id}`}>
          <img
            src={post.image}
            alt={post.title}
            className="blog-card-image"
          />
        </Link>
      </div>
      <div className={`p-6 ${featured ? 'md:w-1/2' : ''}`}>
        <div className="flex justify-between items-center mb-3">
          <Link to={`/blog/category/${post.category.toLowerCase()}`}>
            <Badge 
              className={`
                ${post.category === 'Productivity' ? 'bg-coral hover:bg-coral/80' : 
                  post.category === 'Study' ? 'bg-mint hover:bg-mint/80' : 
                  post.category === 'Teen Life' ? 'bg-blue hover:bg-blue/80' :
                  post.category === 'Exam Prep' ? 'bg-yellow hover:bg-yellow/80' :
                  'bg-lavender hover:bg-lavender/80'}
                text-white hover:text-white
              `}
            >
              {post.category}
            </Badge>
          </Link>
          <span className="text-sm text-darkgray/70">{post.date}</span>
        </div>
        <Link to={`/blog/${post.id}`}>
          <h3 className={`${featured ? 'text-2xl' : 'text-xl'} font-poppins font-semibold mb-2 hover:text-blue transition-colors duration-300`}>
            {post.title}
          </h3>
        </Link>
        <p className="text-darkgray/80 mb-4">{post.excerpt}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm font-medium">{post.author.name}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-blue" />
            <span className="text-sm text-darkgray/70">{readTime} min read</span>
            <Link 
              to={`/blog/${post.id}`}
              className="text-blue hover:text-coral font-medium transition-colors duration-300 text-sm ml-2"
            >
              Read More →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
