import React from 'react';
import { Phone, Mail, MapPin, Facebook, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="container-max py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/chauffeur brussels logo.jpeg" 
                alt="Chauffeur Bruxelles"
                className="h-10 w-auto"
              />
              <div className="ml-3">
                <h3 className="text-lg font-bold">Chauffeur</h3>
                <p className="text-sm text-gold-400">Bruxelles</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Service de transport premium à Bruxelles depuis 2005. 
              Excellence, ponctualité et discrétion garanties.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://www.facebook.com/chauffeurbruxelles" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://mypages.be/chauffeurbruxelles" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold-400 transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gold-400">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Transferts Aéroport</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Transport d'Affaires</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Événements Spéciaux</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Excursions Touristiques</a></li>
              <li><a href="#location-bus" className="text-gray-300 hover:text-white transition-colors">Location de Bus</a></li>
            </ul>
          </div>
          
          {/* Fleet */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gold-400">Notre Flotte</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Mercedes Classe E</li>
              <li className="text-gray-300">Mercedes Classe S</li>
              <li className="text-gray-300">Mercedes Van 7 places</li>
              <li className="text-gray-300">Mercedes Luxury Van</li>
              <li className="text-gray-300">Bus 30-60 places</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gold-400">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <a href="tel:+3225520905" className="text-gray-300 hover:text-white transition-colors">
                  +32 2 552 09 05
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <a href="mailto:info@chauffeur.brussels" className="text-gray-300 hover:text-white transition-colors">
                  info@chauffeur.brussels
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                <div className="text-gray-300">
                  Rue Belliard 40<br />
                  1040 Bruxelles
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Chauffeur Bruxelles. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;