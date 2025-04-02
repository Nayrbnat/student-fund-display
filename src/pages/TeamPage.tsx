
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

// Team member component
const TeamMember = ({ name, role, image, linkedIn = "#" }) => {
  return (
    <div className="animate-on-scroll">
      <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
        <div className="h-56 overflow-hidden">
          <img
            src={image || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"}
            alt={name}
            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-[#1a3a5f]">{name}</h3>
          <p className="text-gray-600 mb-4">{role}</p>
          <div className="flex items-center space-x-3">
            <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="text-[#1a3a5f] hover:text-[#2a4a6f] transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:info@mbpcapital.org`} className="text-[#1a3a5f] hover:text-[#2a4a6f] transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Team section component
const TeamSection = ({ title, members }) => {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-[#1a3a5f] mb-8 border-l-4 border-[#1a3a5f] pl-4">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {members.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

// Placeholder data
const coPresidents = [
  { name: "Jane Smith", role: "Co-President", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80" },
  { name: "John Davis", role: "Co-President", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" },
];

const fundamentalPodLeaders = [
  { name: "Michael Chen", role: "Pod Leader - Tech", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" },
  { name: "Sarah Johnson", role: "Pod Leader - Consumer", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80" },
  { name: "David Kim", role: "Pod Leader - Healthcare", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" },
  { name: "Emma Rodriguez", role: "Pod Leader - Financials", image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" },
];

const fundamentalAnalysts = [
  { name: "Alex Thompson", role: "Analyst - Tech", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" },
  { name: "Lisa Wang", role: "Analyst - Consumer", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80" },
  { name: "James Wilson", role: "Analyst - Healthcare", image: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
  { name: "Emily Chen", role: "Analyst - Consumer", image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1095&q=80" },
  { name: "Robert Park", role: "Analyst - Financials", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" },
  { name: "Sophie Lewis", role: "Analyst - Tech", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" },
  { name: "Daniel Martinez", role: "Analyst - Healthcare", image: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" },
  { name: "Olivia Taylor", role: "Analyst - Financials", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80" },
];

const macroCoPresidents = [
  { name: "Thomas Brown", role: "Macro Co-President", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
  { name: "Laura Davis", role: "Macro Co-President", image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" },
];

const macroAnalysts = [
  { name: "Ryan Johnson", role: "Macro Analyst - FX", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" },
  { name: "Michelle Zhang", role: "Macro Analyst - Fixed Income", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80" },
  { name: "Kevin White", role: "Macro Analyst - Commodities", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" },
  { name: "Catherine Lee", role: "Macro Analyst - Rates", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80" },
  { name: "Jonathan Clark", role: "Macro Analyst - Equities", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" },
  { name: "Natalie Ross", role: "Macro Analyst - FX", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" },
];

const TeamPage = () => {
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero section for the team page */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#1a3a5f]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
            alt="Team Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">Our Team</h1>
            <p className="text-xl text-gray-200 mb-8 animate-fade-in">
              Meet the dedicated professionals who drive our investment strategies and deliver exceptional results.
            </p>
          </div>
        </div>
      </section>
      
      {/* Team content section */}
      <section className="py-20">
        <div className="container-custom">
          <Tabs defaultValue="fundamental" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-gray-100">
                <TabsTrigger value="fundamental" className="text-lg px-8 py-3">Fundamental Equity Team</TabsTrigger>
                <TabsTrigger value="macro" className="text-lg px-8 py-3">Macro Team</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="fundamental" className="mt-6">
              <div className="max-w-4xl mx-auto mb-12 animate-fade-in">
                <h2 className="text-3xl font-bold text-[#1a3a5f] mb-6">Fundamental Equity Team</h2>
                <p className="text-gray-700">
                  Our Fundamental Equity team adopts a bottom-up approach to investing that places a strong emphasis on business quality and industry dynamics. 
                  We focus on identifying companies with stellar capital management, delivering returns greater than their cost of capital.
                </p>
              </div>
              
              <TeamSection title="Co-Presidents" members={coPresidents} />
              <TeamSection title="Pod Leaders" members={fundamentalPodLeaders} />
              <TeamSection title="Analysts" members={fundamentalAnalysts} />
            </TabsContent>
            
            <TabsContent value="macro" className="mt-6">
              <div className="max-w-4xl mx-auto mb-12 animate-fade-in">
                <h2 className="text-3xl font-bold text-[#1a3a5f] mb-6">Macro Team</h2>
                <p className="text-gray-700">
                  Our Macro team focuses on global economic analysis and multi-asset trading strategies. We analyze economic trends, 
                  central bank policies, and geopolitical developments to identify investment opportunities across asset classes.
                </p>
              </div>
              
              <TeamSection title="Co-Presidents" members={macroCoPresidents} />
              <TeamSection title="Analysts" members={macroAnalysts} />
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TeamPage;
