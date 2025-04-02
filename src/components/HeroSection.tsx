
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-white to-gray-100">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-navy/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 right-1/4 w-80 h-80 bg-navy/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold heading-gradient">
              Student-Led Investment Excellence
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
              We are a student-managed investment fund focused on delivering 
              competitive returns while providing hands-on financial experience 
              to the next generation of investment leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-navy hover:bg-navy-light text-white px-8 py-6 rounded-md text-lg"
                asChild
              >
                <a href="#about">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="border-navy text-navy hover:bg-navy/5 px-8 py-6 rounded-md text-lg"
                asChild
              >
                <a href="#performance">Our Performance</a>
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-navy/10 rounded-2xl rotate-3 transform"></div>
            <div className="absolute inset-0 bg-gold/10 rounded-2xl -rotate-2 transform"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-navy/5 p-6 rounded-lg text-center">
                  <span className="block text-4xl font-bold text-navy">15%</span>
                  <span className="text-gray-600 text-sm">Annual Return</span>
                </div>
                <div className="bg-navy/5 p-6 rounded-lg text-center">
                  <span className="block text-4xl font-bold text-navy">$2.5M</span>
                  <span className="text-gray-600 text-sm">AUM</span>
                </div>
                <div className="bg-navy/5 p-6 rounded-lg text-center">
                  <span className="block text-4xl font-bold text-navy">50+</span>
                  <span className="text-gray-600 text-sm">Student Analysts</span>
                </div>
                <div className="bg-navy/5 p-6 rounded-lg text-center">
                  <span className="block text-4xl font-bold text-navy">8</span>
                  <span className="text-gray-600 text-sm">Years Active</span>
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
