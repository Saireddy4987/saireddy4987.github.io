
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. We'll get back to you soon!",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-16">
        {/* Header */}
        <div className="bg-gradient-to-r from-mint to-blue text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto text-white/90">
              Have a question or suggestion? We'd love to hear from you!
            </p>
          </div>
        </div>
        
        {/* Contact Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold font-poppins mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Your name" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="your.email@example.com" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    placeholder="What is this regarding?" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="Your message here..." 
                    rows={6} 
                    required 
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full md:w-auto btn-primary"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold font-poppins mb-6">Get in Touch</h2>
              <p className="text-darkgray/80 mb-8">
                We're here to help! Whether you have a question about the blog, need advice, or want to suggest a topic, 
                feel free to reach out using the form or through any of the contact methods below.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
                  <div className="bg-blue/10 p-3 rounded-full">
                    <Mail className="w-5 h-5 text-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-poppins">Email</h3>
                    <a href="mailto:hello@scholarssummit.com" className="text-blue hover:underline">
                      hello@scholarssummit.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
                  <div className="bg-coral/10 p-3 rounded-full">
                    <Phone className="w-5 h-5 text-coral" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-poppins">Phone</h3>
                    <a href="tel:+1234567890" className="text-coral hover:underline">
                      (123) 456-7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: '600ms' }}>
                  <div className="bg-mint/10 p-3 rounded-full">
                    <MapPin className="w-5 h-5 text-mint" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-poppins">Location</h3>
                    <p>Scholar's Summit Blog<br />123 Learning Lane<br />Knowledge City, KN 12345</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 p-6 bg-gradient-to-br from-lavender/20 to-blue/20 rounded-xl">
                <h3 className="text-lg font-semibold font-poppins mb-3">Follow Us</h3>
                <p className="text-darkgray/80 mb-4">
                  Connect with Scholar's Summit on social media for regular updates, tips, and inspiration.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
                    <svg className="w-5 h-5 text-blue" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12.061c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 4.991 3.657 9.128 8.438 9.879v-6.988h-2.54v-2.891h2.54V9.865c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.774l-.443 2.891h-2.33v6.988C18.343 21.189 22 17.052 22 12.061z"></path>
                    </svg>
                  </a>
                  <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
                    <svg className="w-5 h-5 text-blue" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
                    <svg className="w-5 h-5 text-coral" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                    </svg>
                  </a>
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

export default Contact;
