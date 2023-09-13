// TypingAnimation.js
import React, { useState, useEffect } from 'react';
const TypingAnimation = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      } else {
        clearInterval(animationInterval);
      }
    }, 10); // Adjust the interval for typing speed

    return () => {
      clearInterval(animationInterval);
    };
  }, [currentIndex, text]);

  return <div className="typing-animation">{displayText}</div>;
};

export default TypingAnimation;
