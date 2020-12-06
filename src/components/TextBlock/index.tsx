import React from 'react';
import { motion } from 'framer-motion';
import { TextBlockWrapper } from './styles';

interface Props {
  heading?: string;
  description?: string;
}

const TextBlock = ({ heading, description }: Props) => {
  return (
    <TextBlockWrapper>
      <motion.h1>{heading}</motion.h1>
      <motion.p>{description}</motion.p>
    </TextBlockWrapper>
  );
};

export default TextBlock;
