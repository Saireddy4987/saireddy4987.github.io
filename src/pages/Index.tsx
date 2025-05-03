
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import HeroCarousel from '@/components/HeroCarousel';
import CategoryBox from '@/components/CategoryBox';
import NewsletterBox from '@/components/NewsletterBox';
import { blogPosts, categories } from '@/data/mockData';

const Index = () => {
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

    // Initialize parallax effect
    const parallaxElements = document.querySelectorAll('.parallax');
    const handleScroll = () => {
      parallaxElements.forEach(element => {
        const bg = element.querySelector('.parallax-bg');
        if (bg) {
          const scrollPosition = window.pageYOffset;
          const parentOffset = element.offsetTop;
          const distance = scrollPosition - parentOffset;
          const speed = 0.5;
          
          if (distance > -window.innerHeight && distance < window.innerHeight) {
            bg.style.transform = `translateY(${distance * speed}px)`;
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      scrollElements.forEach(element => observer.unobserve(element));
    };
  }, []);

  // Featured and latest posts
  const featuredPosts = blogPosts.slice(0, 3);
  const latestPosts = blogPosts.slice(0, 6);

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="container mx-auto px-6 pt-20 pb-16">
          <HeroCarousel slides={featuredPosts} />
        </section>
        
        {/* Categories Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="text-3xl font-bold font-poppins mb-2">Explore Topics</h2>
            <p className="text-darkgray/70 max-w-2xl mx-auto">
              Discover content in your areas of interest, from study techniques to mental wellness
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <CategoryBox
                key={category.name}
                name={category.name}
                icon={category.icon}
                color={category.color}
              />
            ))}
          </div>
        </section>
        
        {/* Latest Posts Section */}
        <section className="bg-lightgray/30 py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12 scroll-reveal">
              <h2 className="text-3xl font-bold font-poppins mb-2">Latest Posts</h2>
              <p className="text-darkgray/70 max-w-2xl mx-auto">
                Stay updated with our most recent articles and insights
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestPosts.map((post, index) => (
                <div key={post.id} className="scroll-reveal" style={{ animationDelay: `${index * 150}ms` }}>
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12 scroll-reveal">
              <Link to="/blog">
                <Button className="btn-primary">View All Posts</Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Call-to-Action Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="scroll-reveal">
            <NewsletterBox />
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
