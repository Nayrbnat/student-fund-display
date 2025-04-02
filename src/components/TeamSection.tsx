
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

const TeamMember = ({ name, role, image, linkedin }) => {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
      <div className="overflow-hidden rounded-t-lg h-64 relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
          <a 
            href={linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white mb-6 p-2 bg-navy/60 rounded-full hover:bg-navy transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-gray-600">{role}</p>
      </CardContent>
    </Card>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Alexandra Chen",
      role: "Fund President",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1000",
      linkedin: "#"
    },
    {
      name: "Marcus Williams",
      role: "Chief Investment Officer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000",
      linkedin: "#"
    },
    {
      name: "Sophia Rodriguez",
      role: "Portfolio Manager",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1000",
      linkedin: "#"
    },
    {
      name: "James Kim",
      role: "Risk Officer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1000",
      linkedin: "#"
    }
  ];

  return (
    <section id="team" className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">Meet Our Team</h2>
          <p className="text-gray-700 text-lg">
            Our talented student leaders manage all aspects of the fund, from investment research to portfolio management.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember 
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              linkedin={member.linkedin}
            />
          ))}
        </div>

        <div className="mt-20 bg-navy/5 rounded-xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-navy mb-4">Join Our Team</h3>
              <p className="text-gray-700 mb-6">
                We're always looking for talented and passionate students to join our investment team. 
                As a member, you'll gain hands-on experience in financial analysis, investment research,
                and portfolio management.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-navy flex items-center justify-center text-white text-sm mr-3">1</div>
                  <p className="text-gray-700">Complete our online application form</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-navy flex items-center justify-center text-white text-sm mr-3">2</div>
                  <p className="text-gray-700">Submit your resume and academic transcript</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-navy flex items-center justify-center text-white text-sm mr-3">3</div>
                  <p className="text-gray-700">Participate in our interview process</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 lg:p-8">
              <h4 className="text-xl font-semibold text-navy mb-4">Departments</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-navy/5 p-4 rounded-lg">
                  <h5 className="font-semibold text-navy">Equity Research</h5>
                  <p className="text-sm text-gray-600 mt-1">Fundamental analysis of public equities</p>
                </div>
                <div className="bg-navy/5 p-4 rounded-lg">
                  <h5 className="font-semibold text-navy">Fixed Income</h5>
                  <p className="text-sm text-gray-600 mt-1">Research on bonds and credit instruments</p>
                </div>
                <div className="bg-navy/5 p-4 rounded-lg">
                  <h5 className="font-semibold text-navy">Quantitative Analysis</h5>
                  <p className="text-sm text-gray-600 mt-1">Data-driven investment strategies</p>
                </div>
                <div className="bg-navy/5 p-4 rounded-lg">
                  <h5 className="font-semibold text-navy">ESG Investing</h5>
                  <p className="text-sm text-gray-600 mt-1">Sustainability and impact analysis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
