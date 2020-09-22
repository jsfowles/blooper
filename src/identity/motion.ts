export const motionTiming = {
  animationTiming: [0.23, 1, 0.32, 1],
  animationDurationXXL: 1.0,
  animationDurationXL: 0.75,
  animationDurationL: 0.5,
  animationDurationM: 0.25,
  animationDurationS: 0.15,
  animationDurationXS: 0.1,

  childrenDurationL: 0.07,
  childrenDurationM: 0.05,
  childrenDurationS: 0.02,
};

export const observerThreshold = {
  XS: 0.1,
  S: 0.15,
  M: 0.25,
  L: 0.33,
  XL: 0.5,
};

export const parentEl = (staggerTime?: number, delayTime?: number) => {
  return {
    hidden: {
      opacity: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 1,
        staggerDirection: -1,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        duration: 0.1,
        staggerChildren: staggerTime || 0.07,
        delayChildren: delayTime || 0,
      },
    },
  };
};

export const childEl = (
  direction?: 'down' | 'up' | 'left' | 'right',
  distance?: number,
) => {
  const transition = {
    duration: motionTiming.animationDurationXXL,
    ease: motionTiming.animationTiming,
  };

  if (!direction || !distance) {
    return {
      hidden: {
        opacity: 0,
        transition,
      },
      visible: {
        opacity: 1,
        transition,
      },
    };
  }

  const y =
    (direction === 'down' && -distance) ||
    (direction === 'up' && distance) ||
    0;
  const x =
    (direction === 'right' && -distance) ||
    (direction === 'left' && distance) ||
    0;

  return {
    hidden: {
      y,
      x,
      opacity: 0,
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition,
    },
  };
};

export const mobileNavEl = {
  hidden: {
    x: '100%',
    height: '100vh',
    transition: {
      when: 'afterChildren',
      duration: motionTiming.animationDurationL,
      ease: motionTiming.animationTiming,
      damping: 50,
      stiffness: 250,
      staggerChildren: motionTiming.childrenDurationL,
      staggerDirection: -1,
    },
  },
  visible: {
    x: '0%',
    height: '100vh',
    transition: {
      duration: motionTiming.animationDurationL,
      ease: motionTiming.animationTiming,
      damping: 50,
      stiffness: 250,
      staggerChildren: motionTiming.animationDurationXS,
      delayChildren: motionTiming.animationDurationM,
    },
  },
};
