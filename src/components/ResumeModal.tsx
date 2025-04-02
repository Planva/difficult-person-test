import React from 'react';
import { Language, translations } from '../data/translations';
import { X } from 'lucide-react';

interface ResumeModalProps {
  language: Language;
  onResume: () => void;
  onStartNew: () => void;
  onClose: () => void;
}

export function ResumeModal({ language, onResume, onStartNew, onClose }: ResumeModalProps) {
  const t = translations[language];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-xl font-bold text-gray-900 mb-4">
          {t.ui.resumeTest}
        </h3>
        
        <p className="text-gray-600 mb-6">
          {t.ui.resumePrompt}
        </p>

        <div className="space-y-3">
          <button
            onClick={onResume}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            {t.ui.resumeTest}
          </button>
          
          <button
            onClick={onStartNew}
            className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            {t.ui.startNew}
          </button>
        </div>
      </div>
    </div>
  );
}