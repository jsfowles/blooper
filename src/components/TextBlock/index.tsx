// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import { TextBlockWrapper } from './styles';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
interface Props {
  heading?: string;
  description?: string;
}

const TextBlock = ({ heading, description }: Props) => {
  return (
    <TextBlockWrapper>
      <motion.h1>{heading}</motion.h1>

      <ReactMarkdown plugins={[gfm]} children={description} />
    </TextBlockWrapper>
  );
};

export default TextBlock;
