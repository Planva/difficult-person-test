import React from 'react';
import { Language, translations } from '../data/translations';
import { Shield, Lock, FileText } from 'lucide-react';

interface PrivacyPolicyProps {
  language: Language;
  onClose: () => void;
}

export function PrivacyPolicy({ language, onClose }: PrivacyPolicyProps) {
  const t = translations[language];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6 my-8 relative">
        <div className="absolute top-4 right-4">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {t.privacy.title}
            </h2>
            <p className="text-gray-600">
              {t.privacy.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <Shield className="w-8 h-8 text-blue-500 mb-3" />
              <h3 className="font-semibold mb-2">{t.privacy.dataProtection}</h3>
              <p className="text-sm text-gray-600">{t.privacy.dataProtectionDesc}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <Lock className="w-8 h-8 text-blue-500 mb-3" />
              <h3 className="font-semibold mb-2">{t.privacy.noStorage}</h3>
              <p className="text-sm text-gray-600">{t.privacy.noStorageDesc}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <FileText className="w-8 h-8 text-blue-500 mb-3" />
              <h3 className="font-semibold mb-2">{t.privacy.research}</h3>
              <p className="text-sm text-gray-600">{t.privacy.researchDesc}</p>
            </div>
          </div>

          <div className="space-y-4">
            <section>
              <h3 className="text-lg font-semibold mb-2">{t.privacy.dataCollection}</h3>
              <p className="text-gray-600 mb-2">{t.privacy.dataCollectionDesc}</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {t.privacy.dataPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">{t.privacy.usage}</h3>
              <p className="text-gray-600">{t.privacy.usageDesc}</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">{t.privacy.cookies}</h3>
              <p className="text-gray-600">{t.privacy.cookiesDesc}</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">{t.privacy.disclaimer}</h3>
              <p className="text-gray-600">{t.privacy.disclaimerDesc}</p>
            </section>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <button
              onClick={onClose}
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              {t.privacy.acknowledge}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}