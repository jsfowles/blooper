export const cardMotion = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.17, 0.67, 0.83, 0.67],
      delayChildren: 0.25,
      staggerChildren: 0.07,
      staggerDirection: 1,
    },
  },
  hidden: {
    opacity: 0,
    y: '-100vh',
    transition: {
      ease: [0.17, 0.67, 0.83, 0.67],
      staggerChildren: 0.07,
      staggerDirection: -1,
      when: 'afterChildren',
    },
  },
};

export const yoMotion = {
  visible: { opacity: 1, y: 0, x: 0 },
  hidden: { opacity: 0, y: -20, x: -10 },
  exit: { opacity: 0 },
};
