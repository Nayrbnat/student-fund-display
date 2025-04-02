
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const departments = [
  {
    name: "Macro Research",
    description: "Global economic analysis and multi-asset trading"
  },
  {
    name: "Fundamental Equities",
    description: "Bottom-up stock analysis and valuation"
  },
  {
    name: "Risk Management",
    description: "Portfolio risk analysis and optimization"
  },
  {
    name: "Investment Committee",
    description: "Final decision making on all investments"
  }
];

const AchievementCard = ({ year, competition, achievement, team = null }) => {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-semibold text-lg">{competition}</h4>
            {team && <p className="text-sm text-gray-600 mt-1">by {team}</p>}
            <p className="text-teal-600 font-semibold mt-2">{achievement}</p>
          </div>
          <span className="bg-teal-600/10 text-teal-600 px-3 py-1 rounded-full text-sm font-medium">
            {year}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

const TeamSection = () => {
  return (
    <section id="team" className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">Our Achievements</h2>
          <p className="text-gray-700 text-lg">
            Our teams have excelled in various competitions, showcasing the depth of knowledge and analysis capabilities of our members.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AchievementCard 
            year="2025"
            competition="UBS Stock Pitch Competition"
            achievement="2nd Place"
          />
          <AchievementCard 
            year="2025"
            competition="Dartmouth DIPP"
            achievement="Semi-finalist"
          />
          <AchievementCard 
            year="2024"
            competition="McGill Global Stock Pitch"
            achievement="Semi-finalist & Best Interschool Team Globally"
            team="All three LSE teams were from MBP"
          />
          <AchievementCard 
            year="2023"
            competition="VPC"
            achievement="1st Place"
            team="Amanda and Sarah - Short Hayward Holdings"
          />
          <AchievementCard 
            year="2022"
            competition="Varsity Stock Pitch Competition"
            achievement="2nd Place"
            team="Ryan D'Angelo and team - Long B&M"
          />
          <AchievementCard 
            year="2022"
            competition="Varsity Stock Pitch Competition"
            achievement="Finalist"
            team="Multiple MBP teams"
          />
        </div>

        <div className="mt-20 bg-teal-600/5 rounded-xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-teal-600 mb-4">Join Our Team</h3>
              <p className="text-gray-700 mb-6">
                We recruit first years through a selective and rigorous bootcamp, culminating in a stock pitch 
                before being minted as an analyst. Our bootcamp covers essential investment concepts across 
                both macro and fundamental analysis approaches.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-600 flex items-center justify-center text-white text-sm mr-3">1</div>
                  <p className="text-gray-700">Complete our online application form</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-600 flex items-center justify-center text-white text-sm mr-3">2</div>
                  <p className="text-gray-700">Participate in our intensive bootcamp program</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-600 flex items-center justify-center text-white text-sm mr-3">3</div>
                  <p className="text-gray-700">Present a complete stock pitch with investment memo and model</p>
                </div>
              </div>
              
              <div className="mt-8">
                <Button asChild className="bg-teal-600 hover:bg-teal-700">
                  <Link to="/team">View Our Team</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 lg:p-8">
              <h4 className="text-xl font-semibold text-teal-600 mb-4">Our Departments</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {departments.map((dept, index) => (
                  <div key={index} className="bg-teal-600/5 p-4 rounded-lg">
                    <h5 className="font-semibold text-teal-600">{dept.name}</h5>
                    <p className="text-sm text-gray-600 mt-1">{dept.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
