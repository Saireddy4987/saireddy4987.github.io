
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-lightgray/30">
        <div className="text-center px-6 animate-fade-in">
          <div className="w-64 h-64 mx-auto mb-8">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-blue">
              <path 
                d="M12 4L3 15h6v5h6v-5h6L12 4z" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M12 10L12 12" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
              <path 
                d="M12 16L12 16.01" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
            </svg>
          </div>
          <h1 className="text-6xl font-bold font-poppins mb-4 gradient-text inline-block">404</h1>
          <p className="text-2xl text-darkgray mb-8">Oops! We couldn't find the page you're looking for.</p>
          <Link to="/">
            <Button className="btn-primary">Return to Home</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
