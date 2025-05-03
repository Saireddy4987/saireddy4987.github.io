
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCard, { BlogPost } from '@/components/BlogCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Share, Bookmark, Facebook, Twitter, Book, Clock } from 'lucide-react';
import { blogPosts } from '@/data/mockData';
import { useToast } from '@/hooks/use-toast';

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const { toast } = useToast();
  
  useEffect(() => {
    // Find the current post
    const currentPost = blogPosts.find(post => post.id === id);
    
    if (currentPost) {
      setPost(currentPost);
      
      // Find related posts (same category)
      const related = blogPosts
        .filter(p => p.id !== id) // Exclude current post
        .filter(p => p.category === currentPost.category)
        .slice(0, 3); // Get up to 3 related posts
      
      setRelatedPosts(related);
    }
    
    // Initialize scroll animations
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
  }, [id]);
  
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "URL Copied!",
      description: "The link to this article has been copied to your clipboard.",
      duration: 3000,
    });
  };
  
  const handleBookmark = () => {
    toast({
      title: "Bookmarked!",
      description: "This article has been added to your bookmarks.",
      duration: 3000,
    });
  };
  
  // Calculate read time
  const readTime = post?.readTime || Math.max(1, Math.ceil((post?.content?.length || 0) / 1000));
  
  if (!post) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen pt-32 flex justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Post not found</h2>
            <Link to="/blog">
              <Button>Back to Blog</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-16">
        {/* Hero Banner */}
        <div 
          className="w-full h-[400px] bg-cover bg-center relative"
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${post.image})` 
          }}
        >
          <div className="container mx-auto px-6 h-full flex items-end">
            <div className="pb-16 max-w-3xl">
              <Badge 
                className={`
                  mb-4
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
              <h1 className="text-3xl md:text-5xl font-bold font-poppins text-white mb-4">{post.title}</h1>
              <div className="flex items-center text-white/80 text-sm">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name} 
                  className="w-10 h-10 rounded-full object-cover mr-2 border-2 border-white/50" 
                />
                <span>By {post.author.name} • {post.date}</span>
                <div className="flex items-center mx-4">
                  <Clock className="w-4 h-4 mr-1 text-white/70" />
                  <span>{readTime} min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Article Content */}
        <article className="container mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-3/4">
              {/* Social Sharing */}
              <div className="flex justify-between items-center mb-8 py-3 border-b border-t border-lightgray">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-darkgray/70">Share this article:</span>
                  <button 
                    className="p-2 hover:bg-lightgray rounded-full transition-colors" 
                    aria-label="Share on Facebook"
                  >
                    <Facebook className="w-4 h-4 text-blue" />
                  </button>
                  <button 
                    className="p-2 hover:bg-lightgray rounded-full transition-colors" 
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="w-4 h-4 text-blue" />
                  </button>
                  <button 
                    onClick={handleShare}
                    className="p-2 hover:bg-lightgray rounded-full transition-colors" 
                    aria-label="Copy link"
                  >
                    <Share className="w-4 h-4" />
                  </button>
                </div>
                <button 
                  onClick={handleBookmark}
                  className="flex items-center space-x-1 text-sm font-medium hover:text-blue transition-colors" 
                >
                  <Bookmark className="w-4 h-4" />
                  <span>Save</span>
                </button>
              </div>
              
              {/* Article Body */}
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content || post.excerpt }} />
              </div>
              
              {/* Author Bio */}
              <div className="mt-12 bg-lightgray/30 rounded-xl p-6 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name} 
                  className="w-24 h-24 rounded-full object-cover border-4 border-white" 
                />
                <div>
                  <h3 className="text-xl font-semibold font-poppins mb-2">About {post.author.name}</h3>
                  <p className="text-darkgray/80 mb-4">
                    Jordan is passionate about helping students achieve their academic goals while maintaining a 
                    healthy balance in life. With a background in educational psychology, Jordan shares evidence-based 
                    strategies that actually work.
                  </p>
                  <div className="flex space-x-2">
                    <a href="#" className="text-blue hover:text-coral">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-blue hover:text-coral">
                      <Facebook className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <aside className="lg:w-1/4">
              <div className="sticky top-24">
                {/* Related Posts */}
                <Card className="mb-8">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-xl">
                      <Book className="w-5 h-5 mr-2 text-blue" />
                      Related Articles
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {relatedPosts.length > 0 ? (
                      <div className="space-y-6">
                        {relatedPosts.map(relatedPost => (
                          <div key={relatedPost.id} className="scroll-reveal">
                            <Link to={`/blog/${relatedPost.id}`} className="group block">
                              <div className="aspect-video overflow-hidden rounded-lg mb-2">
                                <img 
                                  src={relatedPost.image} 
                                  alt={relatedPost.title} 
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                                />
                              </div>
                              <h4 className="font-medium group-hover:text-blue transition-colors duration-300">
                                {relatedPost.title}
                              </h4>
                              <div className="flex items-center mt-2 text-sm text-darkgray/70">
                                <Clock className="w-3 h-3 mr-1" />
                                <span>{Math.max(1, Math.ceil((relatedPost.content?.length || 0) / 1000))} min read</span>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-darkgray/70">No related articles found</p>
                    )}
                  </CardContent>
                </Card>
                
                {/* Categories */}
                <Card className="mb-8">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl">Categories</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Link to="/blog?category=productivity" className="block py-2 px-4 hover:bg-lightgray rounded-lg transition-colors duration-200">
                      Productivity Tips
                    </Link>
                    <Link to="/blog?category=study" className="block py-2 px-4 hover:bg-lightgray rounded-lg transition-colors duration-200">
                      Study Hacks
                    </Link>
                    <Link to="/blog?category=teen-life" className="block py-2 px-4 hover:bg-lightgray rounded-lg transition-colors duration-200">
                      Teen Life
                    </Link>
                    <Link to="/blog?category=exam-prep" className="block py-2 px-4 hover:bg-lightgray rounded-lg transition-colors duration-200">
                      Exam Prep
                    </Link>
                    <Link to="/blog?category=mental-health" className="block py-2 px-4 hover:bg-lightgray rounded-lg transition-colors duration-200">
                      Mental Health
                    </Link>
                  </CardContent>
                </Card>
                
                {/* Subscribe Box */}
                <div className="bg-gradient-to-br from-lavender/20 to-blue/20 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold font-poppins mb-3">Subscribe</h3>
                  <p className="text-sm text-darkgray/80 mb-4">
                    Get the latest articles and updates delivered to your inbox.
                  </p>
                  <form className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Your email" 
                      className="w-full px-4 py-2 rounded-lg border border-lightgray focus:outline-none focus:ring-2 focus:ring-blue"
                      required
                    />
                    <Button className="w-full bg-blue hover:bg-blue/90">
                      Subscribe
                    </Button>
                  </form>
                </div>
              </div>
            </aside>
          </div>
        </article>
      </main>
      
      <Footer />
    </>
  );
};

export default BlogPostPage;
