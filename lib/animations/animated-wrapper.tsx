'use client';

import { motion } from 'framer-motion';
import type { HTMLMotionProps, Variants } from 'framer-motion';

import type { ReactNode } from 'react';

import { fadeInUp } from './variants';

interface AnimatedWrapperProps extends Omit<
  HTMLMotionProps<'div'>,
  'children'
> {
  children: ReactNode;
  variant?: Variants;
  delay?: number;
  duration?: number;
  className?: string;
}

export function AnimatedWrapper({
  children,
  variant = fadeInUp,
  delay = 0,
  duration,
  className,
  ...motionProps
}: AnimatedWrapperProps) {
  const customVariant: Variants = duration
    ? {
        ...variant,
        animate: {
          ...variant.animate,
          transition: {
            ...(variant.animate as any)?.transition,
            duration,
            delay,
          },
        },
      }
    : {
        ...variant,
        animate: {
          ...variant.animate,
          transition: {
            ...(variant.animate as any)?.transition,
            delay,
          },
        },
      };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={customVariant}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedWrapper;
