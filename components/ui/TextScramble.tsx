"use client";
import { useState, useEffect } from 'react';

interface TextScrambleProps {
  textParts: string[];
  hoverTextParts: string[];
}

const TextScramble = ({ textParts, hoverTextParts }: TextScrambleProps) => {
  const [displayedText, setDisplayedText] = useState<string[]>(textParts);
  const [hoveredWord, setHoveredWord] = useState<{ line: number; word: number } | null>(null);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  const randomChar = (isFirstChar: boolean) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const char = alphabet[Math.floor(Math.random() * 10)];
    return isFirstChar ? char.toUpperCase() : char;
  };

  const scrambleText = (text: string) => {
    return text.split('').map((char, index) => {
      if (char === ' ') return '\u00A0';
      if (Math.random() > 0.3) return char;
      
      // Handle capitalization
      const isFirstChar = index === 0;
      const shouldCapitalize = isFirstChar && text.length > 1;
      return randomChar(shouldCapitalize);
    }).join('');
  };

  const revealText = (text: string, originalText: string, progress: number) => {
    return text.split('').map((char, i) => {
      if (char === ' ') return '\u00A0';
      if (i <= progress) return originalText[i];
      
      // Handle capitalization for scrambled chars
      const isFirstChar = i === 0;
      const shouldCapitalize = isFirstChar && text.length > 1;
      return randomChar(shouldCapitalize);
    }).join('');
  };

  // Initial load animation
  useEffect(() => {
    if (shouldAnimate) {
      const interval = setInterval(() => {
        setDisplayedText(prev => 
          prev.map(text => scrambleText(text))
        );
      }, 50);

      setTimeout(() => {
        clearInterval(interval);
        setDisplayedText(textParts);
        setShouldAnimate(false);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [shouldAnimate, textParts]);

  // Hover animation for individual words
  useEffect(() => {
    if (hoveredWord) {
      const interval = setInterval(() => {
        setDisplayedText(prev => 
          prev.map((line, lineIndex) => {
            if (lineIndex !== hoveredWord.line) return line;
            
            const words = line.split(' ');
            words[hoveredWord.word] = scrambleText(words[hoveredWord.word]);
            return words.join(' ');
          })
        );
      }, 50);

      return () => clearInterval(interval);
    }
  }, [hoveredWord]);

  // Handle word reveal on hover end
  const handleWordLeave = (lineIndex: number, wordIndex: number, originalWord: string) => {
    setHoveredWord(null);
    for (let i = 0; i < originalWord.length; i++) {
      setTimeout(() => {
        setDisplayedText(prev => 
          prev.map((line, lIndex) => {
            if (lIndex !== lineIndex) return line;
            
            const words = line.split(' ');
            const currentWord = words[wordIndex];
            words[wordIndex] = revealText(currentWord, originalWord, i);
            return words.join(' ');
          })
        );
      }, i * 50);
    }
  };

  return (
    <div className="scramble-text space-y-2 text-center">
      {displayedText.map((text, lineIndex) => (
        <div key={lineIndex} className="leading-tight">
          {text.split(' ').map((word, wordIndex) => (
            <span key={`${lineIndex}-${wordIndex}`} className="inline-block">
              <span
                className="cursor-pointer transition-colors"
                onMouseEnter={() => setHoveredWord({ line: lineIndex, word: wordIndex })}
                onMouseLeave={() => handleWordLeave(lineIndex, wordIndex, textParts[lineIndex].split(' ')[wordIndex])}
              >
                {word.split('').map((char, charIndex) => (
                  <span key={charIndex} className="inline-block">
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </span>
              {wordIndex < text.split(' ').length - 1 && '\u00A0'}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TextScramble;
