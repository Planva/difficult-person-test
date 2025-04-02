import React from 'react';
import { Navigation } from '../components/Navigation';
import { BookOpen, FileText, Users, Brain } from 'lucide-react';

export function Research() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Research Background
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the scientific foundation of the Difficult Person Test
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Original Research</h2>
          <p className="text-gray-600 mb-6">
            The Difficult Person Test is based on research conducted by Chelsea Sleep and colleagues,
            published in 2020 in the journal "Personality and Individual Differences" (DOI: 10.1016/j.paid.2020.110171).
            Their work identified seven key traits that contribute to interpersonal difficulty.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-6">
              <BookOpen className="w-8 h-8 text-blue-500 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Methodology</h3>
              <p className="text-gray-600">
                The research involved comprehensive studies with large participant samples,
                using validated psychological measures and statistical analysis to identify
                key personality traits.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <FileText className="w-8 h-8 text-blue-500 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Validation</h3>
              <p className="text-gray-600">
                The identified traits were validated through multiple studies and shown
                to reliably predict interpersonal difficulties and relationship outcomes.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Seven Core Traits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold">Callousness</h3>
                <p className="text-gray-600">Reduced empathy and emotional sensitivity</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold">Grandiosity</h3>
                <p className="text-gray-600">Elevated sense of self-importance</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold">Aggressiveness</h3>
                <p className="text-gray-600">Tendency toward hostile behavior</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold">Suspicion</h3>
                <p className="text-gray-600">Distrust in others' intentions</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold">Manipulativeness</h3>
                <p className="text-gray-600">Strategic influence for personal gain</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold">Dominance</h3>
                <p className="text-gray-600">Need for control in social situations</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold">Risk-Taking</h3>
                <p className="text-gray-600">Propensity for dangerous behavior</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Applications and Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-6">
              <Users className="w-8 h-8 text-blue-500 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Relationship Insights</h3>
              <p className="text-gray-600">
                Understanding these traits helps individuals recognize patterns in their
                relationships and develop strategies for better interpersonal interactions.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <Brain className="w-8 h-8 text-blue-500 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Personal Growth</h3>
              <p className="text-gray-600">
                Self-awareness of these traits can lead to personal development and
                improved relationship outcomes through targeted behavioral changes.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}