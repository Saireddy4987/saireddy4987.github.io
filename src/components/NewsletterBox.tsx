
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const NewsletterBox: React.FC = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter.",
      duration: 5000,
    });
  };

  return (
    <Card className="bg-gradient-to-r from-blue/10 to-lavender/10 border-none shadow-lg rounded-xl overflow-hidden">
      <CardContent className="p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl md:text-3xl font-bold font-poppins mb-2 gradient-text">Never Miss a Post!</h3>
          <p className="text-darkgray/80 max-w-md mx-auto">
            Subscribe to our newsletter and get the latest updates, tips, and insights straight to your inbox.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input 
            type="email" 
            placeholder="Enter your email" 
            className="rounded-full border-lightgray focus:border-blue"
            required 
          />
          <Button type="submit" className="btn-primary whitespace-nowrap rounded-full">
            Subscribe Now!
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default NewsletterBox;
