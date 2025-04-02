
import { Card, CardContent } from "@/components/ui/card";
import { Search, BarChart2, LineChart, CheckCircle } from "lucide-react";

const ProcessSection = () => {
  return (
    <section id="process" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">Our Investment Process</h2>
          <p className="text-gray-700 text-lg">
            We follow a structured, disciplined approach to identifying investment opportunities
            and managing portfolio risk.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-8 bottom-8 w-0.5 bg-navy/20 -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-0 relative">
            {/* Step 1 */}
            <div className="md:grid md:grid-cols-2 md:gap-12 md:items-center mb-12">
              <div className="md:text-right">
                <div className="bg-white rounded-xl shadow-md p-6 mb-8 md:mb-0">
                  <h3 className="text-xl font-semibold text-navy mb-3">Research & Idea Generation</h3>
                  <p className="text-gray-700">
                    Our analysts conduct comprehensive research across sectors, using fundamental 
                    analysis, industry trends, and macroeconomic insights to identify potential investments.
                  </p>
                  <div className="mt-4 flex flex-col space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-gold mr-2" />
                      <span>Fundamental Analysis</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-gold mr-2" />
                      <span>Industry Research</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-gold mr-2" />
                      <span>Macroeconomic Assessment</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex md:justify-start">
                <div className="h-16 w-16 rounded-full bg-navy flex items-center justify-center text-white border-4 border-white shadow-lg">
                  <Search className="h-7 w-7" />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="md:grid md:grid-cols-2 md:gap-12 md:items-center mb-12">
              <div className="hidden md:flex md:justify-end order-last md:order-first">
                <div className="h-16 w-16 rounded-full bg-navy flex items-center justify-center text-white border-4 border-white shadow-lg">
                  <BarChart2 className="h-7 w-7" />
                </div>
              </div>
              <div className="md:text-left">
                <div className="bg-white rounded-xl shadow-md p-6 mb-8 md:mb-0">
                  <h3 className="text-xl font-semibold text-navy mb-3">Analysis & Valuation</h3>
                  <p className="text-gray-700">
                    We build detailed financial models and conduct thorough valuation analysis
                    to determine fair values and identify mispriced securities with attractive risk-reward profiles.
                  </p>
                  <div className="mt-4 flex flex-col space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-gold mr-2" />
                      <span>Financial Modeling</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-gold mr-2" />
                      <span>Valuation Techniques</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-gold mr-2" />
                      <span>Risk Assessment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="md:grid md:grid-cols-2 md:gap-12 md:items-center">
              <div className="md:text-right">
                <div className="bg-white rounded-xl shadow-md p-6 mb-8 md:mb-0">
                  <h3 className="text-xl font-semibold text-navy mb-3">Portfolio Construction & Monitoring</h3>
                  <p className="text-gray-700">
                    Our investment committee reviews proposals, allocates capital, and continuously 
                    monitors positions, making adjustments as market conditions and fundamentals evolve.
                  </p>
                  <div className="mt-4 flex flex-col space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-gold mr-2" />
                      <span>Position Sizing</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-gold mr-2" />
                      <span>Risk Management</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-gold mr-2" />
                      <span>Performance Tracking</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex md:justify-start">
                <div className="h-16 w-16 rounded-full bg-navy flex items-center justify-center text-white border-4 border-white shadow-lg">
                  <LineChart className="h-7 w-7" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg bg-white">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-navy mb-4">Investment Philosophy</h3>
              <p className="text-gray-700">
                We believe in a value-oriented approach that combines deep fundamental 
                research with disciplined risk management to identify mispriced securities
                with attractive long-term potential.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg bg-white">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-navy mb-4">Risk Management</h3>
              <p className="text-gray-700">
                Our risk framework incorporates position sizing limits, sector exposure 
                constraints, and regular stress testing to ensure portfolio resilience
                across various market environments.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg bg-white">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-navy mb-4">Education & Development</h3>
              <p className="text-gray-700">
                Beyond returns, we focus on developing the next generation of investment 
                professionals through hands-on experience, mentorship, and continuous learning.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
