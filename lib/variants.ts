import { Variants } from 'framer-motion';

export const fadeIn = (direction: string, delay: number): Variants => {
  return {
    hidden: {
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      opacity: 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.5,
        delay: delay * 0.5, // delayも短縮
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      },
    },
  };
};