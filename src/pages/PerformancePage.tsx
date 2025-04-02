
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Trophy, Award, Star } from "lucide-react";

// Sample performance data
const fundPerformanceData = [
  { year: '2017', fundReturn: 5.2, benchmarkReturn: 4.8 },
  { year: '2018', fundReturn: -2.1, benchmarkReturn: -4.3 },
  { year: '2019', fundReturn: 12.7, benchmarkReturn: 10.5 },
  { year: '2020', fundReturn: 18.3, benchmarkReturn: 16.1 },
  { year: '2021', fundReturn: 22.6, benchmarkReturn: 19.8 },
  { year: '2022', fundReturn: -8.4, benchmarkReturn: -12.7 },
  { year: '2023', fundReturn: 14.2, benchmarkReturn: 11.6 },
  { year: '2024', fundReturn: 9.7, benchmarkReturn: 7.5 },
];

// Sample asset allocation
const assetAllocationData = [
  { name: 'Equities', value: 65 },
  { name: 'Fixed Income', value: 20 },
  { name: 'Commodities', value: 8 },
  { name: 'FX', value: 5 },
  { name: 'Cash', value: 2 },
];

// Sample sector allocation
const sectorAllocationData = [
  { name: 'Technology', value: 28 },
  { name: 'Financials', value: 18 },
  { name: 'Healthcare', value: 15 },
  { name: 'Consumer Disc.', value: 12 },
  { name: 'Industrials', value: 10 },
  { name: 'Communication', value: 8 },
  { name: 'Energy', value: 5 },
  { name: 'Materials', value: 4 },
];

// Competition achievements
const achievements = [
  {
    year: "2025",
    competition: "UBS Stock Pitch Competition",
    achievement: "2nd Place",
    icon: <Trophy className="h-10 w-10 text-yellow-500" />,
  },
  {
    year: "2025",
    competition: "Dartmouth DIPP",
    achievement: "Semi-finalist",
    icon: <Award className="h-10 w-10 text-blue-500" />,
  },
  {
    year: "2024",
    competition: "McGill Global Stock Pitch",
    achievement: "Semi-finalist & Best Interschool Team Globally",
    description: "All three LSE teams were from MBP",
    icon: <Star className="h-10 w-10 text-purple-500" />,
  },
  {
    year: "2023",
    competition: "VPC",
    achievement: "1st Place",
    description: "Amanda and Sarah - Short Hayward Holdings",
    icon: <Trophy className="h-10 w-10 text-yellow-500" />,
  },
  {
    year: "2022",
    competition: "Varsity Stock Pitch Competition",
    achievement: "2nd Place",
    description: "Ryan D'Angelo and team - Long B&M",
    icon: <Award className="h-10 w-10 text-blue-500" />,
  },
  {
    year: "2022",
    competition: "Varsity Stock Pitch Competition",
    achievement: "Finalist",
    description: "Multiple MBP teams",
    icon: <Star className="h-10 w-10 text-purple-500" />,
  },
];

const AchievementCard = ({ achievement }) => {
  return (
    <Card className="animate-on-scroll h-full">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            {achievement.icon}
          </div>
          <div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-lg text-[#1a3a5f]">{achievement.competition}</h4>
                {achievement.description && <p className="text-sm text-gray-600 mt-1">{achievement.description}</p>}
                <p className="text-teal-600 font-semibold mt-2">{achievement.achievement}</p>
              </div>
            </div>
          </div>
          <span className="ml-auto bg-teal-600/10 text-teal-600 px-3 py-1 rounded-full text-sm font-medium">
            {achievement.year}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

const PerformancePage = () => {
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
      
      {/* Hero section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#1a3a5f]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1642790551116-a09e4b804138?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80" 
            alt="Performance Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">Our Performance</h1>
            <p className="text-xl text-gray-200 mb-8 animate-fade-in">
              Track our investment performance and achievements across global markets and competitions.
            </p>
          </div>
        </div>
      </section>
      
      {/* Fund Performance Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">Fund Performance</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our investment portfolio has consistently outperformed benchmark indices through disciplined analysis and strategic allocation.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 animate-on-scroll">
            <h3 className="text-2xl font-bold text-[#1a3a5f] mb-6">Annual Returns vs. Benchmark</h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={fundPerformanceData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis tickFormatter={(value) => `${value}%`} />
                  <Tooltip formatter={(value) => [`${value.toFixed(1)}%`, 'Return']} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="fundReturn"
                    name="MBP Capital Fund"
                    stroke="#1a3a5f"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                    activeDot={{ r: 8 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="benchmarkReturn"
                    name="Benchmark"
                    stroke="#82ca9d"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Asset Allocation */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 animate-slide-in-left">
              <h3 className="text-2xl font-bold text-[#1a3a5f] mb-6">Asset Allocation</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={assetAllocationData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    layout="vertical"
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" tickFormatter={(value) => `${value}%`} />
                    <YAxis dataKey="name" type="category" width={100} />
                    <Tooltip formatter={(value) => [`${value}%`, 'Allocation']} />
                    <Bar dataKey="value" fill="#1a3a5f" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Sector Allocation */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 animate-slide-in-right">
              <h3 className="text-2xl font-bold text-[#1a3a5f] mb-6">Sector Allocation</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={sectorAllocationData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    layout="vertical"
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" tickFormatter={(value) => `${value}%`} />
                    <YAxis dataKey="name" type="category" width={100} />
                    <Tooltip formatter={(value) => [`${value}%`, 'Allocation']} />
                    <Bar dataKey="value" fill="#3a5a7f" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Achievements Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">Competition Achievements</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our teams have excelled in various competitions, showcasing the depth of knowledge and analysis capabilities of our members.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <AchievementCard key={index} achievement={achievement} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Key Statistics */}
      <section className="py-20 bg-[#1a3a5f] text-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Performance Statistics</h2>
            <p className="text-gray-200 max-w-3xl mx-auto">
              Our disciplined investment approach has delivered consistent results over time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center animate-on-scroll">
              <h3 className="text-4xl font-bold text-white mb-2">14.2%</h3>
              <p className="text-gray-200 text-lg">Average Annual Return</p>
              <p className="text-gray-300 text-sm mt-2">Since inception</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center animate-on-scroll">
              <h3 className="text-4xl font-bold text-white mb-2">2.8%</h3>
              <p className="text-gray-200 text-lg">Alpha Generated</p>
              <p className="text-gray-300 text-sm mt-2">Vs. benchmark</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center animate-on-scroll">
              <h3 className="text-4xl font-bold text-white mb-2">0.82</h3>
              <p className="text-gray-200 text-lg">Sharpe Ratio</p>
              <p className="text-gray-300 text-sm mt-2">Risk-adjusted return</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center animate-on-scroll">
              <h3 className="text-4xl font-bold text-white mb-2">11</h3>
              <p className="text-gray-200 text-lg">Competition Awards</p>
              <p className="text-gray-300 text-sm mt-2">Global recognition</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PerformancePage;
