import React from 'react';
import { Navigation } from '../components/Navigation';
import { ChevronDown } from 'lucide-react';
import { Footer } from '../components/Footer';
import { Helmet } from 'react-helmet-async';

export function FrequentlyAskedQuestions() {
  const faqs = [
    {
      question: "What does the Difficult Person Test measure?",
      answer: "The Difficult Person Test measures seven key personality traits: callousness, grandiosity, aggressiveness, suspicion, manipulativeness, dominance, and risk-taking. These traits are based on scientific research and help understand interpersonal behavior patterns."
    },
    {
      question: "How accurate is the Difficult Person Test?",
      answer: "The test is based on peer-reviewed research published in academic journals. While it provides valuable insights, it should be used as a self-reflection tool rather than a clinical diagnostic instrument. The accuracy depends on honest responses and self-awareness."
    },
    {
      question: "Can the Difficult Person Test predict relationship success?",
      answer: "While the test can identify potential challenges in relationships based on personality traits, it's not a definitive predictor of relationship success. It's best used as a tool for self-awareness and personal growth."
    },
    {
      question: "How often should I take the Difficult Person Test?",
      answer: "You can retake the test every few months to track changes in your personality traits. However, significant changes typically occur over longer periods, so annual retesting is often sufficient for monitoring personal growth."
    },
    {
      question: "What do high scores mean in the Difficult Person Test?",
      answer: "High scores in specific traits indicate stronger expressions of those characteristics. For example, high callousness might suggest reduced empathy, while high dominance could indicate strong leadership tendencies. These aren't necessarily negative but may impact relationships differently."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Helmet>
        <title>Difficult Person Test FAQ - Common Questions Answered</title>
        <meta name="description" content="Find answers to frequently asked questions about the Difficult Person Test. Learn about test accuracy, scoring, interpretation, and how to use results for personal growth." />
      </Helmet>
      
      <Navigation />
      
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions About the Difficult Person Test
            </h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about personality assessment and interpretation
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h2 className="text-lg font-semibold text-gray-900">{faq.question}</h2>
                    <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}