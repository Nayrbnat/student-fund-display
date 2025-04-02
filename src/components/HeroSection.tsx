
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* LSE Central Building background image */}
      <div className="absolute inset-0 bg-cover bg-center bg-fixed" 
        style={{ 
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1538978265235-251950ec5b72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80')"
        }}>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              <span className="block">MBP Capital</span>
              <span className="text-3xl md:text-4xl block mt-2 text-gray-300">LSE's Foremost Student Investment Fund</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
              Founded in 2015, we offer a forum for students to discuss financial markets and
              learn portfolio management across equities, fixed income, commodities & FX.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-white text-[#1a3a5f] hover:bg-gray-200 px-8 py-6 rounded-none text-lg"
                asChild
              >
                <a href="#about">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/20 px-8 py-6 rounded-none text-lg"
                asChild
              >
                <a href="#performance">Our Performance</a>
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block animate-slide-in-right">
            <div className="bg-white/5 backdrop-blur-sm p-10 border border-white/10 rounded-sm">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 p-8 rounded-sm text-center">
                  <span className="block text-4xl font-bold text-white">2015</span>
                  <span className="text-gray-300 text-sm">Year Founded</span>
                </div>
                <div className="bg-white/10 p-8 rounded-sm text-center">
                  <span className="block text-4xl font-bold text-white">LSE</span>
                  <span className="text-gray-300 text-sm">University</span>
                </div>
                <div className="bg-white/10 p-8 rounded-sm text-center">
                  <span className="block text-4xl font-bold text-white">50+</span>
                  <span className="text-gray-300 text-sm">Student Analysts</span>
                </div>
                <div className="bg-white/10 p-8 rounded-sm text-center">
                  <span className="block text-4xl font-bold text-white">2</span>
                  <span className="text-gray-300 text-sm">Investment Divisions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
