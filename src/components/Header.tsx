import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="container-max">
        {/* Top contact bar */}
        <div className="hidden lg:flex items-center justify-between py-3 text-sm text-gray-600 border-b border-gray-100">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-primary-600" />
              <span>Rue Belliard 40, 1040 Bruxelles</span>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-primary-600" />
              <a href="tel:+3225520905" className="hover:text-primary-600 font-medium transition-colors">
                +32 2 552 09 05
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-primary-600" />
              <a href="mailto:info@chauffeur.brussels" className="hover:text-primary-600 font-medium transition-colors">
                info@chauffeur.brussels
              </a>
            </div>
          </div>
        </div>
        
        {/* Main header */}
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center space-x-4">
            <img 
              src="/chauffeur brussels logo.jpeg" 
              alt="Chauffeur Bruxelles"
              className="h-16 w-auto object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold gradient-text">Chauffeur</h1>
              <p className="text-sm text-gold-600 font-semibold tracking-wide">BRUXELLES</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#accueil" className="text-gray-700 hover:text-primary-600 font-semibold transition-all duration-200 py-2 border-b-2 border-transparent hover:border-primary-600">
              Accueil
            </a>
            <a href="#services" className="text-gray-700 hover:text-primary-600 font-semibold transition-all duration-200 py-2 border-b-2 border-transparent hover:border-primary-600">
              Services
            </a>
            <a href="#flotte" className="text-gray-700 hover:text-primary-600 font-semibold transition-all duration-200 py-2 border-b-2 border-transparent hover:border-primary-600">
              Flotte
            </a>
            <a href="#location-bus" className="text-gray-700 hover:text-primary-600 font-semibold transition-all duration-200 py-2 border-b-2 border-transparent hover:border-primary-600">
              Location Bus
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 font-semibold transition-all duration-200 py-2 border-b-2 border-transparent hover:border-primary-600">
              Contact
            </a>
            <a href="tel:+3225520905" className="btn-primary">
              Réserver
            </a>
          </nav>
          
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button 
              onClick={toggleMenu} 
              className="p-2 text-gray-700 hover:text-primary-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100">
            <nav className="container-max py-6 space-y-4">
              <a 
                href="#accueil" 
                className="block text-gray-700 hover:text-primary-600 font-semibold py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={toggleMenu}
              >
                Accueil
              </a>
              <a 
                href="#services" 
                className="block text-gray-700 hover:text-primary-600 font-semibold py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a 
                href="#flotte" 
                className="block text-gray-700 hover:text-primary-600 font-semibold py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={toggleMenu}
              >
                Flotte
              </a>
              <a 
                href="#location-bus" 
                className="block text-gray-700 hover:text-primary-600 font-semibold py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={toggleMenu}
              >
                Location Bus
              </a>
              <a 
                href="#contact" 
                className="block text-gray-700 hover:text-primary-600 font-semibold py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <div className="pt-4 border-t border-gray-200">
                <a href="tel:+3225520905" className="btn-primary w-full text-center">
                  Réserver maintenant
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;