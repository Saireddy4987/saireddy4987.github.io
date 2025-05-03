
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCard, { BlogPost } from '@/components/BlogCard';
import NewsletterBox from '@/components/NewsletterBox';
import { blogPosts, categories } from '@/data/mockData';
import { Search } from 'lucide-react';

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [posts, setPosts] = useState<BlogPost[]>(blogPosts);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // Function to initialize scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      scrollElements.forEach(element => observer.unobserve(element));
    };
  }, []);
  
  // Handle filter changes from URL params
  useEffect(() => {
    const category = searchParams.get('category');
    const query = searchParams.get('search');
    
    if (category) setActiveCategory(category);
    else setActiveCategory(null);
    
    if (query) setSearchQuery(query);
    
    filterPosts(category, query);
  }, [searchParams]);
  
  // Filter posts based on category and search query
  const filterPosts = (category: string | null, query: string | null) => {
    let filteredPosts = [...blogPosts];
    
    if (category) {
      filteredPosts = filteredPosts.filter(post => 
        post.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    if (query) {
      const lowerCaseQuery = query.toLowerCase();
      filteredPosts = filteredPosts.filter(post => 
        post.title.toLowerCase().includes(lowerCaseQuery) ||
        post.excerpt.toLowerCase().includes(lowerCaseQuery) ||
        post.content?.toLowerCase().includes(lowerCaseQuery)
      );
    }
    
    setPosts(filteredPosts);
  };
  
  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    
    if (searchQuery) params.set('search', searchQuery);
    if (activeCategory) params.set('category', activeCategory);
    
    setSearchParams(params);
  };
  
  // Handle category click
  const handleCategoryClick = (category: string) => {
    const params = new URLSearchParams();
    
    if (activeCategory === category.toLowerCase()) {
      // If clicking on already active category, remove the filter
      setActiveCategory(null);
    } else {
      setActiveCategory(category.toLowerCase());
      params.set('category', category.toLowerCase());
    }
    
    if (searchQuery) params.set('search', searchQuery);
    
    setSearchParams(params);
  };
  
  // Handle clear filters
  const clearFilters = () => {
    setSearchParams({});
    setSearchQuery('');
    setActiveCategory(null);
    setPosts(blogPosts);
  };

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-16">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow/80 to-coral/80 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">Blog</h1>
            <p className="text-xl max-w-3xl mx-auto text-white/90">
              Explore articles on academics, study techniques, teen life, and more
            </p>
          </div>
        </div>
        
        {/* Search and Filters */}
        <section className="container mx-auto px-6 py-8">
          <div className="bg-card rounded-xl shadow-md p-6">
            <form onSubmit={handleSearch} className="flex gap-2 mb-6">
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-grow"
              />
              <Button type="submit" className="bg-blue hover:bg-blue/90">
                <Search className="w-4 h-4 mr-2" /> Search
              </Button>
            </form>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium font-poppins mb-3">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge
                    key={category.name}
                    className={`cursor-pointer px-3 py-1.5 text-sm ${
                      activeCategory === category.name.toLowerCase()
                        ? category.color
                        : 'bg-lightgray text-darkgray hover:bg-lightgray/80'
                    }`}
                    onClick={() => handleCategoryClick(category.name)}
                  >
                    {category.icon} {category.name}
                  </Badge>
                ))}
              </div>
            </div>
            
            {(activeCategory || searchQuery) && (
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-lightgray">
                <p className="text-sm text-darkgray/70">
                  {posts.length} {posts.length === 1 ? 'result' : 'results'} found
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-blue hover:text-coral hover:bg-transparent"
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </section>
        
        {/* Blog Posts */}
        <section className="container mx-auto px-6 py-12">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <div key={post.id} className="scroll-reveal" style={{ animationDelay: `${index * 100}ms` }}>
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">😕</div>
              <h3 className="text-2xl font-poppins font-semibold mb-2">No posts found</h3>
              <p className="text-darkgray/70 mb-6">
                We couldn't find any posts matching your criteria. Try adjusting your filters.
              </p>
              <Button onClick={clearFilters} className="btn-primary">
                Clear All Filters
              </Button>
            </div>
          )}
        </section>
        
        {/* Newsletter */}
        <section className="container mx-auto px-6 py-16">
          <div className="scroll-reveal">
            <NewsletterBox />
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Blog;
