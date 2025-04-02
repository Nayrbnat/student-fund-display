
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const { toast } = useToast();
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    
    if (email) {
      toast({
        title: "Subscription Successful",
        description: "Thank you for subscribing to our newsletter!",
      });
      
      e.target.reset();
    }
  };
  
  return (
    <footer className="bg-teal-600 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <img src="/public/lovable-uploads/61f4ea1c-590f-4f01-9315-10359c888965.png" alt="MBP Capital Logo" className="h-10 bg-white p-1 rounded" />
              <h3 className="text-xl font-bold ml-2">MBP Capital</h3>
            </div>
            <p className="text-gray-100 mb-6">
              LSE's foremost real money student investment fund, offering a forum for students to discuss financial markets 
              and learn how to run an actively-managed portfolio.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/mbp-capital" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-200 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-teal-200 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-teal-200 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-100 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/performance" className="text-gray-100 hover:text-white transition-colors">Performance</Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-100 hover:text-white transition-colors">Our Team</Link>
              </li>
              <li>
                <Link to="/process" className="text-gray-100 hover:text-white transition-colors">Our Process</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-100 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-teal-200" />
                <span className="text-gray-100">info@mbpcapital.org</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-teal-200" />
                <div className="text-gray-100">
                  London School of Economics<br />
                  Houghton Street<br />
                  London, WC2A 2AE
                </div>
              </li>
              <li className="flex items-start">
                <Linkedin className="h-5 w-5 mr-3 text-teal-200" />
                <a href="https://linkedin.com/company/mbp-capital" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:underline">
                  linkedin.com/company/mbp-capital
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-100 mb-4">
              Subscribe to our newsletter for updates on events, recruitment opportunities, and market insights.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your email address"
                required
                className="bg-teal-700 border-teal-700 text-white placeholder:text-gray-300"
              />
              <Button 
                type="submit" 
                className="w-full bg-white hover:bg-gray-100 text-teal-600 font-semibold"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-teal-500 text-center text-gray-100 text-sm">
          <p>&copy; {new Date().getFullYear()} MBP Capital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
