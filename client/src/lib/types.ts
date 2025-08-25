export type Theme = 'light' | 'dark' | 'system';

export interface WelcomeData {
  author: string;
  template: string;
  stack: {
    frontend: {
      technologies: string[];
      setup: {
        pages: string;
        components: string;
        pageComponents: string;
        routing: string;
      };
    };
    backend: {
      technologies: string[];
      setup: {
        routes: string;
        registration: string;
        structure: string;
      };
    };
  };
  timestamp: string;
}

export interface CardProps {
  title: string;
  icon: string;
  technologies: string[];
  techColor: string;
  setup: Record<string, string>;
  bulletColor: string;
}

export interface ErrorStateProps {
  error: string;
}

export interface WelcomeFooterProps {
  timestamp: string;
}

export interface WelcomeHeaderProps {
  author: string;
  template: string;
}

