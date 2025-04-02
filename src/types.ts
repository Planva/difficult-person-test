import { Language } from './data/translations';
import { TraitType } from './data/questions';

export type Answers = Record<number, number>;
export type Scores = Record<TraitType, number>;

export interface SavedProgress {
  answers: Answers;
  currentPage: number;
  language: Language;
}