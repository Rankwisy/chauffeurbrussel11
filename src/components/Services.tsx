import React from 'react';
import { 
  Plane, 
  Building2, 
  Calendar, 
  MapPin, 
  Users, 
  Clock,
  Shield,
  Star,
  ArrowRight,
  CheckCircle,
  Phone
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Transferts Aéroport",
      description: "Navettes privées vers tous les aéroports belges et européens avec suivi des vols en temps réel.",
      features: ["Bruxelles Airport", "Charleroi Airport", "Liège Airport", "Suivi de vol"],
      color: "bg-blue-500"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Transport d'Affaires",
      description: "Service premium pour vos rendez-vous professionnels et réunions importantes.",
      features: ["Ponctualité garantie", "Véhicules premium", "Service discret", "Facturation entreprise"],
      color: "bg-green-500"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Événements Spéciaux",
      description: "Transport VIP pour mariages, soirées de gala et événements privés d'exception.",
      features: ["Mariages", "Soirées de gala", "Anniversaires", "Événements corporatifs"],
      color: "bg-purple-500"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Excursions Touristiques",
      description: "Découvrez la Belgique et l'Europe avec nos circuits personnalisés et guides experts.",
      features: ["Circuits sur mesure", "Guide francophone", "Bruges, Gand, Anvers", "Pays-Bas, France"],
      color: "bg-orange-500"
    }
  ];

  const advantages = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Chauffeurs Experts",
      description: "Professionnels expérimentés, ponctuels et discrets pour votre confort",
      stats: "18+ ans d'expérience"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Service 24/7",
      description: "Disponibilité continue toute l'année pour tous vos besoins",
      stats: "365 jours par an"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sécurité Totale",
      description: "Assurance premium et véhicules régulièrement contrôlés",
      stats: "100% sécurisé"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Excellence 5★",
      description: "Service premium avec satisfaction client garantie",
      stats: "Note moyenne 5/5"
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-max">
        <div className="text-center mb-20">
          <h2 className="section-title">
            Nos Services <span className="gradient-text">Premium</span>
          </h2>
          <p className="section-subtitle">
            Des solutions de transport sur mesure pour répondre à tous vos besoins, 
            avec le plus haut niveau de service et de confort en Belgique et en Europe.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg card-hover border border-gray-100">
              <div className={`inline-flex items-center justify-center w-16 h-16 ${service.color} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="text-primary-600 font-semibold hover:text-primary-700 flex items-center group-hover:translate-x-2 transition-all duration-300">
                En savoir plus <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          ))}
        </div>

        {/* Advantages Section */}
        <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir <span className="gradient-text">Chauffeur Bruxelles</span> ?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une expertise reconnue au service de votre mobilité premium depuis 2005
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-100 to-gold-100 text-primary-600 rounded-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {advantage.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">
                  {advantage.title}
                </h4>
                <p className="text-gray-600 mb-3 leading-relaxed">
                  {advantage.description}
                </p>
                <div className="text-sm font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full inline-block">
                  {advantage.stats}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 via-primary-700 to-gold-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Besoin d'un service personnalisé ?
              </h3>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Nos experts vous accompagnent pour créer la solution de transport parfaite selon vos besoins spécifiques
              </p>
              <a href="tel:+3225520905" className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center">
                <Phone className="w-5 h-5 mr-3" />
                Contactez nos experts
                <ArrowRight className="w-5 h-5 ml-3" />
              </a>
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;