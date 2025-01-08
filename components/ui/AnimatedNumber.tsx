"use client";
import { useState, useEffect } from 'react';

interface AnimatedNumberProps {
  finalValue: number;
  className?: string;
  duration?: number;
  style?: React.CSSProperties;
}

const AnimatedNumber = ({ finalValue, className, duration = 2500, style }: AnimatedNumberProps) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      setCurrentValue(prev => {
        const increment = Math.floor(Math.random() * 1000);
        const newValue = prev + increment;
        
        if (newValue >= finalValue) {
          setIsAnimating(false);
          return finalValue;
        }
        return newValue;
      });
    }, 100); // Update every 100ms for smoother animation

    return () => clearInterval(interval);
  }, [finalValue, isAnimating]);

  return (
    <div className={className} style={{ letterSpacing: '0.25em', ...style }}>
      ${currentValue.toLocaleString()}
    </div>
  );
};

export default AnimatedNumber; 