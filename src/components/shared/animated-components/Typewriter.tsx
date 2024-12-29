'use client';

import { useEffect, useState } from 'react';

interface TypewriterProps {
  words: string[];
  delay?: number;
}

export default function Typewriter({ words, delay = 2000 }: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = 100;
    const deleteSpeed = 50;

    const type = () => {
      const currentWord = words[currentWordIndex];

      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1));

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setCurrentText(currentWord.substring(0, currentText.length + 1));

        if (currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), delay);
        }
      }
    };

    const timer = setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, currentWordIndex, isDeleting, words, delay]);

  return (
    <span className='text-secondary-950 mr-2 font-medium'>{currentText}</span>
  );
}
