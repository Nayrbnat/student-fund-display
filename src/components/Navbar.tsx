
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
            <span className="text-xl font-bold text-navy">Alpha Investments</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="font-medium text-gray-700 hover:text-navy transition-colors">About</a>
            <a href="#performance" className="font-medium text-gray-700 hover:text-navy transition-colors">Performance</a>
            <a href="#team" className="font-medium text-gray-700 hover:text-navy transition-colors">Team</a>
            <a href="#process" className="font-medium text-gray-700 hover:text-navy transition-colors">Process</a>
            <Button asChild className="bg-navy hover:bg-navy-light">
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
              <a href="#about" className="font-medium text-gray-700 hover:text-navy transition-colors py-2" onClick={toggleMenu}>About</a>
              <a href="#performance" className="font-medium text-gray-700 hover:text-navy transition-colors py-2" onClick={toggleMenu}>Performance</a>
              <a href="#team" className="font-medium text-gray-700 hover:text-navy transition-colors py-2" onClick={toggleMenu}>Team</a>
              <a href="#process" className="font-medium text-gray-700 hover:text-navy transition-colors py-2" onClick={toggleMenu}>Process</a>
              <Button asChild className="bg-navy hover:bg-navy-light w-full">
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
