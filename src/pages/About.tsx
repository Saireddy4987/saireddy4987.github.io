
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
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

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-16">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue to-lavender text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">About Scholar's Summit</h1>
            <p className="text-xl max-w-3xl mx-auto text-white/90">
              Where teens find guidance, inspiration, and community on their academic journey
            </p>
          </div>
        </div>
        
        {/* Introduction */}
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="scroll-reveal mb-16">
              <h2 className="text-3xl font-bold font-poppins mb-6 gradient-text inline-block">Welcome to Scholar's Summit!</h2>
              <p className="text-lg mb-4">
                This is a space for teens to find tips, advice, and inspiration for navigating academics and life. 
                Let's tackle challenges and celebrate successes together!
              </p>
              <p className="text-lg mb-4">
                Scholar's Summit was created with one mission in mind: to provide high-quality, accessible guidance for 
                students navigating the complex world of academics and teenage life. We believe that with the right 
                resources and support, every student can thrive both in and outside the classroom.
              </p>
              <p className="text-lg">
                Whether you're looking for study techniques that actually work, advice on managing the social aspects of school life, 
                or strategies for maintaining your mental health during stressful periods, you'll find practical, 
                research-backed content here.
              </p>
            </div>
            
            {/* About the Author */}
            <div className="scroll-reveal mb-16">
              <h2 className="text-3xl font-bold font-poppins mb-6">About the Author</h2>
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <img 
                  src="https://i.pravatar.cc/300?img=37" 
                  alt="Author" 
                  className="w-48 h-48 rounded-full object-cover border-4 border-lavender shadow-lg"
                />
                <div>
                  <h3 className="text-2xl font-semibold font-poppins mb-2">Jordan Taylor</h3>
                  <p className="text-darkgray/80 mb-4">
                    Hi there! I'm Jordan, a former straight-A student turned educational content creator. After experiencing burnout in high school 
                    due to poor study habits and unrealistic expectations, I became passionate about helping other students find more 
                    effective and sustainable ways to approach their education.
                  </p>
                  <p className="text-darkgray/80">
                    I graduated with a degree in Psychology with a focus on educational psychology, and I've spent 
                    the past five years researching and testing different learning techniques. Scholar's Summit is where I share 
                    everything I've learned along the way.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Why Scholar's Summit */}
            <div className="scroll-reveal mb-16">
              <h2 className="text-3xl font-bold font-poppins mb-6">Why Scholar's Summit?</h2>
              <p className="text-lg mb-4">
                Unlike many educational resources that focus solely on achievement at any cost, Scholar's Summit emphasizes:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-blue/10 p-6 rounded-xl">
                  <div className="text-3xl mb-2 text-blue">🔍</div>
                  <h3 className="text-xl font-semibold font-poppins mb-2">Evidence-Based Approaches</h3>
                  <p>All study techniques and advice shared here are grounded in cognitive science and educational research.</p>
                </div>
                <div className="bg-coral/10 p-6 rounded-xl">
                  <div className="text-3xl mb-2 text-coral">⚖️</div>
                  <h3 className="text-xl font-semibold font-poppins mb-2">Balance and Sustainability</h3>
                  <p>Success shouldn't come at the expense of well-being. We promote approaches that are effective and sustainable.</p>
                </div>
                <div className="bg-mint/10 p-6 rounded-xl">
                  <div className="text-3xl mb-2 text-mint">🌈</div>
                  <h3 className="text-xl font-semibold font-poppins mb-2">Inclusivity</h3>
                  <p>We recognize that every student has different strengths, challenges, and learning styles.</p>
                </div>
                <div className="bg-yellow/10 p-6 rounded-xl">
                  <div className="text-3xl mb-2 text-yellow">💡</div>
                  <h3 className="text-xl font-semibold font-poppins mb-2">Practical Application</h3>
                  <p>Theory is great, but we focus on actionable strategies you can implement right away.</p>
                </div>
              </div>
            </div>
            
            {/* Fun Facts */}
            <div className="scroll-reveal">
              <div className="bg-gradient-to-r from-lavender/20 to-mint/20 p-8 rounded-xl">
                <h2 className="text-3xl font-bold font-poppins mb-6 text-center">What's in My Backpack?</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-4xl mb-2">📱</div>
                    <h3 className="font-medium font-poppins mb-1">Digital tools</h3>
                    <p className="text-sm text-darkgray/80">Notion, Forest App, Anki</p>
                  </div>
                  <div>
                    <div className="text-4xl mb-2">🖊️</div>
                    <h3 className="font-medium font-poppins mb-1">Stationery</h3>
                    <p className="text-sm text-darkgray/80">Colorful pens, sticky notes</p>
                  </div>
                  <div>
                    <div className="text-4xl mb-2">☕</div>
                    <h3 className="font-medium font-poppins mb-1">Fuel</h3>
                    <p className="text-sm text-darkgray/80">Always need my coffee!</p>
                  </div>
                  <div>
                    <div className="text-4xl mb-2">🎧</div>
                    <h3 className="font-medium font-poppins mb-1">Focus aid</h3>
                    <p className="text-sm text-darkgray/80">Noise-cancelling headphones</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default About;
