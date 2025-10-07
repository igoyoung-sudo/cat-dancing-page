import { useState } from 'react';

export const useAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  const toggleAnimation = () => {
    setIsAnimating(prev => !prev);
  };

  return {
    isAnimating,
    toggleAnimation
  };
};
