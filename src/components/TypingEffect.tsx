import { useState, useEffect } from 'react';

interface TypingEffectProps {
  text: string;
  speed?: number;
  delay?: number;
  loop?: boolean;
  className?: string;
}

export function TypingEffect({ 
  text, 
  speed = 50, 
  delay = 0, 
  loop = false,
  className = "" 
}: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // Initial delay before starting
    if (currentIndex === 0 && !isDeleting && delay > 0) {
      const delayTimeout = setTimeout(() => {
        setCurrentIndex(1);
      }, delay);
      return () => clearTimeout(delayTimeout);
    }

    if (!loop) {
      // Non-looping behavior - just type once
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, speed);
        return () => clearTimeout(timeout);
      }
    } else {
      // Looping behavior
      if (isPaused) {
        const pauseTimeout = setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, 2000); // Pause for 2 seconds before deleting
        return () => clearTimeout(pauseTimeout);
      }

      if (!isDeleting && currentIndex < text.length) {
        // Typing forward
        const timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, speed);
        return () => clearTimeout(timeout);
      } else if (!isDeleting && currentIndex === text.length) {
        // Finished typing, pause before deleting
        setIsPaused(true);
      } else if (isDeleting && currentIndex > 0) {
        // Deleting backward
        const timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        }, speed / 2); // Delete faster than typing
        return () => clearTimeout(timeout);
      } else if (isDeleting && currentIndex === 0) {
        // Finished deleting, start typing again
        setIsDeleting(false);
        const restartTimeout = setTimeout(() => {
          setCurrentIndex(1);
        }, 500);
        return () => clearTimeout(restartTimeout);
      }
    }
  }, [currentIndex, text, speed, delay, loop, isDeleting, isPaused]);

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
}