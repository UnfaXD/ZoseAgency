// Global type definitions
export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

// Common UI types
export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Animation types
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  ease?: string;
}

// Theme types
export type ThemeMode = 'light' | 'dark' | 'system';

export interface ThemeConfig {
  mode: ThemeMode;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
  };
}

// API types
export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  success: boolean;
}
