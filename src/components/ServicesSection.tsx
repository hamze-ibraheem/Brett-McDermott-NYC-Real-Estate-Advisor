import React from 'react';
import { FadeIn } from './FadeIn';
import { Home, Key, Coins, MapPin } from 'lucide-react';

const services = [
  {
    icon: <Home className="w-6 h-6 text-gold-500" />,
    title: "Rent an Apartment",
    description: "A patient, pressure-free, and highly personalized search to find a place you'll love living in."
  },
  {
    icon: <Key className="w-6 h-6 text-gold-500" />,
    title: "Buy a Home",
    description: "Expert guidance for first-time buyers, coop board packages, condos, and luxury purchases."
  },
  {
    icon: <Coins className="w-6 h-6 text-gold-500" />,
    title: "Sell Your Property",
    description: "Strategic pricing, aggressive marketing, and fast results for Manhattan and Brooklyn sellers."
  },
  {
    icon: <MapPin className="w-6 h-6 text-gold-500" />,
    title: "Relocating to NYC",
    description: "Moving from out of state? Complete hand-holding, neighborhood guidance, and virtual tours."
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="mb-16 border-b border-[#C8A96E]/30 pb-6">
            <h3 className="text-[11px] uppercase tracking-widest text-[#C8A96E] font-bold mb-4">Comprehensive Guidance</h3>
            <p className="text-white/70 text-lg max-w-3xl leading-relaxed">
              Whether you are testing the waters of the NYC market or actively looking to close, I provide full-service advisory for every stage of your journey.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="group h-full p-6 bg-white/5 border border-white/10 hover:border-[#C8A96E] transition-all duration-300">
                <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                  {service.icon}
                </div>
                <h3 className="font-serif text-xl font-medium text-[#C8A96E] mb-2">{service.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
