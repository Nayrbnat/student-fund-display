
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PerformanceSection from "@/components/PerformanceSection";
import TeamSection from "@/components/TeamSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

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
      <AboutSection />
      <PerformanceSection />
      <TeamSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
