import React from 'react';
import { Navigation } from '../components/Navigation';
import { Brain, ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Results() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Understanding Your Results
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn how to interpret your Difficult Person Test scores and what they mean for your relationships
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <Brain className="w-12 h-12 text-blue-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Score Interpretation</h2>
            <p className="text-gray-600 mb-4">
              Your results are presented on a scale of 1-5 for each trait, where:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>1-2: Low expression of the trait</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>3: Moderate expression of the trait</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>4-5: High expression of the trait</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <FileText className="w-12 h-12 text-blue-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Your Results Mean</h2>
            <p className="text-gray-600 mb-4">
              Your scores indicate your tendencies in different aspects of interpersonal behavior.
              Higher scores suggest stronger expression of that trait in your personality.
            </p>
            <p className="text-gray-600">
              Remember that these results are for self-reflection and personal growth,
              not clinical diagnosis.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Using Your Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Self-Awareness</h3>
              <p className="text-gray-600">
                Use your results to better understand your behavioral patterns and their impact
                on relationships.
              </p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Personal Growth</h3>
              <p className="text-gray-600">
                Identify areas where you might want to develop new skills or modify behaviors
                for better relationships.
              </p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Communication</h3>
              <p className="text-gray-600">
                Understanding your traits can help you communicate more effectively with others.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Take the Test
          </Link>
        </div>
      </main>
    </div>
  );
}