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
      <h3 style={{ fontSize: 60, textAlign: 'center', paddingTop: 60 }}>
        {cards[0].title}
      </h3>
      <StoriesWrapper reverse={reverse}>
        <Box reverse={reverse} style={{ maxWidth: 'max-content' }}>
          {cards.map(({ sys, heading, title }, index) => (
            <>
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
            </>
          ))}
        </Box>

        {/*<AnimatePresence exitBeforeEnter>*/}
        <Box
          initial="hidden"
          animate="visible"
          exit="hidden"
          variant={cardMotion}
        >
          {cards.map(({ sys, textSummary, assetLink, mediaAsset }, index) => (
            <>
              {shiftIndex === index && (
                <motion.div
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  {shiftIndex === index && (
                    <>
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
                    </>
                  )}
                </motion.div>
              )}
            </>
          ))}
        </Box>
        {/*</AnimatePresence>*/}
      </StoriesWrapper>
    </div>
  );
};

export default Carousel;
