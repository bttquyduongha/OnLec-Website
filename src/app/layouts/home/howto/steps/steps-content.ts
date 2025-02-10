// src/app/models/steps-content.ts
export interface StepContent {
  stepNumber: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
}

export interface StepsContent {
  steps: StepContent[];
  stepIndicators: number[];
}
