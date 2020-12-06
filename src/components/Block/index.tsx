// @ts-nocheck
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BlockWrapper } from '@components/Block/styles';
import { useMediaQuery } from 'react-responsive';

interface Props {
  index: number;
  heading: string;
  textSummary: string;
  slug: string;
  bg: string;
}

const Block = ({ heading, textSummary, index, background, slug }: Props) => {
  const [activeAcc, setActiveAcc] = React.useState(null);

  const toggleAcc = React.useCallback(
    id => setActiveAcc(currentID => (currentID === id ? null : id)),
    [setActiveAcc],
  );

  const isOdd = index % 2 === 1;

  const isMobile = useMediaQuery({
    query: '(max-device-width: 768px)',
  });

  return (
    <Link href={slug} passHref>
      <a
        style={{
          position: 'relative',
          background: background,
          display: 'block',
          overflow: 'hidden',
        }}
      >
        <BlockWrapper
          key={index}
          bg={background}
          isOdd={isOdd}
          whileHover={!isMobile && { scale: 1.2, x: !isOdd ? '20%' : '-20%' }}
          transition={{ type: 'spring', mass: 0.5 }}
          onClick={() => toggleAcc(index)}
        >
          <motion.h2>
            {heading}
            {isMobile && (
              <motion.svg
                animate={activeAcc === index ? { rotate: 90 } : { rotate: 270 }}
                transition={{ type: 'spring', mass: 0.5 }}
                width={16}
                height={24}
                viewBox="0 0 16 24"
                fill="var(--black)"
              >
                <path
                  d="M4.08 23.98L.82 20.76l8.48-8.6L.82 3.63 4.07.4l11.67 11.75L4.08 23.98z"
                  fill="var(--black)"
                />
              </motion.svg>
            )}
          </motion.h2>
          <motion.div
            animate={
              isMobile && activeAcc === index
                ? { height: 'auto', opacity: 1 }
                : { height: isMobile ? 0 : 'auto', opacity: isMobile ? 0 : 1 }
            }
          >
            <motion.p>{textSummary}</motion.p>
            {isMobile && (
              <Link href={'/'} passHref>
                <a>
                  <motion.button
                    animate={
                      activeAcc === index ? { opacity: 1 } : { opacity: 0 }
                    }
                  >
                    {heading}
                    <svg width={20} height={8} viewBox="0 0 42 18" fill="none">
                      <path
                        d="M0 9h40M28 1l12 8-12 8"
                        stroke="var(--black)"
                        strokeWidth={4}
                      />
                    </svg>
                  </motion.button>
                </a>
              </Link>
            )}
          </motion.div>
        </BlockWrapper>
      </a>
    </Link>
  );
};

export default Block;
