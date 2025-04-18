import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

export function Footer() {
  const friendlyLinks = [
    {
      name: "TAT Test",
      url: "https://www.tat-test.com"
    },
    {
      name: "Sending Prayers",
      url: "https://www.sending-prayers.com"
    },
    {
      name: "Thumbnail Tester",
      url: "https://www.thumbnail-tester.com"
    },
    {
      name: "Smart IQ Test",
      url: "https://www.smarttest.cc/"
    },
    {
      name: "Calculator App",
      url: "https://www.calculator-app.org"
    },
    {
      name: "Future Value Calculatorp",
      url: "https://www.future-value-calculator.com/"
    }
  ];

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-500 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/difficult-person-test-results" className="text-gray-500 hover:text-gray-900">
                  Test Results
                </Link>
              </li>
              <li>
                <Link to="/difficult-person-test-questions" className="text-gray-500 hover:text-gray-900">
                  Test Questions
                </Link>
              </li>
              <li>
                <Link to="/difficult-person-test-research" className="text-gray-500 hover:text-gray-900">
                  Research
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">
              Friendly Links
            </h3>
            <ul className="space-y-3">
              {friendlyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-500 hover:text-gray-900"
                  >
                    {link.name}
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">
              About
            </h3>
            <p className="text-gray-500">
              The Difficult Person Test is based on peer-reviewed research in personality psychology.
              Take our scientifically validated test to learn about your personality traits.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Difficult Person Test. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}