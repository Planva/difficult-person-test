import React from 'react';
import { Navigation } from '../components/Navigation';
import { Brain, Target, ArrowUp, Lightbulb } from 'lucide-react';
import { Footer } from '../components/Footer';

export function PersonalityDevelopment() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />
      
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Personality Development Guide
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Using your Difficult Person Test results for personal growth and improvement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <Brain className="w-12 h-12 text-blue-500 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Growth Potential</h2>
              <p className="text-gray-600">
                Your Difficult Person Test results provide insights into areas where personal
                development can lead to improved relationships and better social interactions.
                Learn how to leverage your strengths and address challenges.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <Target className="w-12 h-12 text-blue-500 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Setting Development Goals</h2>
              <p className="text-gray-600">
                Based on your personality assessment, create targeted goals for personal
                growth. Focus on specific traits identified in your Difficult Person Test
                results to develop more effective interpersonal skills.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Development Strategies</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6 py-4">
                <h3 className="text-xl font-bold mb-3">Emotional Intelligence Development</h3>
                <p className="text-gray-600 mb-4">
                  Enhance your emotional awareness and interpersonal effectiveness:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Practice active listening and empathy</li>
                  <li>• Develop emotional self-awareness</li>
                  <li>• Learn to recognize others' emotional states</li>
                  <li>• Improve emotional regulation skills</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-6 py-4">
                <h3 className="text-xl font-bold mb-3">Communication Skills Enhancement</h3>
                <p className="text-gray-600 mb-4">
                  Build stronger relationships through improved communication:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Practice assertive communication</li>
                  <li>• Develop conflict resolution skills</li>
                  <li>• Learn to give and receive feedback</li>
                  <li>• Enhance nonverbal communication awareness</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-6 py-4">
                <h3 className="text-xl font-bold mb-3">Behavioral Pattern Recognition</h3>
                <p className="text-gray-600 mb-4">
                  Identify and modify challenging behavioral patterns:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Monitor emotional triggers</li>
                  <li>• Track relationship patterns</li>
                  <li>• Develop alternative response strategies</li>
                  <li>• Practice mindful self-reflection</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <ArrowUp className="w-12 h-12 text-blue-500 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Measuring Progress</h2>
              <p className="text-gray-600">
                Track your personal development journey with concrete metrics and feedback:
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Keep a development journal</li>
                <li>• Set measurable goals</li>
                <li>• Seek regular feedback</li>
                <li>• Celebrate improvements</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <Lightbulb className="w-12 h-12 text-blue-500 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Long-term Growth</h2>
              <p className="text-gray-600">
                Maintain sustainable personal development through:
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Continuous learning</li>
                <li>• Regular self-assessment</li>
                <li>• Adapting strategies as needed</li>
                <li>• Building support networks</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}