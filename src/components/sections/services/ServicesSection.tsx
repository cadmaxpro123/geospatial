import React from 'react';
import { ServiceCard } from './ServiceCard';
import { serviceItems } from './servicesData';

export function ServicesSection() {
  return (
    <section id="services" className="relative min-h-screen bg-gray-900 py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto lg:ml-32">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceItems.map((item, index) => (
            <ServiceCard
              key={item.id}
              title={item.title}
              description={item.description}
              icon={item.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}