import React from 'react';
import { Clock, Shield, Star, Phone, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-primary-900/90 to-gray-800/95"></div>
      <img 
        src="/hero-background.jpg" 
        alt="Luxury chauffeur service" 
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      
      {/* Content */}
      <div className="relative container-max px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <h1 className="text-6xl lg:text-7xl font-black mb-6 leading-none">
                <span className="text-white block">Chauffeur</span>
                <span className="text-transparent bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text block">Privé Premium</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 max-w-xl leading-relaxed">
                Service de transport d'exception à Bruxelles. 
                Élégance, ponctualité et discrétion garanties 24h/7.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <a href="tel:+3225520905" className="btn-secondary group">
                <Phone className="w-5 h-5 mr-3" />
                Réserver maintenant
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="btn-outline text-white border-white hover:bg-white hover:text-gray-900">
                Découvrir nos services
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <Clock className="w-10 h-10 mx-auto mb-4 text-gold-400" />
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-sm text-gray-300">Service Continu</div>
              </div>
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <Shield className="w-10 h-10 mx-auto mb-4 text-gold-400" />
                <div className="text-3xl font-bold text-white mb-2">18+</div>
                <div className="text-sm text-gray-300">Années d'Expérience</div>
              </div>
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <Star className="w-10 h-10 mx-auto mb-4 text-gold-400" />
                <div className="text-3xl font-bold text-white mb-2">5★</div>
                <div className="text-sm text-gray-300">Service Excellence</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="hidden lg:block relative">
            <div className="relative">
              <img 
                src="/hero-bus-new.jpg" 
                alt="Mercedes luxury vehicle" 
                className="w-full h-auto rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700"
              />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-24 text-white">
          <path fill="currentColor" d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;