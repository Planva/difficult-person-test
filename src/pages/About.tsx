import React from 'react';
import { Navigation } from '../components/Navigation';
import { Brain, Users, FileText, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About the Difficult Person Test
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover insights about your personality through scientifically validated measures
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <Brain className="w-12 h-12 text-blue-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Scientific Foundation</h2>
            <p className="text-gray-600">
              Based on peer-reviewed research by Chelsea Sleep and colleagues (2020), this test
              measures seven key personality traits that can influence interpersonal relationships
              and social interactions.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <Users className="w-12 h-12 text-blue-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Assessment</h2>
            <p className="text-gray-600">
              Through 35 carefully crafted questions, we evaluate traits like callousness,
              grandiosity, aggressiveness, and more to provide a detailed personality profile.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <FileText className="w-12 h-12 text-blue-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Detailed Results</h2>
            <p className="text-gray-600">
              Receive personalized insights about your personality traits, including detailed
              explanations and recommendations for personal growth and understanding.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <BookOpen className="w-12 h-12 text-blue-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Educational Purpose</h2>
            <p className="text-gray-600">
              This test is designed for educational and self-reflection purposes. While based on
              scientific research, it should not be used for clinical diagnosis.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Take the Test Now
          </Link>
        </div>
      </main>
    </div>
  );
}