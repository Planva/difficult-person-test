import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain } from 'lucide-react';

export function Navigation() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <Brain className="h-8 w-8 text-blue-500" />
              <span className="ml-2 font-bold text-gray-900">Difficult Person Test</span>
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:space-x-4">
            <Link
              to="/difficult-person-test-results"
              className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/difficult-person-test-results')
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Results
            </Link>
            <Link
              to="/difficult-person-test-questions"
              className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/difficult-person-test-questions')
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Questions
            </Link>
            <Link
              to="/difficult-person-test-research"
              className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/difficult-person-test-research')
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Research
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}