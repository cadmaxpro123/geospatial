import React from 'react';
import { SolutionCard } from './SolutionCard';
import { solutionItems } from './solutionsData';

export function SolutionsSection() {
  return (
    <section id="solutions" className="relative min-h-screen bg-gray-900 py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto lg:ml-32">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutionItems.map((item, index) => (
            <SolutionCard
              key={item.id}
              title={item.title}
              description={item.description}
              icon={item.icon}
              color={item.color}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}