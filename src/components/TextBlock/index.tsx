import React from 'react';
import { motion } from 'framer-motion';
import { TextBlockWrapper } from './styles';

interface Props {
  title: string;
}

const TextBlock = ({ title }: Props) => {
  return (
    <TextBlockWrapper>
      <motion.h1>{title}</motion.h1>
      <motion.p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse est
        elit, lobortis id augue sit amet, fringilla convallis diam. Nulla
        vulputate nulla lectus, efficitur venenatis felis bibendum eu.
        Suspendisse est elit, lobortis id augue sit amet, fringilla convallis
        diam.
      </motion.p>
    </TextBlockWrapper>
  );
};

export default TextBlock;
