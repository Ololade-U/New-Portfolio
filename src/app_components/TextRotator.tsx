import  { useState, useEffect } from 'react';
import './TextRotator.css';

const TEXTS = [
  "Product Designer",
  "FrontEnd Dev",
  "UI/UX Designer",
  "Web Designer",
];

const ROTATION_INTERVAL = 3000;
const TRANSITION_DURATION = 500;

const TextRotator = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const rotationTimer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % TEXTS.length);
        setIsVisible(true);
      }, TRANSITION_DURATION);

    }, ROTATION_INTERVAL);

    return () => clearInterval(rotationTimer);
  }, []);
  const textClass = isVisible ? 'text-item visible' : 'text-item hidden';

  return (
    <div className="text-rotator-container">
      <h1 className={textClass}>
        {TEXTS[currentIndex]}
      </h1>
    </div>
  );
};

export default TextRotator;