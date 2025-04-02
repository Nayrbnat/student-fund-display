
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Linkedin, ArrowRight } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  
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
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      setLoading(false);
    }, 1500);
  };

  const faqs = [
    {
      question: "How can I join MBP Capital?",
      answer: "We recruit first years through our selective bootcamp program. Applications open at the beginning of each academic year. Visit our Process page for more details."
    },
    {
      question: "Do I need prior investment experience?",
      answer: "No prior investment experience is required, but a strong interest in financial markets and willingness to learn is essential. Our bootcamp will teach you the necessary skills."
    },
    {
      question: "How much time commitment is expected?",
      answer: "Members typically dedicate 5-10 hours per week to MBP activities, including research, meetings, and presentations. The bootcamp phase may require additional time."
    },
    {
      question: "Is MBP Capital only for finance students?",
      answer: "No, we welcome students from all academic backgrounds who have a passion for investing. Diversity of thought is valuable in investment analysis."
    },
    {
      question: "Do you provide networking opportunities?",
      answer: "Yes, we regularly organize networking events with alumni working in the industry, and host speaker sessions with investment professionals."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#1a3a5f]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" 
            alt="Contact Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">Contact Us</h1>
            <p className="text-xl text-gray-200 mb-8 animate-fade-in">
              Get in touch with the MBP Capital team to learn more about our activities, recruitment process, or to discuss potential collaborations.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form and Info Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold mb-6 heading-gradient">Send Us a Message</h2>
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john.smith@example.com"
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Recruitment Inquiry"
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Your message here..."
                        className="w-full min-h-[120px]"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-[#1a3a5f] hover:bg-[#2a4a6f]"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Info */}
            <div className="animate-slide-in-right">
              <h2 className="text-3xl font-bold mb-6 heading-gradient">Get In Touch</h2>
              
              <div className="bg-gray-50 rounded-xl p-8 shadow-lg mb-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-[#1a3a5f] mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold text-lg text-[#1a3a5f]">Email Us</h3>
                      <p className="text-gray-700 mt-1">info@mbpcapital.org</p>
                      <p className="text-gray-600 text-sm mt-2">For general inquiries and recruitment questions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Linkedin className="h-6 w-6 text-[#1a3a5f] mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold text-lg text-[#1a3a5f]">Connect with Us</h3>
                      <p className="text-gray-700 mt-1">
                        <a href="https://linkedin.com/company/mbp-capital" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          linkedin.com/company/mbp-capital
                        </a>
                      </p>
                      <p className="text-gray-600 text-sm mt-2">Follow us for updates and industry insights</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-[#1a3a5f] mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold text-lg text-[#1a3a5f]">Our Location</h3>
                      <p className="text-gray-700 mt-1">
                        London School of Economics<br />
                        Houghton Street<br />
                        London, WC2A 2AE
                      </p>
                      <p className="text-gray-600 text-sm mt-2">Weekly meetings held on campus</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Apply Now Card */}
              <Card className="border-none shadow-xl bg-[#1a3a5f] text-white overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Apply to Join MBP Capital</h3>
                  <p className="text-gray-200 mb-6">
                    Ready to become part of LSE's foremost student investment fund? Applications for our next bootcamp are now open.
                  </p>
                  <Button asChild className="w-full bg-white hover:bg-gray-100 text-[#1a3a5f]">
                    <a href="https://forms.gle/your-application-form" target="_blank" rel="noopener noreferrer">
                      Start Application <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">Frequently Asked Questions</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Find answers to common questions about MBP Capital, our recruitment process, and membership requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="animate-on-scroll">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-[#1a3a5f] mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10 animate-on-scroll">
            <p className="text-gray-700">
              Don't see your question here? Feel free to{" "}
              <a href="mailto:info@mbpcapital.org" className="text-[#1a3a5f] font-semibold hover:underline">
                email us
              </a>{" "}
              for more information.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
