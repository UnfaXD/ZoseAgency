/**
 * Simple environment helpers for static brand page
 */
export const isDevelopment = process.env.NODE_ENV === 'development';
export const isProduction = process.env.NODE_ENV === 'production';

/**
 * App configuration
 */
export const config = {
  appName: 'Zose Agency',
  appUrl: isProduction ? 'https://your-domain.com' : 'http://localhost:3000',
};
