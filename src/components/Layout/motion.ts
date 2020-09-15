import { motionTiming } from '@identity/motion';

export const mainMotion = {
  initial: 'exit',
  animate: 'enter',
  exit: 'exit',
  variants: {
    enter: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: motionTiming.animationDurationM,
        ease: motionTiming.animationTiming,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.99,
      transition: {
        duration: motionTiming.animationDurationM,
        ease: motionTiming.animationTiming,
      },
    },
  },
};
