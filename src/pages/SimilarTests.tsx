import React from 'react';
import { Navigation } from '../components/Navigation';
import { ExternalLink } from 'lucide-react';

export function SimilarTests() {
  const tests = [
    {
      name: "Big Five Personality Test",
      description: "Measures the five core personality traits: Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism.",
      link: "https://www.truity.com/test/big-five-personality-test"
    },
    {
      name: "Dark Triad Test",
      description: "Assesses Machiavellianism, Narcissism, and Psychopathy - traits that can influence interpersonal relationships.",
      link: "https://openpsychometrics.org/tests/SD3/"
    },
    {
      name: "HEXACO Personality Inventory",
      description: "Evaluates six personality dimensions including Honesty-Humility, which is particularly relevant to interpersonal behavior.",
      link: "http://hexaco.org/hexaco-online"
    },
    {
      name: "Interpersonal Circumplex",
      description: "Maps interpersonal behaviors and traits along dimensions of agency and communion.",
      link: "https://www.idrlabs.com/interpersonal-circumplex/test.php"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Similar Personality Tests
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore other scientifically-based personality assessments that complement the Difficult Person Test
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tests.map((test, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{test.name}</h2>
              <p className="text-gray-600 mb-6">{test.description}</p>
              <a
                href={test.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                Take the Test
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Take Multiple Tests?</h2>
          <p className="text-gray-600 mb-6">
            Different personality tests measure distinct aspects of human behavior and character.
            Taking multiple assessments can provide a more comprehensive understanding of your
            personality and interpersonal style.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Broader Perspective</h3>
              <p className="text-gray-600">
                Each test offers unique insights into different aspects of your personality.
              </p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Cross-Validation</h3>
              <p className="text-gray-600">
                Multiple tests can help confirm patterns and trends in your personality traits.
              </p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Deep Understanding</h3>
              <p className="text-gray-600">
                Combining results from different tests provides a more nuanced view of your character.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}