
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BlogPost } from './BlogCard';

interface HeroCarouselProps {
  slides: BlogPost[];
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToNextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const goToPrevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-xl shadow-xl">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="parallax h-full">
            <div 
              className="parallax-bg" 
              style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6)), url(${slide.image})` }}
            />
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white p-6 max-w-3xl animate-fade-in">
              <span className="inline-block bg-coral px-3 py-1 rounded-full text-sm font-medium mb-4">
                {slide.category}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">{slide.title}</h2>
              <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto drop-shadow-md">
                {slide.excerpt}
              </p>
              <Link to={`/blog/${slide.id}`}>
                <Button className="bg-blue hover:bg-blue/90 text-white rounded-full px-8 py-6">
                  Read Article
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
      
      <button 
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors duration-300"
        aria-label="Previous Slide"
      >
        <ChevronLeft />
      </button>
      
      <button 
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors duration-300"
        aria-label="Next Slide"
      >
        <ChevronRight />
      </button>
      
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
