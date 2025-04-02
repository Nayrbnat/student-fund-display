
import { Card, CardContent } from "@/components/ui/card";
import { Search, BarChart2, LineChart, CheckCircle, GraduationCap } from "lucide-react";

const ProcessSection = () => {
  return (
    <section id="process" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">Our Process</h2>
          <p className="text-gray-700 text-lg">
            We believe in talent and leadership development – giving stellar analysts the opportunity 
            to grow and develop within the MBP family.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-8 bottom-8 w-0.5 bg-teal-600/20 -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-0 relative">
            {/* Step 1 */}
            <div className="md:grid md:grid-cols-2 md:gap-12 md:items-center mb-12">
              <div className="md:text-right">
                <div className="bg-white rounded-xl shadow-md p-6 mb-8 md:mb-0">
                  <h3 className="text-xl font-semibold text-teal-600 mb-3">Weekly Pod Meetings</h3>
                  <p className="text-gray-700">
                    Every week, analysts gather within pods to discuss their investment theses. 
                    Senior members provide feedback and work on investment ideas with analysts.
                  </p>
                  <div className="mt-4 flex flex-col space-y-2">
                    <div className="flex items-center text-sm text-gray-600 md:justify-end">
                      <span>Idea Generation</span>
                      <CheckCircle className="h-4 w-4 text-teal-500 ml-2 md:order-first md:mr-2 md:ml-0" />
                    </div>
                    <div className="flex items-center text-sm text-gray-600 md:justify-end">
                      <span>Thesis Development</span>
                      <CheckCircle className="h-4 w-4 text-teal-500 ml-2 md:order-first md:mr-2 md:ml-0" />
                    </div>
                    <div className="flex items-center text-sm text-gray-600 md:justify-end">
                      <span>Senior Feedback</span>
                      <CheckCircle className="h-4 w-4 text-teal-500 ml-2 md:order-first md:mr-2 md:ml-0" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex md:justify-start">
                <div className="h-16 w-16 rounded-full bg-teal-600 flex items-center justify-center text-white border-4 border-white shadow-lg">
                  <Search className="h-7 w-7" />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="md:grid md:grid-cols-2 md:gap-12 md:items-center mb-12">
              <div className="hidden md:flex md:justify-end order-last md:order-first">
                <div className="h-16 w-16 rounded-full bg-teal-600 flex items-center justify-center text-white border-4 border-white shadow-lg">
                  <BarChart2 className="h-7 w-7" />
                </div>
              </div>
              <div className="md:text-left">
                <div className="bg-white rounded-xl shadow-md p-6 mb-8 md:mb-0">
                  <h3 className="text-xl font-semibold text-teal-600 mb-3">Investment Pitch</h3>
                  <p className="text-gray-700">
                    Every member must pitch at least once a year to renew their membership. 
                    Analysts present their investment memo and model to the entire society for Q&A.
                  </p>
                  <div className="mt-4 flex flex-col space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                      <span>Investment Memo</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                      <span>Financial Modeling</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                      <span>Q&A Session</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="md:grid md:grid-cols-2 md:gap-12 md:items-center">
              <div className="md:text-right">
                <div className="bg-white rounded-xl shadow-md p-6 mb-8 md:mb-0">
                  <h3 className="text-xl font-semibold text-teal-600 mb-3">Investment Committee Decision</h3>
                  <p className="text-gray-700">
                    The investment committee analyzes the investment memo, model, and follow-up 
                    before making a final investment decision.
                  </p>
                  <div className="mt-4 flex flex-col space-y-2">
                    <div className="flex items-center text-sm text-gray-600 md:justify-end">
                      <span>Risk Analysis</span>
                      <CheckCircle className="h-4 w-4 text-teal-500 ml-2 md:order-first md:mr-2 md:ml-0" />
                    </div>
                    <div className="flex items-center text-sm text-gray-600 md:justify-end">
                      <span>Portfolio Fit</span>
                      <CheckCircle className="h-4 w-4 text-teal-500 ml-2 md:order-first md:mr-2 md:ml-0" />
                    </div>
                    <div className="flex items-center text-sm text-gray-600 md:justify-end">
                      <span>Capital Allocation</span>
                      <CheckCircle className="h-4 w-4 text-teal-500 ml-2 md:order-first md:mr-2 md:ml-0" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex md:justify-start">
                <div className="h-16 w-16 rounded-full bg-teal-600 flex items-center justify-center text-white border-4 border-white shadow-lg">
                  <LineChart className="h-7 w-7" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg bg-white">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-teal-600 mb-4">Investment Philosophy</h3>
              <p className="text-gray-700">
                We believe in rigorous analysis that combines fundamental research with macroeconomic insights. 
                Our approach varies by division but maintains a focus on asymmetric risk-reward opportunities.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg bg-white">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-teal-600 mb-4">Analyst Development</h3>
              <p className="text-gray-700">
                We rotate analysts across pods annually to maximize learning opportunities. 
                Our bootcamp program covers eight essential investment topics culminating in a real stock pitch.
              </p>
              <div className="mt-4 flex justify-center">
                <GraduationCap className="h-12 w-12 text-teal-400" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg bg-white">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-teal-600 mb-4">Our Alumni Network</h3>
              <p className="text-gray-700">
                Joining the MBP family confers unparalleled opportunities to network with investment professionals 
                from both the buy and sell side, with our alumni working at top financial institutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
