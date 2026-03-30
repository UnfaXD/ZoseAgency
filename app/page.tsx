'use client';

import { Button } from '@/components';

const features = [
  {
    title: 'TypeScript Strict Mode',
    description:
      'Complete type safety with the strictest TypeScript configuration',
    icon: '🛡️',
  },
  {
    title: 'Framer Motion',
    description: 'Production-ready animations with tree-shaking optimization',
    icon: '✨',
  },
  {
    title: 'Tailwind CSS v4',
    description:
      'Modern design system with semantic color tokens and dark mode',
    icon: '🎨',
  },
  {
    title: 'ESLint & Prettier',
    description:
      'Automated code formatting with import sorting and unused import removal',
    icon: '⚡',
  },
  {
    title: 'Husky & lint-staged',
    description:
      'Git hooks for pre-commit validation and pre-push build verification',
    icon: '🔒',
  },
  {
    title: 'Vitest Testing',
    description:
      'Lightning-fast testing with React Testing Library integration',
    icon: '🧪',
  },
];

export default function HomePage() {
  return (
    <main>
      <h1 className="text-4xl font-display font-bold">Hello World</h1>
      <Button>Click me</Button>
    </main>
  );
}
