import { Answers } from '../types';

const STORAGE_KEY = 'quiz_progress';

interface QuizProgress {
  answers: Answers;
  currentPage: number;
  language: string;
  timestamp: number;
}

export const saveProgress = (progress: Omit<QuizProgress, 'timestamp'>) => {
  try {
    const progressWithTimestamp = {
      ...progress,
      timestamp: Date.now()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progressWithTimestamp));
  } catch (error) {
    console.error('Failed to save progress:', error);
  }
};

export const loadProgress = (): QuizProgress | null => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return null;

    const progress = JSON.parse(saved) as QuizProgress;
    
    // Clear progress if it's older than 24 hours
    if (Date.now() - progress.timestamp > 24 * 60 * 60 * 1000) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }

    return progress;
  } catch (error) {
    console.error('Failed to load progress:', error);
    return null;
  }
};

export const clearProgress = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear progress:', error);
  }
};