import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'left' | 'right' | 'up';
}

export function AnimatedSection({ children, delay = 0, className = '', direction = 'up' }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const getInitialPosition = () => {
    switch (direction) {
      case 'left':
        return { opacity: 0, x: -100 };
      case 'right':
        return { opacity: 0, x: 100 };
      case 'up':
      default:
        return { opacity: 0, y: 50 };
    }
  };

  const getAnimatePosition = () => {
    switch (direction) {
      case 'left':
      case 'right':
        return { opacity: 1, x: 0 };
      case 'up':
      default:
        return { opacity: 1, y: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={isInView ? getAnimatePosition() : getInitialPosition()}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}