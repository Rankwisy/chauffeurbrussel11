import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container-max">
        {/* Top bar */}
        <div className="hidden md:flex items-center justify-end py-2 text-sm text-gray-600 border-b border-gray-200">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+3225520905" className="hover:text-primary-600 transition-colors">
                +32 2 552 09 05
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:info@chauffeur.brussels" className="hover:text-primary-600 transition-colors">
                info@chauffeur.brussels
              </a>
            </div>
          </div>
        </div>
        
        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <img 
              src="/chauffeur brussels logo.jpeg" 
              alt="Chauffeur Bruxelles"
              className="h-12 w-auto"
            />
            <div className="ml-3">
              <h1 className="text-xl font-bold text-gray-900">Chauffeur</h1>
              <p className="text-sm text-primary-600 font-medium">Bruxelles</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Accueil
            </a>
            <a href="#services" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Services
            </a>
            <a href="#flotte" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Flotte
            </a>
            <a href="#location-bus" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Location Bus
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Contact
            </a>
            <a href="tel:+3225520905" className="btn-primary">
              Réserver
            </a>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-primary-600">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#accueil" 
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                onClick={toggleMenu}
              >
                Accueil
              </a>
              <a 
                href="#services" 
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a 
                href="#flotte" 
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                onClick={toggleMenu}
              >
                Flotte
              </a>
              <a 
                href="#location-bus" 
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                onClick={toggleMenu}
              >
                Location Bus
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <div className="pt-4 border-t border-gray-200">
                <a href="tel:+3225520905" className="btn-primary inline-block">
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