
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-white to-gray-100">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-teal-600/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 right-1/4 w-80 h-80 bg-teal-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold heading-gradient">
              LSE's Foremost Student Investment Fund
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
              Founded in 2015, MBP Capital offers a forum for students to discuss financial markets and
              learn how to run an actively-managed portfolio across equities, fixed income, commodities & FX.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 rounded-md text-lg"
                asChild
              >
                <a href="#about">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="border-teal-600 text-teal-600 hover:bg-teal-600/5 px-8 py-6 rounded-md text-lg"
                asChild
              >
                <a href="#performance">Our Performance</a>
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-teal-600/10 rounded-2xl rotate-3 transform"></div>
            <div className="absolute inset-0 bg-teal-400/10 rounded-2xl -rotate-2 transform"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-teal-600/5 p-6 rounded-lg text-center">
                  <span className="block text-4xl font-bold text-teal-600">2015</span>
                  <span className="text-gray-600 text-sm">Year Founded</span>
                </div>
                <div className="bg-teal-600/5 p-6 rounded-lg text-center">
                  <span className="block text-4xl font-bold text-teal-600">LSE</span>
                  <span className="text-gray-600 text-sm">University</span>
                </div>
                <div className="bg-teal-600/5 p-6 rounded-lg text-center">
                  <span className="block text-4xl font-bold text-teal-600">50+</span>
                  <span className="text-gray-600 text-sm">Student Analysts</span>
                </div>
                <div className="bg-teal-600/5 p-6 rounded-lg text-center">
                  <span className="block text-4xl font-bold text-teal-600">2</span>
                  <span className="text-gray-600 text-sm">Investment Divisions</span>
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
