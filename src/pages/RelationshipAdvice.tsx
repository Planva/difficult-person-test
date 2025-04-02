import React from 'react';
import { Navigation } from '../components/Navigation';
import { Heart, Users, Shield, Brain } from 'lucide-react';
import { Footer } from '../components/Footer';

export function RelationshipAdvice() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />
      
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Relationship Advice Based on Difficult Person Test Results
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn how to improve your relationships using insights from your personality assessment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <Heart className="w-12 h-12 text-blue-500 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Your Impact</h2>
              <p className="text-gray-600">
                The Difficult Person Test helps you understand how your personality traits
                influence your relationships. By recognizing these patterns, you can develop
                strategies for more positive interactions.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <Users className="w-12 h-12 text-blue-500 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Building Better Connections</h2>
              <p className="text-gray-600">
                Learn how to use your test results to improve communication, build trust,
                and create stronger relationships with friends, family, and colleagues.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Trait-Specific Advice</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6 py-4">
                <h3 className="text-xl font-bold mb-3">Managing High Callousness</h3>
                <p className="text-gray-600 mb-4">
                  If you scored high in callousness on the Difficult Person Test, consider these strategies:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Practice active listening and empathy exercises</li>
                  <li>• Seek feedback about emotional impact on others</li>
                  <li>• Develop emotional awareness through mindfulness</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-6 py-4">
                <h3 className="text-xl font-bold mb-3">Balancing Grandiosity</h3>
                <p className="text-gray-600 mb-4">
                  For those with elevated grandiosity scores in the Difficult Person Test:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Practice humility and acknowledge others' contributions</li>
                  <li>• Develop realistic self-assessment skills</li>
                  <li>• Focus on mutual success in relationships</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-6 py-4">
                <h3 className="text-xl font-bold mb-3">Addressing Aggressiveness</h3>
                <p className="text-gray-600 mb-4">
                  If your Difficult Person Test revealed high aggressiveness:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Learn anger management techniques</li>
                  <li>• Practice peaceful conflict resolution</li>
                  <li>• Develop patience in challenging situations</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <Shield className="w-12 h-12 text-blue-500 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Setting Boundaries</h2>
              <p className="text-gray-600">
                Learn how to establish and maintain healthy boundaries based on your
                Difficult Person Test results. Understanding your traits helps you create
                relationships that respect both your needs and others'.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <Brain className="w-12 h-12 text-blue-500 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Personal Growth</h2>
              <p className="text-gray-600">
                Use your Difficult Person Test insights to identify areas for personal
                development. Focus on transforming challenging traits into strengths
                through conscious effort and practice.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}