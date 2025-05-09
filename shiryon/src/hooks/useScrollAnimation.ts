// src/hooks/useScrollAnimation.ts
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type ScrollAnimationOptions = {
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
};

/**
 * Custom hook that returns animation controls and a ref to attach to an element.
 * The animation controls will start when the element enters the viewport.
 */
export const useScrollAnimation = ({
  threshold = 0.2,
  triggerOnce = false,
}: ScrollAnimationOptions = {}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, triggerOnce });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!triggerOnce) {
      controls.start('hidden');
    }
  }, [controls, inView, triggerOnce]);

  return { ref, controls, inView };
};

// Default animation variants for use with useScrollAnimation
export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

export const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

// src/hooks/useMousePosition.ts
import { useState, useEffect } from 'react';

interface MousePosition {
  x: number;
  y: number;
  xPercentage: number;
  yPercentage: number;
}

/**
 * Hook that tracks mouse position and returns coordinates and percentages
 */
export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    xPercentage: 0,
    yPercentage: 0
  });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPercentage = clientX / window.innerWidth;
      const yPercentage = clientY / window.innerHeight;
      
      setMousePosition({
        x: clientX,
        y: clientY,
        xPercentage,
        yPercentage
      });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return mousePosition;
};