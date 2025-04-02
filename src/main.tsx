import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';

import App from './App';
import { TestResults } from './pages/TestResults';
import { TestQuestions } from './pages/TestQuestions';
import { TestResearch } from './pages/TestResearch';
import { PersonalityTraits } from './pages/PersonalityTraits';
import { TestInterpretation } from './pages/TestInterpretation';
import { RelationshipAdvice } from './pages/RelationshipAdvice';
import { ScientificMethodology } from './pages/ScientificMethodology';
import { PersonalityDevelopment } from './pages/PersonalityDevelopment';
import { FrequentlyAskedQuestions } from './pages/FrequentlyAskedQuestions';
import { PersonalityTypes } from './pages/PersonalityTypes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/difficult-person-test-results',
    element: <TestResults />,
  },
  {
    path: '/difficult-person-test-questions',
    element: <TestQuestions />,
  },
  {
    path: '/difficult-person-test-research',
    element: <TestResearch />,
  },
  {
    path: '/personality-traits-explained',
    element: <PersonalityTraits />,
  },
  {
    path: '/test-interpretation-guide',
    element: <TestInterpretation />,
  },
  {
    path: '/relationship-advice',
    element: <RelationshipAdvice />,
  },
  {
    path: '/scientific-methodology',
    element: <ScientificMethodology />,
  },
  {
    path: '/personality-development',
    element: <PersonalityDevelopment />,
  },
  {
    path: '/frequently-asked-questions',
    element: <FrequentlyAskedQuestions />,
  },
  {
    path: '/personality-types',
    element: <PersonalityTypes />,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);