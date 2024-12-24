import React from 'react';
import { SolutionIcon } from './SolutionIcon';
import type { LucideIcon } from 'lucide-react';

interface SolutionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  // color: string;
  index: number;
}

export function SolutionCard({ title, description, icon, index }: SolutionCardProps) {
  return (
    <div
      className="group"
      style={{ 
        opacity: 0,
        animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`
      }}
    >
      <div className={`bg-gray-800 rounded-lg p-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
        border-l-4 border-blue-500 bg-gradient-to-r from-blue-500 to-blue-900 border-opacity-50 hover:border-opacity-100 h-full`}>
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="p-2 bg-gray-700 rounded-lg">
              <SolutionIcon icon={icon} />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}