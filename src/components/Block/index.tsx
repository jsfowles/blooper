import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BlockWrapper } from '@components/Block/styles';

interface Props {
  id: number;
  heading: string;
  paragraph: string;
  route: string;
  bg: string;
}

const Block = ({ id, heading, paragraph, route, bg }: Props) => {
  const isOdd = id % 2 === 1;

  return (
    <Link href={route} passHref>
      <a
        style={{
          position: 'relative',
          background: bg,
          display: 'block',
          overflow: 'hidden',
        }}
      >
        <BlockWrapper
          key={id}
          bg={bg}
          isOdd={isOdd}
          whileHover={{ scale: 1.2, x: isOdd ? '20%' : '-20%' }}
          transition={{ type: 'spring', mass: 0.5 }}
        >
          <motion.h2>{heading}</motion.h2>
          <motion.p>{paragraph}</motion.p>
        </BlockWrapper>
      </a>
    </Link>
  );
};

export default Block;
