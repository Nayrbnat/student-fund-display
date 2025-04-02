
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

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
    <footer className="bg-navy text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6">Alpha Investments</h3>
            <p className="text-gray-300 mb-6">
              A student-managed investment fund focused on delivering competitive returns 
              while providing hands-on financial experience to the next generation of investment leaders.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gold transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#performance" className="text-gray-300 hover:text-white transition-colors">Performance</a>
              </li>
              <li>
                <a href="#team" className="text-gray-300 hover:text-white transition-colors">Our Team</a>
              </li>
              <li>
                <a href="#process" className="text-gray-300 hover:text-white transition-colors">Investment Process</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-gold" />
                <span className="text-gray-300">info@alphainvestments.edu</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-gold" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-gold" />
                <div className="text-gray-300">
                  School of Business<br />
                  123 University Avenue<br />
                  Cambridge, MA 02138
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates on our fund's performance and activities.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your email address"
                required
                className="bg-navy-light border-navy-light text-white placeholder:text-gray-400"
              />
              <Button 
                type="submit" 
                className="w-full bg-gold hover:bg-gold-light text-navy font-semibold"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-navy-light text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Alpha Investments. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
