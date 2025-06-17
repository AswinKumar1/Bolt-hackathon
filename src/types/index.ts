export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'educator' | 'admin';
  avatar?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  progress: number;
  instructor: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  image: string;
}

export interface Subscription {
  id: string;
  plan: 'Basic' | 'Premium' | 'Unlimited';
  price: number;
  features: string[];
  popular?: boolean;
}

export interface AIAgent {
  id: string;
  name: string;
  type: 'Tutor' | 'Pricing' | 'Retention' | 'Matching' | 'Revenue';
  performance: number;
  interactions: number;
}

export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export interface Analytics {
  revenue: number;
  churn: number;
  retention: number;
  growth: number;
}