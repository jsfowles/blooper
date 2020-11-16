import React from 'react';
import useMotionTrigger from '@hooks/useMotionTrigger';
import { observerThreshold } from '@identity/motion';
import { motion } from 'framer-motion';

interface Props {
  src?: string;
  alt?: string;
  [key: string]: any;
}

const Image = ({ src, alt, ...props }: Props) => {
  const [ref, animate] = useMotionTrigger({
    threshold: observerThreshold.XS,
    triggerOnce: true,
  });

  return (
    <motion.figure
      ref={ref}
      initial={{ opacity: 0 }}
      animate={animate ? { opacity: 1 } : { opacity: 0 }}
    >
      <motion.img {...props} src={src} alt={alt} />
    </motion.figure>
  );
};

export default Image;
