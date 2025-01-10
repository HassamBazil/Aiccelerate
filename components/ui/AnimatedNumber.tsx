"use client";
import { useState, useEffect } from 'react';

interface AnimatedNumberProps {
  finalValue: number;
  className?: string;
  duration?: number;
}

const AnimatedNumber = ({ finalValue, className, duration = 2500 }: AnimatedNumberProps) => {
  const [currentValue, setCurrentValue] = useState(13800000000);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      setCurrentValue(prev => {
        const increment = Math.floor(Math.random() * 1000);
        const newValue = prev + increment;
        
        if (newValue >= finalValue + 13800000000) {
          setIsAnimating(false);
          return finalValue + 13800000000;
        }
        return newValue;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [finalValue, isAnimating]);

  return (
    <div className={className} style={{ letterSpacing: '0.25em', textAlign: 'left', width: 'fit-content' }}>
      ${currentValue.toLocaleString()}
    </div>
  );
};

export default AnimatedNumber; 