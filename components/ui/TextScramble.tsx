"use client";
import { useState, useEffect } from 'react';

interface TextScrambleProps {
  textParts: string[];
  hoverTextParts: string[];
}

const TextScramble = ({ textParts, hoverTextParts }: TextScrambleProps) => {
  const [hoveredChar, setHoveredChar] = useState<{ part: number, char: number } | null>(null);
  const [displayedText, setDisplayedText] = useState<string[]>(textParts);

  const randomChar = () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return alphabet[Math.floor(Math.random() * alphabet.length)];
  };

  useEffect(() => {
    if (!hoveredChar) return;

    const interval = setInterval(() => {
      setDisplayedText(prev => 
        prev.map((text, partIndex) => 
          partIndex === hoveredChar.part
            ? text.split('').map((char, charIndex) => 
                charIndex === hoveredChar.char ? randomChar() : char
              ).join('')
            : text
        )
      );
    }, 50);

    return () => clearInterval(interval);
  }, [hoveredChar]);

  return (
    <div className="scramble-text space-y-2">
      {displayedText.map((text, partIndex) => (
        <div key={partIndex} className="leading-tight">
          {text.split('').map((char, charIndex) => (
            <span
              key={charIndex}
              className="inline-block transition-colors hover:text-purple-400 cursor-default"
              onMouseEnter={() => setHoveredChar({ part: partIndex, char: charIndex })}
              onMouseLeave={() => {
                setHoveredChar(null);
                setDisplayedText(textParts);
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TextScramble;
