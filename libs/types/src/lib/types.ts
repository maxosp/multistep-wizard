export type StepControlType = 'text' | 'checkbox' | 'radio' | 'number';

export interface StepQuestionOption {
  value: string;
  label: string;
}

export interface StepQuestion {
  id: number;
  type: StepControlType;
  title: string;
  options?: string[];
}

export interface Step {
  id: number;
  title: string;
  questions: StepQuestion[];
}
