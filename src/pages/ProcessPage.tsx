
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";

const ProcessPage = () => {
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

  // Investment process steps
  const investmentProcessSteps = [
    {
      title: "Idea Generation",
      description: "Our investment ideas come from a variety of sources, including team discussions, market research, financial news, industry conferences, and academic papers. We encourage creative thinking and look for unique insights."
    },
    {
      title: "Initial Analysis",
      description: "Each potential investment undergoes a preliminary assessment to evaluate its alignment with our investment philosophy, risk parameters, and potential return profile."
    },
    {
      title: "Deep Research",
      description: "For ideas that pass initial screening, we conduct thorough research including fundamental analysis, competitive positioning, management quality, and financial modeling. In macro strategies, we analyze economic data and policy implications."
    },
    {
      title: "Investment Memo",
      description: "A comprehensive investment memorandum is prepared, detailing the investment thesis, valuation, risk factors, and expected returns. This document forms the basis for our investment committee discussions."
    },
    {
      title: "Committee Review",
      description: "The investment committee critically evaluates each proposal, challenging assumptions and ensuring robustness of the analysis before making a final decision."
    },
    {
      title: "Position Sizing & Execution",
      description: "Approved investments are sized according to conviction level and portfolio risk management guidelines. We employ disciplined execution strategies to optimize entry points."
    },
    {
      title: "Monitoring & Review",
      description: "All positions are continuously monitored, with regular reviews to ensure the investment thesis remains intact. We're not afraid to admit when we're wrong and exit positions when necessary."
    }
  ];

  // Recruitment process steps
  const recruitmentProcessSteps = [
    {
      title: "Application",
      description: "Submit your application through our online form, including your CV, academic background, and a brief statement about your interest in financial markets."
    },
    {
      title: "Screening",
      description: "Applications are reviewed by our team, with a focus on academic achievement, demonstrated interest in investments, and potential to contribute to MBP Capital."
    },
    {
      title: "Bootcamp Selection",
      description: "Selected candidates are invited to join our intensive bootcamp program, designed to teach essential investment concepts and prepare you for analyst responsibilities."
    },
    {
      title: "Bootcamp Training",
      description: "The 8-week bootcamp covers investment fundamentals, financial modeling, valuation techniques, economic analysis, and presentation skills."
    },
    {
      title: "Stock Pitch",
      description: "Bootcamp participants develop and deliver a complete stock pitch with investment memo and financial model, demonstrating their analytical skills and investment thinking."
    },
    {
      title: "Final Selection",
      description: "Based on bootcamp performance and stock pitch quality, successful candidates are invited to join MBP Capital as analysts."
    }
  ];

  // Bootcamp topics
  const bootcampTopics = [
    "Financial Statement Analysis",
    "Valuation Methodologies",
    "Macroeconomic Analysis",
    "Industry & Competitive Analysis",
    "Financial Modeling",
    "Investment Thesis Development",
    "Risk Management",
    "Presentation Skills"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#1a3a5f]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
            alt="Process Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">Our Process</h1>
            <p className="text-xl text-gray-200 mb-8 animate-fade-in">
              Learn about our rigorous investment methodology and recruitment process for developing the next generation of investment professionals.
            </p>
          </div>
        </div>
      </section>
      
      {/* Investment Process Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">Investment Process</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our structured investment process ensures thorough analysis and disciplined decision-making across all asset classes.
            </p>
          </div>
          
          <div className="relative">
            {/* Vertical line for desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#1a3a5f]/20"></div>
            
            <div className="space-y-12">
              {investmentProcessSteps.map((step, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row md:items-center animate-on-scroll ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Circle */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[#1a3a5f] text-white items-center justify-center z-10">
                    {index + 1}
                  </div>
                  
                  {/* Empty space for desktop */}
                  <div className="hidden md:block md:w-1/2"></div>
                  
                  {/* Content */}
                  <div className={`bg-white rounded-lg shadow-md p-6 md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className="flex md:hidden items-center mb-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1a3a5f] text-white flex items-center justify-center mr-4">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold text-[#1a3a5f]">{step.title}</h3>
                    </div>
                    <h3 className="hidden md:block text-xl font-bold text-[#1a3a5f] mb-3">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Recruitment Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">Recruitment Process</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We recruit first years through a selective and rigorous bootcamp, culminating in a stock pitch before being minted as an analyst.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                  alt="Recruitment" 
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a5f]/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Developing Future Leaders</h3>
                  <p>Our recruitment process identifies and nurtures top talent from across LSE</p>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <h3 className="text-2xl font-bold mb-6 text-[#1a3a5f]">Becoming an MBP Analyst</h3>
              <div className="space-y-6">
                {recruitmentProcessSteps.map((step, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1a3a5f] text-white flex items-center justify-center mt-1">
                      {index + 1}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-lg text-[#1a3a5f]">{step.title}</h4>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button asChild className="mt-8 bg-[#1a3a5f] hover:bg-[#2a4a6f]">
                <Link to="/contact">Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Bootcamp Topics */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold mb-6 heading-gradient">Bootcamp Curriculum</h2>
              <p className="text-gray-700 mb-8">
                Our comprehensive bootcamp covers essential investment concepts across both macro and fundamental analysis approaches. 
                Analysts develop practical skills that will serve them throughout their investment careers.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {bootcampTopics.map((topic, index) => (
                  <div key={index} className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm">
                    <Check className="text-[#1a3a5f] h-5 w-5 mr-3" />
                    <span className="text-gray-700">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <Card className="border-none shadow-xl bg-[#1a3a5f] text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32">
                  <div className="absolute transform rotate-45 bg-white/10 text-white text-xs font-bold py-1 right-[-35px] top-[32px] w-[170px] text-center">
                    Now Recruiting
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Join Our Next Bootcamp</h3>
                  <p className="text-gray-200 mb-6">
                    Applications are now open for our upcoming investment bootcamp. This is your opportunity to join LSE's foremost student investment fund.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-white/20 flex items-center justify-center text-white text-sm mr-3">
                        <Check className="h-4 w-4" />
                      </div>
                      <p className="text-gray-200">Learn from experienced student investors</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-white/20 flex items-center justify-center text-white text-sm mr-3">
                        <Check className="h-4 w-4" />
                      </div>
                      <p className="text-gray-200">Develop practical financial analysis skills</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-white/20 flex items-center justify-center text-white text-sm mr-3">
                        <Check className="h-4 w-4" />
                      </div>
                      <p className="text-gray-200">Build your network with like-minded peers</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-white/20 flex items-center justify-center text-white text-sm mr-3">
                        <Check className="h-4 w-4" />
                      </div>
                      <p className="text-gray-200">Enhance your CV with real investment experience</p>
                    </div>
                  </div>
                  <Button asChild className="w-full bg-white hover:bg-gray-100 text-[#1a3a5f]">
                    <Link to="/contact">
                      Apply Today <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Alumni Success */}
      <section className="py-20 bg-[#1a3a5f] text-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Alumni Success</h2>
            <p className="text-gray-200 max-w-3xl mx-auto">
              Joining the MBP family confers you unparalleled opportunities to network with investment professionals from both the buy and sell side.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 animate-on-scroll">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center aspect-video">
              <span className="font-semibold text-white">Goldman Sachs</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center aspect-video">
              <span className="font-semibold text-white">Morgan Stanley</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center aspect-video">
              <span className="font-semibold text-white">JPMorgan</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center aspect-video">
              <span className="font-semibold text-white">BlackRock</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center aspect-video">
              <span className="font-semibold text-white">Citadel</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center aspect-video">
              <span className="font-semibold text-white">Point72</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center aspect-video">
              <span className="font-semibold text-white">Bridgewater</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center aspect-video">
              <span className="font-semibold text-white">UBS</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center aspect-video">
              <span className="font-semibold text-white">Credit Suisse</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center aspect-video">
              <span className="font-semibold text-white">Barclays</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center aspect-video">
              <span className="font-semibold text-white">HSBC</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center aspect-video">
              <span className="font-semibold text-white">Deutsche Bank</span>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProcessPage;
