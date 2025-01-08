import { useState, useEffect, useRef } from 'react';

const TextScramble = ({ textParts, hoverTextParts }: { textParts: string[], hoverTextParts: string[] }) => {
  const [displayedText, setDisplayedText] = useState<string[]>(textParts);
  const [isScrambling, setIsScrambling] = useState(false);
  const [canScramble, setCanScramble] = useState(true);
  const frameRequest = useRef<number>();
  const frame = useRef(0);
  const queue = useRef<{ from: string; to: string; start: number; end: number; }[]>([]);

  const randomChar = () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return alphabet[Math.floor(Math.random() * alphabet.length)];
  };

  const update = () => {
    let complete = 0;
    let output = [];

    for (let i = 0, n = queue.current.length; i < n; i++) {
      let { from, to, start, end } = queue.current[i];
      let current = [];
      
      if (frame.current >= end) {
        complete++;
        output.push(to);
      } else if (frame.current >= start) {
        const scrambleCount = Math.min(8, from.length);
        const revealPoint = Math.floor((frame.current - start) / 4);
        
        for (let j = 0; j < from.length; j++) {
          if (j < revealPoint) {
            current.push(to[j]);
          } else if (j < revealPoint + scrambleCount) {
            current.push(randomChar());
          } else {
            current.push(to[j]);
          }
        }
        output.push(current.join(''));
      } else {
        output.push(from);
      }
    }

    setDisplayedText(output);
    frame.current++;

    if (complete === queue.current.length) {
      setIsScrambling(false);
      return;
    }

    setTimeout(() => {
      frameRequest.current = requestAnimationFrame(update);
    }, 30);
  };

  const startScramble = (fromText: string[], toText: string[]) => {
    if (isScrambling || !canScramble) return;
    
    setIsScrambling(true);
    setCanScramble(false);
    frame.current = 0;
    queue.current = [];

    for (let i = 0; i < Math.max(fromText.length, toText.length); i++) {
      const from = fromText[i] || '';
      const to = toText[i] || '';
      const start = frame.current;
      const end = start + 35;
      queue.current.push({ from, to, start, end });
    }

    cancelAnimationFrame(frameRequest.current!);
    frameRequest.current = requestAnimationFrame(update);
  };

  useEffect(() => {
    return () => {
      cancelAnimationFrame(frameRequest.current!);
    };
  }, []);

  return (
    <div 
      className="scramble-text"
      onMouseEnter={() => startScramble(textParts, hoverTextParts)}
      onMouseLeave={() => {
        setCanScramble(true);
        startScramble(hoverTextParts, textParts);
      }}
    >
      {displayedText.map((text, index) => (
        <div key={index}>{text}</div>
      ))}
    </div>
  );
};

export default TextScramble;
