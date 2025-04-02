
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  useEffect(() => {
    // Enhanced animation for elements with animation classes
    const animateElements = () => {
      const animationClasses = [
        '.animate-on-scroll',
        '.animate-fade-in',
        '.animate-slide-in-right',
        '.animate-slide-in-left',
        '.animate-scale-in'
      ];
      
      animationClasses.forEach(className => {
        const elements = document.querySelectorAll(className);
        
        elements.forEach(element => {
          const elementTop = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          
          // Activate animation when element is 20% into the viewport
          if (elementTop < windowHeight * 0.8) {
            element.classList.add('active');
          } else {
            // Optional: remove active class when scrolling back up
            // element.classList.remove('active');
          }
        });
      });
    };
    
    // Run on initial load
    window.addEventListener('load', animateElements);
    
    // Run on scroll with throttling for better performance
    let lastScrollTime = 0;
    const handleScroll = () => {
      const now = Date.now();
      if (now - lastScrollTime > 50) { // Throttle to 50ms
        lastScrollTime = now;
        animateElements();
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('load', animateElements);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient">LSE's Foremost Investment Fund</h2>
              <p className="text-gray-700 mb-8">
                Founded in 2015, MBP Capital is the LSE's foremost real money student investment fund, offering a forum for students 
                to discuss financial markets and learn how to run an actively-managed portfolio.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#1a3a5f] flex items-center justify-center text-white text-sm mr-3">1</div>
                  <p className="text-gray-700">Rigorous fundamental and macro analysis</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#1a3a5f] flex items-center justify-center text-white text-sm mr-3">2</div>
                  <p className="text-gray-700">Diverse investment approach across multiple asset classes</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#1a3a5f] flex items-center justify-center text-white text-sm mr-3">3</div>
                  <p className="text-gray-700">Proven track record in global investment competitions</p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild className="bg-[#1a3a5f] hover:bg-[#2a4a6f]">
                  <Link to="/about">Learn About Us</Link>
                </Button>
                <Button asChild variant="outline" className="border-[#1a3a5f] text-[#1a3a5f]">
                  <Link to="/team">Meet Our Team</Link>
                </Button>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a5f]/80 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Investment Analysis" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute bottom-8 left-8 z-20 text-white">
                  <h3 className="text-2xl font-bold mb-2">Expert Analysis</h3>
                  <p className="text-gray-200">Our team delivers comprehensive investment analysis across all major asset classes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="container-custom">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">Explore MBP Capital</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Discover our investment approach, performance track record, and opportunities to join our team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden animate-on-scroll">
              <div className="h-48 bg-[#1a3a5f] relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Performance" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#1a3a5f]">Our Performance</h3>
                <p className="text-gray-600 mb-6">Track our investment performance and competition achievements across global markets.</p>
                <Button asChild className="w-full bg-[#1a3a5f] hover:bg-[#2a4a6f]">
                  <Link to="/performance">View Performance</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden animate-on-scroll">
              <div className="h-48 bg-[#1a3a5f] relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Our Team" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#1a3a5f]">Our Team</h3>
                <p className="text-gray-600 mb-6">Meet our leadership team, pod leaders, and analysts across our investment divisions.</p>
                <Button asChild className="w-full bg-[#1a3a5f] hover:bg-[#2a4a6f]">
                  <Link to="/team">Meet the Team</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden animate-on-scroll">
              <div className="h-48 bg-[#1a3a5f] relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1521790797524-b2497295b8a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Join Us" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#1a3a5f]">Join MBP Capital</h3>
                <p className="text-gray-600 mb-6">Learn about our recruitment process and how to become part of our investment team.</p>
                <Button asChild className="w-full bg-[#1a3a5f] hover:bg-[#2a4a6f]">
                  <Link to="/process">Our Process</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
