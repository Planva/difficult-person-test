import React from 'react';
import { Navigation } from '../components/Navigation';
import { BookOpen, FileText, Brain, BarChart as ChartBar } from 'lucide-react';
import { Footer } from '../components/Footer';

export function ScientificMethodology() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />
      
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Scientific Methodology of the Difficult Person Test
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the research and validation behind our personality assessment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <BookOpen className="w-12 h-12 text-blue-500 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Research Foundation</h2>
              <p className="text-gray-600">
                The Difficult Person Test is based on peer-reviewed research published in
                Personality and Individual Differences (2020). The study identified key
                traits that contribute to interpersonal difficulties.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <ChartBar className="w-12 h-12 text-blue-500 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Statistical Validation</h2>
              <p className="text-gray-600">
                Our test underwent rigorous statistical analysis and validation procedures
                to ensure accurate measurement of personality traits and reliable results.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Research Methodology</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6 py-4">
                <h3 className="text-xl font-bold mb-3">Study Design</h3>
                <p className="text-gray-600 mb-4">
                  The Difficult Person Test methodology involved comprehensive research phases:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Large-scale participant studies</li>
                  <li>• Multiple validation rounds</li>
                  <li>• Cross-cultural verification</li>
                  <li>• Longitudinal outcome tracking</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-6 py-4">
                <h3 className="text-xl font-bold mb-3">Trait Identification</h3>
                <p className="text-gray-600 mb-4">
                  The research process identified seven key traits through:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Factor analysis of personality dimensions</li>
                  <li>• Behavioral correlation studies</li>
                  <li>• Relationship outcome analysis</li>
                  <li>• Expert psychological review</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-6 py-4">
                <h3 className="text-xl font-bold mb-3">Validation Process</h3>
                <p className="text-gray-600 mb-4">
                  Test validation included multiple steps:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Internal consistency testing</li>
                  <li>• Test-retest reliability studies</li>
                  <li>• Convergent validity analysis</li>
                  <li>• Predictive validity assessment</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <FileText className="w-12 h-12 text-blue-500 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Question Development</h2>
              <p className="text-gray-600">
                Each question in the Difficult Person Test was carefully crafted and
                validated through multiple research phases to ensure accurate measurement
                of personality traits. Questions underwent rigorous testing for clarity,
                reliability, and validity.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <Brain className="w-12 h-12 text-blue-500 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ongoing Research</h2>
              <p className="text-gray-600">
                The Difficult Person Test continues to evolve through ongoing research
                and validation studies. Our team regularly analyzes new data to refine
                and improve the assessment's accuracy and reliability.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}