import React from 'react';
import { Navigation } from '../components/Navigation';
import { Brain, Users, ArrowRight } from 'lucide-react';
import { Footer } from '../components/Footer';
import { Helmet } from 'react-helmet-async';

export function PersonalityTraits() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Helmet>
        <title>Personality Traits Assessment - Complete Guide to Understanding Your Character</title>
        <meta name="description" content="Explore the 7 key personality traits measured by the Difficult Person Test. Learn how these traits shape your relationships and behavior patterns." />
        <meta name="keywords" content="personality traits test, character assessment, difficult person traits, personality analysis, relationship compatibility" />
      </Helmet>

      <Navigation />
      
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Understanding Key Personality Traits in Relationship Dynamics
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive analysis of personality characteristics and their impact on relationships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <Brain className="w-12 h-12 text-blue-500 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Essential Personality Characteristics</h2>
              <p className="text-gray-600">
                The personality assessment measures seven fundamental traits that shape your interpersonal relationships and social interactions. Each trait represents a distinct aspect of character that influences how you connect with others.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <Users className="w-12 h-12 text-blue-500 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Relationship Compatibility Factors</h2>
              <p className="text-gray-600">
                Understanding these personality traits helps improve relationships by identifying potential areas of harmony and conflict. Learn how your unique trait combination affects your compatibility with others.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Trait Analysis</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6 py-4">
                <h3 className="text-xl font-bold mb-3">Emotional Intelligence and Empathy</h3>
                <p className="text-gray-600 mb-4">
                  Explore how emotional sensitivity influences your connections with others and shapes relationship dynamics.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span>Impact on emotional bonds and understanding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span>Role in building meaningful relationships</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-6 py-4">
                <h3 className="text-xl font-bold mb-3">Self-Awareness and Personal Growth</h3>
                <p className="text-gray-600 mb-4">
                  Understand how self-perception and personal development influence your relationship success.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span>Personal growth through self-understanding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span>Building authentic relationships</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-6 py-4">
                <h3 className="text-xl font-bold mb-3">Interpersonal Communication Styles</h3>
                <p className="text-gray-600 mb-4">
                  Discover how your communication patterns affect relationship quality and understanding.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span>Effective communication strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span>Resolving conflicts constructively</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Relationship Enhancement Strategies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Trust Building</h3>
                <p className="text-gray-600">
                  Learn techniques for developing and maintaining trust in relationships through personality awareness.
                </p>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Emotional Connection</h3>
                <p className="text-gray-600">
                  Discover ways to deepen emotional bonds and create lasting connections with others.
                </p>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Conflict Resolution</h3>
                <p className="text-gray-600">
                  Master strategies for handling disagreements and maintaining healthy relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}