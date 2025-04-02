
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const performanceData = [
  { year: '2017', alpha: 4.2, benchmark: 3.1 },
  { year: '2018', alpha: -2.1, benchmark: -4.3 },
  { year: '2019', alpha: 7.8, benchmark: 6.2 },
  { year: '2020', alpha: 8.9, benchmark: 7.3 },
  { year: '2021', alpha: 18.1, benchmark: 15.2 },
  { year: '2022', alpha: 3.2, benchmark: -1.8 },
  { year: '2023', alpha: 12.3, benchmark: 9.7 },
];

const PerformanceSection = () => {
  return (
    <section id="performance" className="formal-section section">
      {/* Professional background */}
      <div className="formal-backdrop" style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
      }}></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Performance</h2>
          <p className="text-gray-300 text-lg">
            Our track record demonstrates our commitment to generating alpha through disciplined
            investment strategies and rigorous analysis.
          </p>
        </div>

        <div className="mb-16 bg-white/10 backdrop-blur-sm rounded-sm shadow-lg p-6 h-96 animate-on-scroll">
          <h3 className="text-xl font-semibold mb-4 text-white">Annual Returns vs Benchmark</h3>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart
              data={performanceData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="year" stroke="#fff" />
              <YAxis tickFormatter={(value) => `${value}%`} stroke="#fff" />
              <Tooltip 
                formatter={(value) => [`${value}%`, '']}
                contentStyle={{ backgroundColor: 'rgba(26, 58, 95, 0.9)', borderRadius: '0', border: 'none', color: 'white' }}
                labelStyle={{ color: 'white' }}
              />
              <Bar name="Alpha Fund" dataKey="alpha" fill="#ffffff" radius={[0, 0, 0, 0]} />
              <Bar name="Benchmark" dataKey="benchmark" fill="rgba(255,255,255,0.5)" radius={[0, 0, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-none bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow animate-slide-in-left">
            <CardContent className="p-8">
              <div className="h-16 w-16 bg-white/10 rounded-none flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Risk Management</h3>
              <p className="text-gray-300">
                Our disciplined approach maintains a Sharpe ratio of 1.8, outperforming comparable funds while managing risk exposure.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow animate-on-scroll">
            <CardContent className="p-8">
              <div className="h-16 w-16 bg-white/10 rounded-none flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Consistent Alpha</h3>
              <p className="text-gray-300">
                We've generated positive alpha in 6 of the last 7 years, with an average outperformance of 2.3% annually.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow animate-slide-in-right">
            <CardContent className="p-8">
              <div className="h-16 w-16 bg-white/10 rounded-none flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Market Downturns</h3>
              <p className="text-gray-300">
                During market corrections, our defensive positioning has limited drawdowns to 60% of benchmark declines.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
