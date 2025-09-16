import React from 'react';
import { Users, MapPin, Clock, Star, Phone, CheckCircle } from 'lucide-react';

const LocationBus = () => {
  const buses = [
    {
      title: "Bus 30 Places",
      image: "/bus_30_places-dttg3_3b.png",
      capacity: "30",
      features: ["Climatisation", "Audio/Vidéo", "Sièges confort", "Espace bagages"],
      ideal: ["Excursions d'entreprise", "Sorties scolaires", "Événements privés"]
    },
    {
      title: "Bus 50 Places", 
      image: "/bus_50_places-dmpfltyb.png",
      capacity: "50",
      features: ["Climatisation", "WiFi", "Toilettes", "Audio/Vidéo", "Réfrigérateur"],
      ideal: ["Voyages longue distance", "Groupes importants", "Tours touristiques"]
    },
    {
      title: "Bus 60 Places",
      image: "/bus_60_places-q8jyes7i.png", 
      capacity: "60",
      features: ["Climatisation", "WiFi", "Toilettes", "Audio/Vidéo", "Bar", "Sièges inclinables"],
      ideal: ["Voyages internationaux", "Grands groupes", "Événements corporatifs"]
    }
  ];

  const services = [
    "Transferts aéroport pour groupes",
    "Excursions touristiques guidées", 
    "Transport d'entreprise",
    "Voyages scolaires sécurisés",
    "Événements sportifs",
    "Pèlerinages et voyages religieux",
    "Mariages et célébrations",
    "Circuits touristiques multi-jours"
  ];

  const advantages = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Chauffeurs expérimentés",
      desc: "Permis transport en commun"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Toute destination",
      desc: "Belgique et Europe"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Disponible 24/7", 
      desc: "Service continu"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Service premium",
      desc: "Qualité garantie"
    }
  ];

  return (
    <section id="location-bus" className="section-padding bg-gradient-to-br from-primary-50 to-gold-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Location de Bus et Minibus
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transport de groupes avec des véhicules modernes et confortables. 
            Solutions adaptées pour tous vos déplacements collectifs en Belgique et en Europe.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {buses.map((bus, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={bus.image} 
                  alt={bus.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full font-bold">
                  {bus.capacity} places
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {bus.title}
                </h3>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Équipements :</h4>
                  <div className="space-y-1">
                    {bus.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Idéal pour :</h4>
                  <div className="space-y-1">
                    {bus.ideal.map((use, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gold-500 rounded-full mr-2"></div>
                        {use}
                      </div>
                    ))}
                  </div>
                </div>
                
                <a 
                  href="tel:+3225520905" 
                  className="w-full btn-primary text-center flex items-center justify-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Demander un devis
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Nos Services de Transport Collectif
            </h3>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {advantages.map((advantage, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-primary-100 text-primary-600 rounded-full mb-2">
                    {advantage.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">
                    {advantage.title}
                  </h4>
                  <p className="text-xs text-gray-600">
                    {advantage.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Demandez votre devis gratuit
            </h4>
            <p className="text-gray-600 mb-6">
              Obtenez rapidement un devis personnalisé pour votre location de bus. 
              Nos tarifs sont compétitifs et transparents.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700">Réponse en moins de</span>
                <span className="font-bold text-primary-600">2 heures</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700">Devis valable</span>
                <span className="font-bold text-primary-600">30 jours</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700">Paiement sécurisé</span>
                <span className="font-bold text-primary-600">Garanti</span>
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <a 
                href="tel:+3225520905" 
                className="w-full btn-primary text-center flex items-center justify-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                +32 2 552 09 05
              </a>
              <a 
                href="mailto:info@chauffeur.brussels" 
                className="w-full btn-outline text-center"
              >
                info@chauffeur.brussels
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationBus;