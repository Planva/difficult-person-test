import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { AlertTriangle, BookOpen, Brain, ChevronRight, FileText, Share2 } from 'lucide-react';
import { questions, traits, TraitType } from './data/questions';
import { traitDescriptions } from './data/traitDescriptions';
import { Language, translations } from './data/translations';
import { LanguageSelector } from './components/LanguageSelector';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { saveProgress, loadProgress, clearProgress } from './utils/storage';
import toast, { Toaster } from 'react-hot-toast';
import { generateShareImage } from './utils/shareImage';
import { AdviceSection } from './components/AdviceSection';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import type { Answers, Scores } from './types';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

function App() {
  const [answers, setAnswers] = useState<Answers>({});
  const [scores, setScores] = useState<Scores | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedTrait, setSelectedTrait] = useState<TraitType | null>(null);
  const [showTest, setShowTest] = useState(false);
  const [language, setLanguage] = useState<Language>('en');
  const [showResumeModal, setShowResumeModal] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);

  const t = translations[language];
  const questionsPerPage = 5;
  const totalPages = Math.ceil(questions.length / questionsPerPage);

  useEffect(() => {
    const savedProgress = loadProgress();
    if (savedProgress) {
      setShowResumeModal(true);
    }
  }, []);

  useEffect(() => {
    if (Object.keys(answers).length > 0 && !scores) {
      saveProgress({
        answers,
        currentPage,
        language
      });
    }
  }, [answers, currentPage, language, scores]);

  const handleAnswer = (questionId: number, value: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleStartNew = () => {
    clearProgress();
    setAnswers({});
    setCurrentPage(0);
    setShowResumeModal(false);
    setShowTest(true);
  };

  const handleResume = () => {
    const savedProgress = loadProgress();
    if (savedProgress) {
      setAnswers(savedProgress.answers);
      setCurrentPage(savedProgress.currentPage);
      setLanguage(savedProgress.language as Language);
      setShowResumeModal(false);
      setShowTest(true);
    }
  };

  const calculateScores = () => {
    const traitScores = {} as Scores;
    
    Object.keys(traits).forEach(trait => {
      traitScores[trait as TraitType] = 0;
    });
    
    questions.forEach(question => {
      if (answers[question.id]) {
        traitScores[question.trait] += answers[question.id];
      }
    });
    
    Object.keys(traitScores).forEach(trait => {
      traitScores[trait as TraitType] = Number((traitScores[trait as TraitType] / 5).toFixed(2));
    });
    
    setScores(traitScores);
    setSelectedTrait('callousness');
  };

  const generateShareableText = () => {
    if (!scores) return '';

    const mainTrait = Object.entries(scores)
      .reduce((a, b) => a[1] > b[1] ? a : b);
    
    return `🧠 My top trait: ${traits[mainTrait[0] as TraitType][language]} (${mainTrait[1]}/5)\nTest yourself at www.difficult-person-test.com`;
  };

  const handleShare = async () => {
    if (!scores) return;
  
    try {
      // 生成图片
      const image = await generateShareImage(scores, traits, language, chartRef.current);
      if (!image) {
        toast.error(t.ui.imageError);
        return;
      }
  
      // 确保 image 是 Data URL
      if (!image.startsWith('data:image/')) {
        console.error('Generated image is not a Data URL:', image);
        toast.error(t.ui.imageError);
        return;
      }
  
      // 直接将 Data URL 转换为 Blob
      const base64String = image.split(',')[1]; // 提取 Base64 部分
      const byteCharacters = atob(base64String);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'image/png' });
      const file = new File([blob], 'personality-test-results.png', { type: 'image/png' });
  
      // 尝试使用 Web Share API 分享
      if (navigator.share && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: t.ui.title,
          text: generateShareableText(),
        });
        toast.success(t.ui.shared);
      } else {
        // 否则触发下载
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'personality-test-results.png';
        link.click();
        URL.revokeObjectURL(url);
        toast.success(t.ui.downloaded);
      }
    } catch (err) {
      console.error('Error sharing:', err);
      toast.error(t.ui.shareError);
    }
  };

  const isComplete = Object.keys(answers).length === questions.length;

  const currentQuestions = questions.slice(
    currentPage * questionsPerPage,
    (currentPage + 1) * questionsPerPage
  );

  const renderLikertScale = (questionId: number) => {
    const likertOptions = [
      { value: 1, label: t.likert.stronglyDisagree, desc: t.likert.stronglyDisagreeDesc },
      { value: 2, label: t.likert.disagree, desc: t.likert.disagreeDesc },
      { value: 3, label: t.likert.neutral, desc: t.likert.neutralDesc },
      { value: 4, label: t.likert.agree, desc: t.likert.agreeDesc },
      { value: 5, label: t.likert.strongAgree, desc: t.likert.strongAgreeDesc },
    ];

    return (
      <div className="mt-4">
        <div className="flex justify-between text-xs sm:text-sm text-gray-600 mb-2">
          <span>{t.likert.stronglyDisagree}</span>
          <span>{t.likert.strongAgree}</span>
        </div>
        <div className="grid grid-cols-5 gap-1 sm:gap-2">
          {likertOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(questionId, option.value)}
              className={`relative group p-3 sm:p-4 rounded-lg text-center transition-all ${
                answers[questionId] === option.value
                  ? 'bg-blue-500 text-white scale-105'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
              title={option.label}
            >
              <span className="text-lg sm:text-xl font-medium">{option.value}</span>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                {option.desc}
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderResults = () => {
    if (!scores) return null;

    const chartData = {
      labels: Object.values(traits).map(trait => trait[language]),
      datasets: [
        {
          label: t.ui.yourResults,
          data: Object.values(scores),
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          borderColor: 'rgb(59, 130, 246)',
          borderWidth: 2,
          pointBackgroundColor: 'rgb(59, 130, 246)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(59, 130, 246)'
        }
      ]
    };

    const chartOptions = {
      scales: {
        r: {
          angleLines: {
            display: true
          },
          suggestedMin: 0,
          suggestedMax: 5,
          ticks: {
            stepSize: 1,
            font: {
              size: window.innerWidth < 640 ? 8 : 12
            }
          },
          pointLabels: {
            font: {
              size: window.innerWidth < 640 ? 10 : 14
            }
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    };

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold">{t.ui.yourResults}</h2>
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm sm:text-base"
          >
            <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>{t.ui.share}</span>
          </button>
        </div>
        
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
          <div ref={chartRef} className="aspect-square max-w-xl mx-auto">
            <Radar data={chartData} options={chartOptions} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.entries(scores).map(([trait, score]) => (
            <div
              key={trait}
              onClick={() => setSelectedTrait(trait as TraitType)}
              className={`bg-white p-4 rounded-lg shadow cursor-pointer transition-colors ${
                selectedTrait === trait ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-sm sm:text-base">{traits[trait as TraitType][language]}</span>
                <span className="text-base sm:text-lg">{score}/5</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all"
                  style={{ width: `${(score / 5) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {selectedTrait && (
          <div className="space-y-4">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold mb-2">
                {traitDescriptions[language][selectedTrait].title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4">
                {traitDescriptions[language][selectedTrait].description}
              </p>
              <p className="text-gray-800 font-medium text-sm sm:text-base">
                {traitDescriptions[language][selectedTrait].interpretation(scores[selectedTrait])}
              </p>
            </div>

            <AdviceSection
              trait={selectedTrait}
              score={scores[selectedTrait]}
              language={language}
            />
          </div>
        )}

        <button
          onClick={() => {
            setScores(null);
            setAnswers({});
            setCurrentPage(0);
            setSelectedTrait(null);
            setShowTest(false);
          }}
          className="w-full px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm sm:text-base"
        >
          {t.ui.takeAgain}
        </button>
      </div>
    );
  };

  const renderLandingPage = () => (
    <div className="space-y-6 sm:space-y-8">
      <div className="text-center">
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
          {t.ui.title}
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          {t.ui.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-center">
          <div className="flex justify-center mb-3 sm:mb-4">
            <Brain className="w-8 h-8 sm:w-12 sm:h-12 text-blue-500" />
          </div>
          <h3 className="text-base sm:text-lg font-semibold mb-2">{t.ui.scientificBasis}</h3>
          <p className="text-sm sm:text-base text-gray-600">{t.ui.scientificBasisDesc}</p>
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-center">
          <div className="flex justify-center mb-3 sm:mb-4">
            <FileText className="w-8 h-8 sm:w-12 sm:h-12 text-blue-500" />
          </div>
          <h3 className="text-base sm:text-lg font-semibold mb-2">{t.ui.comprehensive}</h3>
          <p className="text-sm sm:text-base text-gray-600">{t.ui.comprehensiveDesc}</p>
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-center">
          <div className="flex justify-center mb-3 sm:mb-4">
            <BookOpen className="w-8 h-8 sm:w-12 sm:h-12 text-blue-500" />
          </div>
          <h3 className="text-base sm:text-lg font-semibold mb-2">{t.ui.educational}</h3>
          <p className="text-sm sm:text-base text-gray-600">{t.ui.educationalDesc}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{t.ui.aboutResearch}</h2>
        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{t.ui.aboutResearchDesc}</p>
        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{t.ui.researchContext}</p>

        <h3 className="text-lg sm:text-xl font-semibold mb-3">{t.ui.sevenTraits}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
          {Object.entries(traitDescriptions[language]).map(([key, trait]) => (
            <div key={key} className="bg-gray-50 p-3 sm:p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-sm sm:text-base">{trait.title}</h4>
              <p className="text-gray-600 text-xs sm:text-sm">{trait.description}</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => setShowTest(true)}
          className="w-full flex items-center justify-center px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm sm:text-base"
        >
          <span className="mr-2">{t.ui.startTest}</span>
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Helmet>
        <title>Difficult Person Test - Free Personality Assessment Based on Research</title>
        <meta name="description" content="Take the free Difficult Person Test to discover your personality traits. Based on scientific research, this test measures 7 key characteristics that influence relationships." />
        <meta name="keywords" content="difficult person test, personality test, relationship assessment, personality traits, psychological test" />
        
        <meta property="og:title" content="Difficult Person Test - Free Personality Assessment" />
        <meta property="og:description" content="Discover your personality traits with this research-based assessment tool" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.difficult-person-test.com" />
        <meta property="og:image" content="https://www.difficult-person-test.com/og-image.jpg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Difficult Person Test - Free Personality Assessment" />
        <meta name="twitter:description" content="Discover your personality traits with this research-based assessment tool" />
        <meta name="twitter:image" content="https://www.difficult-person-test.com/og-image.jpg" />
        
        <link rel="canonical" href="https://www.difficult-person-test.com" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Difficult Person Test" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <Navigation />
      <div className="flex-grow py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <Toaster position="top-center" />
        <LanguageSelector currentLanguage={language} onLanguageChange={setLanguage} />
        
        {showResumeModal && (
          <ResumeModal
            language={language}
            onResume={handleResume}
            onStartNew={handleStartNew}
            onClose={() => setShowResumeModal(false)}
          />
        )}

        <div className="max-w-3xl mx-auto">
          {!showTest ? (
            renderLandingPage()
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
              <div className="text-center mb-6 sm:mb-8">
                <h1 className="text-xl sm:text-3xl font-bold text-gray-900">
                  {t.ui.title}
                </h1>
                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  {t.ui.subtitle}
                </p>
              </div>

              {!scores ? (
                <>
                  <div className="space-y-4 sm:space-y-6">
                    {currentQuestions.map((question) => (
                      <div key={question.id} className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                        <p className="font-medium text-gray-900 text-sm sm:text-base">
                          {question.id}. {question.text[language]}
                        </p>
                        {renderLikertScale(question.id)}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 sm:mt-8 flex justify-between">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
                      disabled={currentPage === 0}
                      className="px-3 py-2 sm:px-4 sm:py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 text-sm sm:text-base"
                    >
                      {t.ui.previous}
                    </button>
                    
                    {currentPage === totalPages - 1 ? (
                      <button
                        onClick={calculateScores}
                        disabled={!isComplete}
                        className="px-3 py-2 sm:px-4 sm:py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 text-sm sm:text-base"
                      >
                        {t.ui.viewResults}
                      </button>
                    ) : (
                      <button
                        onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
                        className="px-3 py-2 sm:px-4 sm:py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm sm:text-base"
                      >
                        {t.ui.next}
                      </button>
                    )}
                  </div>

                  {!isComplete && (
                    <div className="mt-4 flex items-center justify-center text-amber-600 gap-2 text-sm sm:text-base">
                      <AlertTriangle size={16} className="sm:w-5 sm:h-5" />
                      <span>{t.ui.pleaseAnswer}</span>
                    </div>
                  )}

                  <div className="mt-4 text-center text-gray-500 text-sm sm:text-base">
                    {t.ui.page} {currentPage + 1} {t.ui.of} {totalPages}
                  </div>
                </>
              ) : (
                renderResults()
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;