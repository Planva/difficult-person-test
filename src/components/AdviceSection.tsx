import React from 'react';
import { TraitType } from '../data/questions';
import { Language } from '../data/translations';
import { advice, getAdviceLevel } from '../data/advice';
import { ArrowRight } from 'lucide-react';

interface AdviceSectionProps {
  trait: TraitType;
  score: number;
  language: Language;
}

export function AdviceSection({ trait, score, language }: AdviceSectionProps) {
  const level = getAdviceLevel(score);
  const traitAdvice = advice[language][trait][level];

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg space-y-3 sm:space-y-4">
      <h3 className="text-lg sm:text-xl font-bold text-gray-900">
        {traitAdvice.title}
      </h3>
      
      <p className="text-sm sm:text-base text-gray-600">
        {traitAdvice.description}
      </p>

      <div className="space-y-2">
        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Recommendations:</h4>
        <ul className="space-y-2">
          {traitAdvice.recommendations.map((recommendation, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-700">
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-blue-500 mt-0.5" />
              <span className="text-sm sm:text-base">{recommendation}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}