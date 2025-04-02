import React from 'react';
import { Navigation } from '../components/Navigation';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const faqs = [
    {
      question: "What is the Difficult Person Test?",
      answer: "The Difficult Person Test is a scientifically-based personality assessment that measures seven key traits associated with difficult interpersonal behavior. Based on research by Chelsea Sleep and colleagues, it helps individuals understand aspects of their personality that might impact their relationships with others."
    },
    {
      question: "How accurate is the test?",
      answer: "While the test is based on peer-reviewed research and validated measures, it should be considered a self-reflection tool rather than a clinical diagnostic instrument. The accuracy depends on honest responses and self-awareness when answering questions."
    },
    {
      question: "How long does it take to complete?",
      answer: "The test typically takes 5-10 minutes to complete, consisting of 35 questions that assess seven different personality traits."
    },
    {
      question: "What traits does the test measure?",
      answer: "The test measures seven key traits: callousness, grandiosity, aggressiveness, suspicion, manipulativeness, dominance, and risk-taking. Each trait provides insight into different aspects of interpersonal behavior."
    },
    {
      question: "Is my data private?",
      answer: "Yes, your privacy is protected. The test processes all data locally in your browser, and we don't store or share any of your responses or results."
    },
    {
      question: "Can I retake the test?",
      answer: "Yes, you can retake the test as many times as you'd like. However, for the most accurate results, we recommend waiting some time between attempts and always answering honestly."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about the Difficult Person Test
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
      </main>
    </div>
  );
}