// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import { Bloop, StoriesWrapper, Box } from './styles';
import useArrowKeyFocus from './../../hooks/useArrowKeyFocus';
import Item from './Items';

import { AnimatePresence, useAnimation } from 'framer-motion';
import { cardMotion, yoMotion } from '@components/Carousel/motion';
import VideoPlayer from './Video';

import Media from './Media';

const Carousel = ({ cards, noShadow, reverse }) => {
  const [shiftIndex, setShiftIndex] = React.useState(0);
  const [focus, setFocus] = useArrowKeyFocus(cards.length);

  return (
    <div>
      <StoriesWrapper reverse={reverse}>
        <Box reverse={reverse} style={{ padding: '0 7vw' }}>
          {cards.map(({ sys, heading, title }, index) => (
            <Bloop key={sys.id}>
              <Item
                key={heading}
                shiftIndex={shiftIndex}
                setShiftIndex={setShiftIndex}
                setFocus={setFocus}
                id={index}
                focus={focus === index}
                title={heading}
              />
            </Bloop>
          ))}
        </Box>

        <AnimatePresence exitBeforeEnter>
          <Box
            initial="hidden"
            animate="visible"
            exit="hidden"
            variant={cardMotion}
          >
            {cards.map(({ sys, textSummary, assetLink, mediaAsset }, index) => (
              <>
                {shiftIndex === index && (
                  <a>
                    <Media
                      noShadow={noShadow}
                      mediaAsset={mediaAsset}
                      assetLink={assetLink}
                      textSummary={textSummary}
                    />
                    {!mediaAsset && (
                      <VideoPlayer
                        assetLink={assetLink}
                        textSummary={textSummary}
                      />
                    )}
                  </a>
                )}
              </>
            ))}
          </Box>
        </AnimatePresence>
      </StoriesWrapper>
    </div>
  );
};

export default Carousel;
