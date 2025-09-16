import React from 'react';
import { Users, Wifi, Snowflake, Music, Phone } from 'lucide-react';

const Fleet = () => {
  const vehicles = [
    {
      id: 1,
      title: "Mercedes Classe E",
      category: "Berline Executive",
      image: "/mercedes_berline_e_class-dtjswqwb.jpeg",
      passengers: "1-3",
      luggage: "2-3",
      features: ["Climatisation", "WiFi", "Eau gratuite", "Journaux"],
      description: "Parfait pour vos déplacements d'affaires et transferts aéroport."
    },
    {
      id: 2,
      title: "Mercedes Classe S",
      category: "Berline Luxe",
      image: "/mercedes_berline_s_class-bfviy9i7.jpeg",
      passengers: "1-3",
      luggage: "2-3",
      features: ["Climatisation", "WiFi", "Mini-bar", "Massage", "TV"],
      description: "Le summum du luxe pour vos événements les plus prestigieux."
    },
    {
      id: 3,
      title: "Mercedes Van",
      category: "Minibus Premium",
      image: "/mercedes_minibus_van-c5fcjkpn.jpeg",
      passengers: "4-7",
      luggage: "4-8",
      features: ["Climatisation", "WiFi", "USB", "Espace généreux"],
      description: "Idéal pour les groupes et les familles nombreuses."
    },
    {
      id: 4,
      title: "Mercedes Luxury Van",
      category: "Van de Luxe",
      image: "/mercedes_luxury_van_sunset-dsrzm5j9.png",
      passengers: "6-8",
      luggage: "6-10",
      features: ["Climatisation", "WiFi", "Bar", "Sièges cuir", "LED"],
      description: "Transport premium pour groupes avec le plus haut niveau de confort."
    }
  ];

  const getFeatureIcon = (feature: string) => {
    switch(feature.toLowerCase()) {
      case 'wifi': return <Wifi className="w-4 h-4" />;
      case 'climatisation': return <Snowflake className="w-4 h-4" />;
      case 'mini-bar':
      case 'bar': return <Music className="w-4 h-4" />;
      default: return <div className="w-2 h-2 bg-gold-500 rounded-full"></div>;
    }
  };

  return (
    <section id="flotte" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Notre Flotte Mercedes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des véhicules premium Mercedes-Benz entretenus avec soin pour vous offrir 
            confort, sécurité et élégance lors de tous vos déplacements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {vehicle.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {vehicle.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {vehicle.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-primary-600" />
                    <span className="text-sm text-gray-600">
                      {vehicle.passengers} passagers
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 16H6V6H2C2 4 4 2 6 2H14C16 2 18 4 18 6H14V16H12L10 14L8 16Z"/>
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">
                      {vehicle.luggage} bagages
                    </span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Équipements :</h4>
                  <div className="flex flex-wrap gap-2">
                    {vehicle.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-1 bg-white px-3 py-1 rounded-full text-sm">
                        {getFeatureIcon(feature)}
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <a 
                  href="tel:+3225520905"
                  className="w-full btn-primary text-center flex items-center justify-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Réserver ce véhicule
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-gold-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Besoin d'un conseil pour choisir ?
            </h3>
            <p className="text-lg mb-6">
              Nos experts vous aident à sélectionner le véhicule parfait selon vos besoins
            </p>
            <a href="tel:+3225520905" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-200">
              Contactez nos experts
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fleet;