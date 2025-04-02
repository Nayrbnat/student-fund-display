
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
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

  const timelineEvents = [
    {
      year: "2015",
      title: "MBP Capital Founded",
      description: "MBP Capital was founded by a group of passionate LSE students with a shared interest in financial markets."
    },
    {
      year: "2017",
      title: "Macro Division Established",
      description: "The Macro division was formalized with a focus on global economic analysis and multi-asset trading."
    },
    {
      year: "2019",
      title: "First Competition Win",
      description: "MBP Capital achieved its first major competition win at the Varsity Stock Pitch Competition."
    },
    {
      year: "2021",
      title: "Fundamental Equities Division Added",
      description: "To accommodate a new batch of investors focused on bottom-up analysis, we added the Fundamental Equities division."
    },
    {
      year: "2022",
      title: "Global Recognition",
      description: "Multiple MBP teams reached finals in global investment competitions, establishing our reputation internationally."
    },
    {
      year: "2023",
      title: "Risk Management Team Launched",
      description: "Launch of a dedicated Risk Management team to systematically analyze risk and optimize alpha generation."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#1a3a5f]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
            alt="About Us Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">About MBP Capital</h1>
            <p className="text-xl text-gray-200 mb-8 animate-fade-in">
              LSE's foremost real money student investment fund, providing a forum for students to discuss financial markets and learn
              how to run an actively-managed portfolio.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold mb-6 heading-gradient">Our Mission</h2>
              <p className="text-gray-700 mb-6">
                Founded in 2015, MBP Capital offers a unique opportunity for budding investors to hone their technical knowledge in 
                fundamental and macro trading. We represent a family of investment professionals bonded together by a shared passion 
                for the financial markets.
              </p>
              <p className="text-gray-700 mb-6">
                Whilst MBP Capital prides itself on its investment excellence, our predominant focus has and will always be on learning. 
                We aim to cultivate the next generation of investors with a focus on curiosity – we believe that the competitive 
                advantage of young investment professionals is the fresh perspective we bring.
              </p>
              <div className="bg-gray-100 p-6 border-l-4 border-[#1a3a5f]">
                <p className="text-lg italic text-gray-700">
                  "Aiming to be the foremost student investment fund in London and the UK, providing investment education to the future generation."
                </p>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" 
                  alt="Our Team" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a5f]/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">A Community of Investors</h3>
                  <p>Working together to develop the next generation of investment professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* History Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">Our History</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              MBP Capital was founded by college students with a passion for financial markets. 
              Our story started with 3 students discussing the markets and sharing investment theses on macro trends.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#1a3a5f]/20"></div>
            
            {/* Timeline events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row items-center md:justify-between animate-on-scroll ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-[#1a3a5f] border-4 border-white z-10"></div>
                  
                  {/* Date */}
                  <div className={`md:w-5/12 mb-4 md:mb-0 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="inline-block bg-[#1a3a5f] text-white px-4 py-2 rounded-lg text-lg font-semibold mb-2 md:mb-0">
                      {event.year}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`bg-white rounded-lg shadow-md p-6 md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <h3 className="text-xl font-bold text-[#1a3a5f] mb-2">{event.title}</h3>
                    <p className="text-gray-700">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Investment Divisions */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">Our Investment Divisions</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We operate two main investment divisions, each with its own unique approach to market analysis and investment decision-making.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Fundamental Equities */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg animate-slide-in-left">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80" 
                  alt="Fundamental Equities" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#1a3a5f]/70 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-white">Fundamental Equities</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-700 mb-6">
                  The Fundamental Equities team adopts a bottom-up approach to investing that places a strong emphasis on business quality 
                  and industry dynamics. Across the pods there are varying emphasis on organic and inorganic growth drivers but at its core 
                  we love businesses that exhibit stellar capital management, delivering returns greater than their cost of capital.
                </p>
                <p className="text-gray-700">
                  Every investment is backed by a financial model that aims not to predict the future but to sensitize and illustrate the 
                  asymmetric risk-reward opportunities for every trade. We adopt a first principle thinking in breaking down companies and 
                  are especially excited about those unloved by Mr Market.
                </p>
              </div>
            </div>
            
            {/* Macro */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg animate-slide-in-right">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Macro" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#1a3a5f]/70 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-white">Macro Research</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-700 mb-6">
                  Our Macro division focuses on global economic analysis and multi-asset trading. Our team analyzes macroeconomic trends, 
                  monetary policy developments, and geopolitical events to identify trading opportunities across various asset classes 
                  including equities, fixed income, foreign exchange, and commodities.
                </p>
                <p className="text-gray-700">
                  The Macro team employs a combination of top-down analysis and quantitative models to evaluate market dislocations and 
                  develop investment theses. We pay particular attention to central bank policies, inflation dynamics, and global growth 
                  patterns to position our portfolio for medium to long-term economic shifts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-[#1a3a5f]">
        <div className="container-custom">
          <div className="text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join Our Investment Team</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              We're always looking for talented students with a passion for financial markets to join our team. 
              Learn about our recruitment process and apply to become part of MBP Capital.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-[#1a3a5f]">
                <Link to="/process">Our Process</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link to="/team">Meet Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
