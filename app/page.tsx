'use client';

import { Button } from '@/components';

import {
  AnimatedWrapper,
  fadeInUp,
  scaleIn,
  staggerChildren,
} from '@/lib/animations';
import { cn } from '@/lib/utils';

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
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        <AnimatedWrapper className="text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Production-Ready
            <span className="text-primary"> Next.js</span>
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground">
            A staff-level engineered foundation with zero tech debt, built for
            10+ year maintainability. Every dependency is justified, every
            configuration is optimized.
          </p>
        </AnimatedWrapper>

        <AnimatedWrapper
          variant={scaleIn}
          delay={0.2}
          className="mb-16 text-center"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg">
              View Documentation
            </Button>
          </div>
        </AnimatedWrapper>

        <AnimatedWrapper variant={staggerChildren} delay={0.4}>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map(feature => (
              <AnimatedWrapper
                key={feature.title}
                variant={fadeInUp}
                className={cn(
                  'rounded-lg border border-border bg-card p-6 text-card-foreground',
                  'transition-all hover:shadow-lg hover:shadow-primary/10'
                )}
              >
                <div className="mb-4 text-4xl">{feature.icon}</div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </AnimatedWrapper>
            ))}
          </div>
        </AnimatedWrapper>

        <AnimatedWrapper
          delay={0.8}
          className="mt-16 rounded-lg bg-muted p-8 text-center"
        >
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Ready to Build Something Amazing?
          </h2>
          <p className="mb-6 text-muted-foreground">
            This setup includes everything you need for a modern, scalable web
            application.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button>Start Building</Button>
            <Button variant="ghost">Run Tests</Button>
            <Button variant="outline">Analyze Bundle</Button>
          </div>
        </AnimatedWrapper>
      </main>
    </div>
  );
}
