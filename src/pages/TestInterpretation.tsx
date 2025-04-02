import React from 'react';
import { Navigation } from '../components/Navigation';
import { Brain, BarChart as ChartBar, FileText } from 'lucide-react';
import { Footer } from '../components/Footer';

export function TestInterpretation() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />
      
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Difficult Person Test Interpretation Guide
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn how to understand and interpret your Difficult Person Test results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <Brain className="w-12 h-12 text-blue-500 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Test Scores</h2>
              <p className="text-gray-600">
                The Difficult Person Test provides detailed scores across seven key personality
                dimensions. Each score reflects the strength of specific traits that influence
                interpersonal relationships.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <ChartBar className="w-12 h-12 text-blue-500 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Score Analysis</h2>
              <p className="text-gray-600">
                Learn how to analyze your Difficult Person Test results and understand what
                different score levels mean for each personality trait. Discover insights
                about your interpersonal style.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Interpreting Your Results</h2>
            <div className="space-y-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">High Scores in the Test</h3>
                <p className="text-gray-600 mb-4">
                  Understanding what high scores mean in the Difficult Person Test can provide
                  valuable insights into personality patterns and relationship dynamics.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Implications for personal relationships</li>
                  <li>Impact on professional interactions</li>
                  <li>Opportunities for personal growth</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Moderate Score Interpretation</h3>
                <p className="text-gray-600 mb-4">
                  Moderate scores in the Difficult Person Test often indicate balanced
                  personality traits with both strengths and areas for development.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Understanding balanced traits</li>
                  <li>Recognizing flexibility in behavior</li>
                  <li>Identifying growth opportunities</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Low Score Analysis</h3>
                <p className="text-gray-600 mb-4">
                  Low scores in the Difficult Person Test can reveal unique insights about
                  interpersonal styles and relationship patterns.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Understanding interpersonal strengths</li>
                  <li>Recognizing adaptive behaviors</li>
                  <li>Leveraging positive traits</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}