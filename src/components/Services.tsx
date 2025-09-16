import React from 'react';
import { 
  Plane, 
  Building2, 
  Calendar, 
  MapPin, 
  Users, 
  Clock,
  Shield,
  Star
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Transferts Aéroport",
      description: "Navettes privées vers tous les aéroports belges et européens. Suivi des vols en temps réel.",
      features: ["Bruxelles Airport", "Charleroi Airport", "Liège Airport", "Suivi de vol"]
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Transport d'Affaires",
      description: "Service premium pour vos rendez-vous professionnels et réunions importantes.",
      features: ["Ponctualité garantie", "Véhicules premium", "Service discret", "Facturation entreprise"]
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Événements Spéciaux",
      description: "Transport VIP pour mariages, soirées de gala et événements privés.",
      features: ["Mariages", "Soirées de gala", "Anniversaires", "Événements corporatifs"]
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Excursions Touristiques",
      description: "Découvrez la Belgique et l'Europe avec nos circuits personnalisés.",
      features: ["Circuits sur mesure", "Guide francophone", "Bruges, Gand, Anvers", "Pays-Bas, France"]
    }
  ];

  const advantages = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Chauffeurs Professionnels",
      description: "Expérimentés, ponctuels et discrets"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Disponibilité 24/7",
      description: "Service continu toute l'année"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Assurance Premium",
      description: "Couverture complète pour votre sécurité"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Service 5 étoiles",
      description: "Excellence et satisfaction garanties"
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Services Premium
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions de transport sur mesure pour répondre à tous vos besoins, 
            avec le plus haut niveau de service et de confort.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-primary-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Pourquoi Choisir Chauffeur Bruxelles ?
            </h3>
            <p className="text-gray-600">
              Plus de 18 ans d'expérience au service de votre mobilité
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-full mb-3">
                  {advantage.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  {advantage.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;