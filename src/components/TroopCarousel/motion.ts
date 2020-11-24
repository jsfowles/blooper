export const cardMotion = {
  hidden: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 0.5,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 1,
    x: -100,
  },
};
