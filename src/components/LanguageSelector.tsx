import React from 'react';
import { Language } from '../data/translations';

interface LanguageSelectorProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

const languageNames: Record<Language, string> = {
  'en': 'English',
  'th': 'ไทย',
  'es-CL': 'Español (Chile)',
  'ro': 'Română',
  'el': 'Ελληνικά',
  'es-CO': 'Español (Colombia)',
};

const flagEmoji: Record<Language, string> = {
  'en': '🇺🇸',
  'th': '🇹🇭',
  'es-CL': '🇨🇱',
  'ro': '🇷🇴',
  'el': '🇬🇷',
  'es-CO': '🇨🇴',
};

export function LanguageSelector({ currentLanguage, onLanguageChange }: LanguageSelectorProps) {
  return (
    <div className="fixed top-4 right-4 z-50">
      <select
        value={currentLanguage}
        onChange={(e) => onLanguageChange(e.target.value as Language)}
        className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
        style={{ maxWidth: '150px' }}
      >
        {Object.entries(languageNames).map(([code, name]) => (
          <option key={code} value={code}>
            {flagEmoji[code as Language]} {name}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}