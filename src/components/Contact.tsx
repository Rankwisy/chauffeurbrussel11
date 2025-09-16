import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gray-900 text-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Contactez-Nous
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Notre équipe est à votre disposition 24h/7 pour répondre à vos besoins de transport. 
            Contactez-nous par téléphone, email ou via nos réseaux sociaux.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gold-400">
              Informations de Contact
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-gray-800 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Téléphone</h4>
                  <p className="text-gray-300 mb-2">Disponible 24h/7</p>
                  <a href="tel:+3225520905" className="text-xl font-bold text-gold-400 hover:text-gold-300 transition-colors">
                    +32 2 552 09 05
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-gray-800 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Email</h4>
                  <p className="text-gray-300 mb-2">Réponse rapide garantie</p>
                  <a href="mailto:info@chauffeur.brussels" className="text-lg text-gold-400 hover:text-gold-300 transition-colors">
                    info@chauffeur.brussels
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-gray-800 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Adresse</h4>
                  <p className="text-gray-300">
                    Rue Belliard 40<br />
                    1040 Bruxelles, Belgique
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-gray-800 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Horaires</h4>
                  <div className="text-gray-300">
                    <p>Lu-Ve: 08h30 - 22h30</p>
                    <p>Sa-Di: 10h00 - 23h00</p>
                    <p className="text-gold-400 font-medium">Service 24/7 sur demande</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gold-400">
              Zone de Service
            </h3>
            
            <div className="bg-gray-800 rounded-lg p-6 mb-8">
              <h4 className="font-semibold text-lg mb-4">Nous couvrons :</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-gold-400 mb-2">Belgique</h5>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Bruxelles-Capitale</li>
                    <li>• Flandre</li>
                    <li>• Wallonie</li>
                    <li>• Tous aéroports</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gold-400 mb-2">International</h5>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Pays-Bas</li>
                    <li>• France</li>
                    <li>• Allemagne</li>
                    <li>• Luxembourg</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <h4 className="font-semibold text-lg mb-4">Suivez-nous</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/chauffeurbruxelles" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                  <span>Facebook</span>
                </a>
                <a 
                  href="https://mypages.be/chauffeurbruxelles" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gold-600 hover:bg-gold-700 px-4 py-2 rounded-lg transition-colors"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>MyPages</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-gold-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Prêt à voyager avec nous ?
            </h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Réservez dès maintenant votre transport premium. 
              Notre équipe vous confirmera votre réservation dans les plus brefs délais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+3225520905" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-200 inline-flex items-center justify-center">
                <Phone className="w-4 h-4 mr-2" />
                Appeler maintenant
              </a>
              <a href="mailto:info@chauffeur.brussels" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200 inline-flex items-center justify-center">
                <Mail className="w-4 h-4 mr-2" />
                Envoyer un email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;