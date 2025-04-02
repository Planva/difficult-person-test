import React from 'react';
import { Navigation } from '../components/Navigation';
import { Brain, Users, Shield, Target } from 'lucide-react';
import { Footer } from '../components/Footer';
import { Helmet } from 'react-helmet-async';

export function PersonalityTypes() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Helmet>
        <title>Personality Types in the Difficult Person Test - Complete Guide</title>
        <meta name="description" content="Explore different personality types identified by the Difficult Person Test. Learn about trait combinations, behavioral patterns, and their impact on relationships." />
      </Helmet>
      
      <Navigation />
      
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Understanding Personality Types in the Difficult Person Test
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how different combinations of traits create unique personality patterns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <Brain className="w-12 h-12 text-blue-500 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Core Personality Patterns</h2>
              <p className="text-gray-600">
                The Difficult Person Test identifies distinct personality patterns through
                combinations of seven key traits. Understanding these patterns helps predict
                behavior and improve relationships.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <Users className="w-12 h-12 text-blue-500 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Interpersonal Dynamics</h2>
              <p className="text-gray-600">
                Different personality types interact uniquely in relationships. Learn how
                various trait combinations influence social interactions and relationship
                outcomes.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Personality Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-blue-500 pl-6 py-4">
                <h3 className="text-xl font-bold mb-3">The Assertive Leader</h3>
                <p className="text-gray-600">
                  High scores in dominance and grandiosity, moderate aggressiveness.
                  Natural leaders who may need to balance confidence with collaboration.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6 py-4">
                <h3 className="text-xl font-bold mb-3">The Strategic Influencer</h3>
                <p className="text-gray-600">
                  High manipulativeness and suspicion, moderate dominance.
                  Skilled at achieving goals but may struggle with trust and authenticity.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6 py-4">
                <h3 className="text-xl font-bold mb-3">The Independent Risk-Taker</h3>
                <p className="text-gray-600">
                  High risk-taking and low suspicion.
                  Adventure-seekers who benefit from calculated decision-making.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6 py-4">
                <h3 className="text-xl font-bold mb-3">The Cautious Analyzer</h3>
                <p className="text-gray-600">
                  High suspicion and low risk-taking.
                  Thoughtful decision-makers who may need to build more trust.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <Shield className="w-12 h-12 text-blue-500 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Type Development</h2>
              <p className="text-gray-600">
                Personality types aren't fixed - they can evolve through conscious effort
                and personal growth. Learn strategies for developing positive traits while
                managing challenging ones.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <Target className="w-12 h-12 text-blue-500 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Relationship Compatibility</h2>
              <p className="text-gray-600">
                Different personality types may have varying levels of natural compatibility.
                Understanding these dynamics helps in building stronger relationships and
                managing potential conflicts.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}