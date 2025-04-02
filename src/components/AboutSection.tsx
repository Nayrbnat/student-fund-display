
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const performanceData = [
  { year: '2016', value: 100 },
  { year: '2017', value: 112 },
  { year: '2018', value: 121 },
  { year: '2019', value: 129 },
  { year: '2020', value: 143 },
  { year: '2021', value: 168 },
  { year: '2022', value: 179 },
  { year: '2023', value: 201 },
];

const AboutSection = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">About Our Fund</h2>
          <p className="text-gray-700 text-lg">
            Founded by students with a passion for finance, our fund bridges academic theory with real-world investment practice.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-navy">Our Mission</h3>
            <p className="text-gray-700">
              Alpha Investments is committed to delivering strong risk-adjusted returns 
              while providing students with hands-on investment experience. Our dual mission 
              is to grow our portfolio and develop the next generation of investment professionals.
            </p>
            
            <h3 className="text-2xl font-semibold text-navy">Our Vision</h3>
            <p className="text-gray-700">
              We aim to be recognized as the premier student-managed investment fund, 
              known for our disciplined approach, innovative research, and the exceptional 
              quality of investment professionals we develop.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <Card className="bg-navy/5 border-none shadow-sm">
                <CardContent className="p-6">
                  <h4 className="text-navy font-semibold mb-1">Founded</h4>
                  <p className="text-3xl font-bold">2015</p>
                </CardContent>
              </Card>
              <Card className="bg-navy/5 border-none shadow-sm">
                <CardContent className="p-6">
                  <h4 className="text-navy font-semibold mb-1">University</h4>
                  <p className="text-3xl font-bold">Ivy Capital</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 h-80">
            <h3 className="text-xl font-semibold text-center mb-4">Fund Performance Since Inception</h3>
            <ResponsiveContainer width="100%" height="85%">
              <LineChart data={performanceData} margin={{ top: 5, right: 5, bottom: 5, left: 0 }}>
                <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                <YAxis domain={[90, 220]} tick={{ fontSize: 12 }} />
                <Tooltip 
                  formatter={(value) => [`$${value}`, 'Fund Value']}
                  labelFormatter={(label) => `Year: ${label}`}
                  contentStyle={{ backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid #eee' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#14213d" 
                  strokeWidth={3} 
                  dot={{ fill: '#14213d', strokeWidth: 2, r: 4 }}
                  activeDot={{ fill: '#fca311', strokeWidth: 0, r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
