import React from 'react';
import { Navigation } from '../components/Navigation';
import { Brain, ArrowRight, FileText, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
export function TestResults() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Difficult Person Test Results - Understand Your Personality Score</title>
        <meta name="description" content="Get detailed insights into your Difficult Person Test results. Learn what your scores mean across 7 key personality traits and how they impact your relationships." />
        <meta name="keywords" content="difficult person test results, personality test scores, personality trait analysis, relationship compatibility test, personality assessment interpretation" />
      </Helmet>
      
      <Navigation />
      
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Understanding Your Difficult Person Test Results
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn how to interpret your personality test scores and what they mean for your relationships
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-600">
            <BookOpen className="w-4 h-4" />
            <span>Based on research by</span>
            <a 
              href="https://doi.org/10.1016/j.paid.2020.110171"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Sleep et al. (2020)
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <Brain className="w-12 h-12 text-blue-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Personality Test Score Interpretation</h2>
            <p className="text-gray-600 mb-4">
              Your Difficult Person Test results are presented on a scale of 1-5 for each trait, providing detailed insights into your personality:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>1-2: Low expression of the trait - indicates balanced interpersonal behavior</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>3: Moderate expression - shows typical personality characteristics</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>4-5: High expression - suggests strong personality tendencies</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <FileText className="w-12 h-12 text-blue-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Your Test Results</h2>
            <p className="text-gray-600 mb-4">
              Your Difficult Person Test scores reveal important insights about your interpersonal behavior patterns and relationship dynamics. Higher scores indicate stronger expressions of specific personality traits.
            </p>
            <p className="text-gray-600">
              These results serve as valuable tools for self-reflection and personal growth, helping you understand your impact on relationships and identify areas for improvement.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Personality Traits Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold">Emotional Sensitivity (Callousness)</h3>
                <p className="text-gray-600">Measures empathy levels and emotional responsiveness in relationships</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold">Self-Perception (Grandiosity)</h3>
                <p className="text-gray-600">Evaluates self-image and its impact on interpersonal dynamics</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold">Conflict Approach (Aggressiveness)</h3>
                <p className="text-gray-600">Assesses behavioral tendencies in challenging situations</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold">Trust Levels (Suspicion)</h3>
                <p className="text-gray-600">Examines attitudes toward others' intentions and reliability</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold">Social Influence (Manipulativeness)</h3>
                <p className="text-gray-600">Measures interpersonal influence strategies and authenticity</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold">Leadership Style (Dominance)</h3>
                <p className="text-gray-600">Evaluates control preferences in social interactions</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold">Adventure Seeking (Risk-Taking)</h3>
                <p className="text-gray-600">Analyzes comfort with uncertainty and challenging situations</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Relationship Impact Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Personal Relationships</h3>
              <p className="text-gray-600">
                Understand how your personality traits influence close relationships and emotional connections with others.
              </p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Professional Dynamics</h3>
              <p className="text-gray-600">
                Learn how your traits affect workplace relationships and career development opportunities.
              </p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Social Interactions</h3>
              <p className="text-gray-600">
                Discover patterns in your social behavior and ways to enhance your interpersonal effectiveness.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Research Background</h2>
          <p className="text-gray-600 mb-4">
            The Difficult Person Test is based on comprehensive research published in the journal "Personality and Individual Differences" (
            <a 
              href="https://doi.org/10.1016/j.paid.2020.110171"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Sleep et al., 2020
            </a>
            ). Additional validation studies have confirmed the reliability of these personality traits in predicting interpersonal behavior patterns.
          </p>
          <p className="text-gray-600">
            Related research by 
            <a 
              href="https://doi.org/10.1037/per0000401"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 mx-1"
            >
              Miller et al. (2019)
            </a>
            and
            <a 
              href="https://doi.org/10.1016/j.paid.2019.109539"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 mx-1"
            >
              Zeigler-Hill & Hobbs (2019)
            </a>
            has further established the importance of these personality dimensions in understanding interpersonal difficulties.
          </p>
        </div>

        <div className="text-center">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Take the Personality Test
          </Link>
        </div>
      </main>
    </div>
  );
}