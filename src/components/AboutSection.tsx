
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const timeline = [
  { year: '2015', event: 'MBP Capital Founded' },
  { year: '2016', event: 'First Investment Strategy Formalized' },
  { year: '2018', event: 'Expanded into Fundamental Equities' },
  { year: '2022', event: 'First Victory in External Competition' },
  { year: '2023', event: 'Launched Risk Management Team' },
  { year: '2024', event: 'Multiple Competition Placements' }
];

const AboutSection = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">About MBP Capital</h2>
          <p className="text-gray-700 text-lg">
            Founded in 2015, MBP Capital is the LSE's foremost real money student investment fund, offering a forum for students to discuss financial markets and learn portfolio management.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-teal-600">Our Mission</h3>
            <p className="text-gray-700">
              MBP Capital aims to be the foremost student investment fund in London and the UK, 
              providing investment education to the future generation of finance professionals. 
              We provide a unique opportunity for budding investors to hone their technical knowledge 
              in fundamental and macro trading.
            </p>
            
            <h3 className="text-2xl font-semibold text-teal-600">Our Vision</h3>
            <p className="text-gray-700">
              Whilst MBP Capital prides itself on investment excellence, our predominant focus has and 
              will always be on learning. We aim to cultivate the next generation of investors with a 
              focus on curiosity – we believe that the competitive advantage of young investment 
              professionals is the fresh perspective we bring.
            </p>

            <p className="text-gray-700">
              MBP represents a family of investment professionals bonded together by a shared passion 
              for the financial markets.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <Card className="bg-teal-600/5 border-none shadow-sm">
                <CardContent className="p-6">
                  <h4 className="text-teal-600 font-semibold mb-1">Founded</h4>
                  <p className="text-3xl font-bold">2015</p>
                </CardContent>
              </Card>
              <Card className="bg-teal-600/5 border-none shadow-sm">
                <CardContent className="p-6">
                  <h4 className="text-teal-600 font-semibold mb-1">University</h4>
                  <p className="text-3xl font-bold">LSE</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-center mb-6">Our History</h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="rounded-full h-10 w-10 flex items-center justify-center bg-teal-600 text-white font-bold text-sm">
                      {item.year.slice(2)}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="h-full w-0.5 bg-teal-600/20 my-1"></div>
                    )}
                  </div>
                  <div className="pt-1">
                    <p className="font-semibold text-gray-800">{item.year}</p>
                    <p className="text-gray-600">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-teal-600 mb-4">Macro Team</h3>
              <p className="text-gray-700 mb-4">
                Our Macro team focuses on identifying global economic trends and market inefficiencies. 
                They analyze macroeconomic indicators, geopolitical events, and central bank policies to 
                make informed investment decisions across various asset classes including equities, fixed 
                income, commodities, and FX.
              </p>
              <p className="text-gray-700">
                The team employs both top-down and thematic approaches, leveraging economic data analysis 
                and policy interpretation to position portfolios advantageously ahead of market shifts.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-teal-600 mb-4">Fundamental Equities Team</h3>
              <p className="text-gray-700 mb-4">
                The Fundamental Equities team adopts a bottom-up approach to investing that places a strong 
                emphasis on business quality and industry dynamics. We focus on varying themes across our 
                pods: serial acquirers, quality compounders, merger arbitrage, and more.
              </p>
              <p className="text-gray-700">
                Every investment is backed by a detailed financial model that sensitizes and illustrates 
                the asymmetric risk-reward opportunities. We adopt first principle thinking in breaking 
                down companies and are especially excited about those unloved by Mr. Market.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
