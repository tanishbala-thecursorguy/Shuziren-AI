import { useRef, useEffect, useState } from 'react';
import { useInView } from 'motion/react';

interface StatCardProps {
  number: string;
  label: string;
}

export function StatCard({ number, label }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [count, setCount] = useState(0);

  const getNumericValue = (str: string) => {
    const match = str.match(/(\d+)(k\+|%)?/i);
    if (match) {
      const num = parseInt(match[1]);
      const suffix = match[2] || '';
      return { value: num, suffix };
    }
    return { value: 0, suffix: '' };
  };

  const { value: targetValue, suffix } = getNumericValue(number);

  useEffect(() => {
    if (isInView) {
      setCount(0);
      const duration = 2000;
      const steps = 60;
      const increment = targetValue / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= targetValue) {
          setCount(targetValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    } else {
      setCount(0);
    }
  }, [isInView, targetValue]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-white mb-4 italic" style={{ fontSize: '64px', fontWeight: 'bold' }}>
        {count}{suffix}
      </div>
      <p className="text-gray-400" style={{ fontSize: '15px' }}>{label}</p>
    </div>
  );
}