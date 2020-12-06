// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import { Header, Bloop, StoriesWrapper, Figure, Box } from './styles';
import useArrowKeyFocus from './../../hooks/useArrowKeyFocus';
import Item from './Items';
import BloopTroop from '../BloopTroop';
import { AnimatePresence, useAnimation } from 'framer-motion';
import { cardMotion, yoMotion } from '@components/TroopCarousel/motion';
import Video from '@components/Video';
import Image from '@components/Image';
import styled from 'styled-components';
import Popup from 'reactjs-popup';
import Button from '@components/Button';

// const DATA = [
//   { id: 0, title: 'Smooth Speed', troopCard: <BloopTroop.SmoothBloop /> },
//   { id: 1, title: 'Dropper', troopCard: <BloopTroop.DropperBloop /> },
//   { id: 2, title: 'Stepped Speed', troopCard: <BloopTroop.SteppedBloop /> },
//   { id: 3, title: 'Scrambler', troopCard: <BloopTroop.ScramblerBloop /> },
//   { id: 4, title: 'Trimmer', troopCard: <BloopTroop.TrimmerBloop /> },
//   { id: 5, title: 'Filter', troopCard: <BloopTroop.FilterBloop /> },
// ];
const StyledPopup = styled(Popup)`
  &-overlay {
    background: black;
    opacity: 1;
  }
  &-content {
    color: pink;
    height: 80vh;
    span {
      :hover {
        cursor: pointer;
      }
    }
  }
`;
const Carousel = ({ cards }) => {
  console.log(cards);

  const [shiftIndex, setShiftIndex] = React.useState(0);
  const [focus, setFocus] = useArrowKeyFocus(cards.length);
  return (
    <>
      <StoriesWrapper>
        <Box>
          {cards.map(({ sys, heading }) => (
            <>
              <Bloop key={sys.id}>
                <Item
                  key={heading}
                  shiftIndex={shiftIndex}
                  setShiftIndex={setShiftIndex}
                  setFocus={setFocus}
                  id={sys.id}
                  focus={focus === sys.id}
                  title={heading}
                />
              </Bloop>
            </>
          ))}
        </Box>

        <AnimatePresence exitBeforeEnter>
          <Box
            initial="hidden"
            animate="visible"
            exit="hidden"
            variant={cardMotion}
          >
            {cards.map(({ sys, textSummary, assetLink, mediaAsset }) => (
              <>
                {shiftIndex === sys.id && (
                  <motion.div variants={yoMotion}>
                    {shiftIndex === sys.id && (
                      <div>
                        <h4
                          style={{
                            fontSize: 32,
                            width: '35ch',
                            textAlign: 'center',
                          }}
                        >
                          {textSummary}
                        </h4>
                        {assetLink && <Video url={assetLink} />}
                        {mediaAsset && (
                          <StyledPopup
                            trigger={
                              <span style={{ paddingLeft: 10 }}>
                                <Button>view</Button>
                              </span>
                            }
                            modal
                          >
                            <embed
                              src={mediaAsset.url}
                              width={800}
                              height="100%"
                            />
                          </StyledPopup>
                        )}
                        <Button>download</Button>
                      </div>
                    )}
                  </motion.div>
                )}
              </>
            ))}
          </Box>
        </AnimatePresence>
      </StoriesWrapper>
    </>
  );
};

export default Carousel;
