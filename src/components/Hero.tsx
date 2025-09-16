import React from 'react';
import { Clock, Shield, Star, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="accueil" className="pt-20 bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/30"></div>
      <img 
        src="/hero-background.jpg" 
        alt="Luxury chauffeur service" 
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
      />
      
      <div className="relative container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Chauffeur Privé
              <span className="text-gold-400 block">à Bruxelles</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200 max-w-lg">
              Service de transport premium avec chauffeur professionnel. 
              Disponible 24h/7 pour vos déplacements d'affaires et personnels.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="tel:+3225520905" className="btn-secondary inline-flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Réserver maintenant
              </a>
              <a href="#services" className="btn-outline">
                Découvrir nos services
              </a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                <Clock className="w-8 h-8 mx-auto mb-2 text-gold-400" />
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-gray-300">Disponible</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                <Shield className="w-8 h-8 mx-auto mb-2 text-gold-400" />
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-gray-300">Sécurisé</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                <Star className="w-8 h-8 mx-auto mb-2 text-gold-400" />
                <div className="text-2xl font-bold">5⭐</div>
                <div className="text-sm text-gray-300">Excellence</div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <img 
              src="/hero-bus-new.jpg" 
              alt="Mercedes luxury vehicle" 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;