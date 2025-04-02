import React from 'react';
import { Navigation } from '../components/Navigation';
import { Brain, CheckCircle, AlertTriangle, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export function TestQuestions() {
  const commonQuestions = [
    {
      question: "What is a Difficult Person Test?",
      answer: "The Difficult Person Test is a scientifically validated personality assessment that measures seven key traits associated with challenging interpersonal behavior. Based on research by Sleep et al. (2020), it helps identify personality characteristics that might impact your relationships with others."
    },
    {
      question: "How accurate is the Difficult Person Test?",
      answer: "The Difficult Person Test is based on peer-reviewed academic research and validated psychological measures. While it provides reliable insights into personality traits, it should be used as a self-reflection tool rather than a clinical diagnostic instrument. The test's accuracy depends on honest responses and self-awareness."
    },
    {
      question: "What does the Difficult Person Test measure?",
      answer: "The test measures seven core personality traits: callousness (emotional sensitivity), grandiosity (self-importance), aggressiveness (confrontational tendency), suspicion (trust levels), manipulativeness (social influence), dominance (control in relationships), and risk-taking (adventure-seeking behavior)."
    },
    {
      question: "How long does the Difficult Person Test take?",
      answer: "The test typically takes 5-10 minutes to complete, consisting of 35 carefully designed questions that assess different aspects of your personality and interpersonal behavior patterns."
    },
    {
      question: "Can the Difficult Person Test help improve relationships?",
      answer: "Yes, the test provides valuable insights into your personality traits and behavior patterns that affect relationships. Understanding these characteristics can help you develop better communication strategies, improve emotional awareness, and build stronger connections with others."
    },
    {
      question: "Is the Difficult Person Test free?",
      answer: "Yes, our Difficult Person Test is completely free to take and provides comprehensive results and insights into your personality traits. You'll receive detailed analysis of your scores across all seven key characteristics."
    }
  ];

  const sampleQuestions = [
    {
      category: "Emotional Sensitivity",
      questions: [
        "How do you typically respond to others' emotional needs?",
        "Do you find it easy to understand others' feelings?",
        "How important is empathy in your relationships?"
      ]
    },
    {
      category: "Interpersonal Behavior",
      questions: [
        "How do you handle disagreements with others?",
        "What's your typical approach to group situations?",
        "How do you respond to criticism?"
      ]
    },
    {
      category: "Trust and Relationships",
      questions: [
        "How easily do you trust new people?",
        "What role does trust play in your relationships?",
        "How do you handle betrayal or disappointment?"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>What is a Difficult Person Test? Complete Guide & Sample Questions</title>
        <meta name="description" content="Learn everything about the Difficult Person Test - what it measures, how it works, and sample questions. Get answers to common questions about this personality assessment." />
        <meta name="keywords" content="difficult person test questions, personality test questions, relationship assessment, personality quiz, interpersonal behavior test" />
      </Helmet>

      <Navigation />
      
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            What is a Difficult Person Test?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive guide to understanding the personality assessment and its questions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <Brain className="w-12 h-12 text-blue-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Test</h2>
            <p className="text-gray-600">
              The Difficult Person Test is a research-based personality assessment that evaluates seven key traits affecting interpersonal relationships. Each question is carefully designed to measure specific aspects of your personality and behavior patterns.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <CheckCircle className="w-12 h-12 text-blue-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Scientific Validation</h2>
            <p className="text-gray-600">
              Based on peer-reviewed research published in the journal "Personality and Individual Differences" (
              <a 
                href="https://doi.org/10.1016/j.paid.2020.110171"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                Sleep et al., 2020
              </a>
              ), ensuring reliable and valid personality assessment.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {commonQuestions.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.question}</h3>
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sample Questions by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sampleQuestions.map((category, index) => (
              <div key={index} className="border rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-4">{category.category}</h3>
                <ul className="space-y-3">
                  {category.questions.map((question, qIndex) => (
                    <li key={qIndex} className="flex items-start gap-2">
                      <ArrowRight className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{question}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-amber-500 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Test-Taking Tips</h2>
              <ul className="space-y-3 text-gray-600">
                <li>• Answer questions honestly for the most accurate results</li>
                <li>• Consider your general behavior patterns, not specific incidents</li>
                <li>• Take your time to reflect on each question</li>
                <li>• Choose responses that best reflect your typical behavior</li>
                <li>• Complete all questions for comprehensive results</li>
              </ul>
            </div>
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