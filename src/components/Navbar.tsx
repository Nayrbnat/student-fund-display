
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img src="/public/lovable-uploads/61f4ea1c-590f-4f01-9315-10359c888965.png" alt="MBP Capital Logo" className="h-10" />
            <span className="text-xl font-bold text-gray-800 ml-2">MBP Capital</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="font-medium text-gray-700 hover:text-teal-600 transition-colors">About</a>
            <a href="#performance" className="font-medium text-gray-700 hover:text-teal-600 transition-colors">Performance</a>
            <a href="#team" className="font-medium text-gray-700 hover:text-teal-600 transition-colors">Team</a>
            <a href="#process" className="font-medium text-gray-700 hover:text-teal-600 transition-colors">Process</a>
            <Button asChild className="bg-teal-600 hover:bg-teal-700">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 animate-scale-in">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="font-medium text-gray-700 hover:text-teal-600 transition-colors py-2" onClick={toggleMenu}>About</a>
              <a href="#performance" className="font-medium text-gray-700 hover:text-teal-600 transition-colors py-2" onClick={toggleMenu}>Performance</a>
              <a href="#team" className="font-medium text-gray-700 hover:text-teal-600 transition-colors py-2" onClick={toggleMenu}>Team</a>
              <a href="#process" className="font-medium text-gray-700 hover:text-teal-600 transition-colors py-2" onClick={toggleMenu}>Process</a>
              <Button asChild className="bg-teal-600 hover:bg-teal-700 w-full">
                <a href="#contact" onClick={toggleMenu}>Contact Us</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
