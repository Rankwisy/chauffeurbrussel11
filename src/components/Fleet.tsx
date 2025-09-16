import React from 'react';
import { Users, Wifi, Snowflake, Music, Phone, Star, ArrowRight, CheckCircle } from 'lucide-react';

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
      description: "Parfait pour vos déplacements d'affaires et transferts aéroport avec un confort optimal.",
      rating: 4.9,
      price: "À partir de 89€"
    },
    {
      id: 2,
      title: "Mercedes Classe S",
      category: "Berline Luxe",
      image: "/mercedes_berline_s_class-bfviy9i7.jpeg",
      passengers: "1-3",
      luggage: "2-3",
      features: ["Climatisation", "WiFi", "Mini-bar", "Massage", "TV"],
      description: "Le summum du luxe pour vos événements les plus prestigieux et occasions spéciales.",
      rating: 5.0,
      price: "À partir de 149€"
    },
    {
      id: 3,
      title: "Mercedes Van",
      category: "Minibus Premium",
      image: "/mercedes_minibus_van-c5fcjkpn.jpeg",
      passengers: "4-7",
      luggage: "4-8",
      features: ["Climatisation", "WiFi", "USB", "Espace généreux"],
      description: "Idéal pour les groupes et les familles nombreuses avec un maximum de confort.",
      rating: 4.8,
      price: "À partir de 119€"
    },
    {
      id: 4,
      title: "Mercedes Luxury Van",
      category: "Van de Luxe",
      image: "/mercedes_luxury_van_sunset-dsrzm5j9.png",
      passengers: "6-8",
      luggage: "6-10",
      features: ["Climatisation", "WiFi", "Bar", "Sièges cuir", "LED"],
      description: "Transport premium pour groupes avec le plus haut niveau de confort et d'élégance.",
      rating: 5.0,
      price: "À partir de 199€"
    }
  ];

  const getFeatureIcon = (feature: string) => {
    switch(feature.toLowerCase()) {
      case 'wifi': return <Wifi className="w-4 h-4" />;
      case 'climatisation': return <Snowflake className="w-4 h-4" />;
      case 'mini-bar':
      case 'bar': return <Music className="w-4 h-4" />;
      default: return <CheckCircle className="w-4 h-4" />;
    }
  };

  return (
    <section id="flotte" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-20">
          <h2 className="section-title">
            Notre Flotte <span className="gradient-text">Mercedes</span>
          </h2>
          <p className="section-subtitle">
            Des véhicules premium Mercedes-Benz entretenus avec soin pour vous offrir 
            confort, sécurité et élégance lors de tous vos déplacements en Belgique et en Europe.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-xl card-hover border border-gray-100">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
                    {vehicle.category}
                  </span>
                </div>
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold text-gray-900">{vehicle.rating}</span>
                </div>
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2">
                  <div className="text-lg font-bold text-primary-600">{vehicle.price}</div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {vehicle.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {vehicle.description}
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{vehicle.passengers}</div>
                      <div className="text-sm text-gray-600">Passagers</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gold-100 rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-gold-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 16H6V6H2C2 4 4 2 6 2H14C16 2 18 4 18 6H14V16H12L10 14L8 16Z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{vehicle.luggage}</div>
                      <div className="text-sm text-gray-600">Bagages</div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Équipements Premium :</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {vehicle.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <div className="text-green-500">
                          {getFeatureIcon(feature)}
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <a 
                  href="tel:+3225520905"
                  className="w-full btn-primary flex items-center justify-center group"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  Réserver ce véhicule
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary-600 via-primary-700 to-gold-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Besoin d'aide pour choisir ?
              </h3>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Nos experts vous aident à sélectionner le véhicule parfait selon vos besoins, 
                votre budget et l'occasion
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+3225520905" className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-3" />
                  Consultation gratuite
                </a>
                <a href="#contact" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-4 px-8 rounded-xl transition-all duration-200 inline-flex items-center justify-center">
                  Demander un devis
                  <ArrowRight className="w-5 h-5 ml-3" />
                </a>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fleet;