import React, { useEffect, useRef, useState } from "react";

interface TextScrambleProps {
  textParts: string[]; // Split text into parts (e.g., ["ACCELERATING", "CRYPTO X AI"])
  hoverTextParts?: string[]; // Split hover text into parts
}

const TextScramble: React.FC<TextScrambleProps> = ({ textParts, hoverTextParts }) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [displayedParts, setDisplayedParts] = useState<string[]>(textParts); // Static rendering
  const chars = "!<>-_\\/[]{}—=+*^?#________";
  const queueRef = useRef<
    { from: string; to: string; start: number; end: number; char?: string }[][]
  >([]);
  const frameRef = useRef<number>(0);
  const animationRef = useRef<number | null>(null);
  const isAnimatingRef = useRef<boolean>(false);

  const scrambleText = (targetParts: string[]) => {
    if (isAnimatingRef.current) return; // Prevent multiple animations
    isAnimatingRef.current = true;

    const newQueue: typeof queueRef.current = targetParts.map((target, i) => {
      const oldText = displayedParts[i] || "";
      const length = Math.max(oldText.length, target.length);
      const queue = [];

      for (let j = 0; j < length; j++) {
        const from = oldText[j] || "";
        const to = target[j] || "";
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        queue.push({ from, to, start, end });
      }

      return queue;
    });

    queueRef.current = newQueue;
    frameRef.current = 0;

    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(updateText);
  };

  const updateText = () => {
    let complete = 0;

    const newDisplayedParts = queueRef.current.map((queue) => {
      let output = "";
      let localComplete = 0;

      for (const q of queue) {
        const { from, to, start, end } = q;

        if (frameRef.current >= end) {
          output += to;
          localComplete++;
        } else if (frameRef.current >= start) {
          const randomChar = chars[Math.floor(Math.random() * chars.length)];
          output += randomChar;
        } else {
          output += from;
        }
      }

      if (localComplete === queue.length) complete++;
      return output;
    });

    setDisplayedParts(newDisplayedParts);

    if (complete < queueRef.current.length) {
      frameRef.current++;
      animationRef.current = requestAnimationFrame(updateText);
    } else {
      isAnimatingRef.current = false; // Animation complete
    }
  };

  useEffect(() => {
    setIsHydrated(true); // Mark as hydrated
  }, []);

  const handleMouseEnter = () => scrambleText(hoverTextParts || textParts);
  const handleMouseLeave = () => scrambleText(textParts);

  if (!isHydrated) {
    // Render static text with <br /> tags
    return (
      <h1 className="scramble-text">
        {textParts.map((part, i) => (
          <React.Fragment key={i}>
            {part}
            {i < textParts.length - 1 && <br />}
          </React.Fragment>
        ))}
      </h1>
    );
  }

  // Render dynamic scrambling after hydration
  return (
    <h1 className="scramble-text" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {displayedParts.map((part, i) => (
        <React.Fragment key={i}>
          {part}
          {i < displayedParts.length - 1 && <br />}
        </React.Fragment>
      ))}
    </h1>
  );
};

export default TextScramble;
