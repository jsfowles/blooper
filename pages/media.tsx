import React from 'react';

import Video from '@components/Video';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { parentEl } from '@identity/motion';

const Grid = styled(motion.section)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 53px;
  @media only screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Header = styled(motion.h1)`
  font-size: 32px;

  ${props => props.theme.breakpoints.TABLET} {
    font-size: 52px;
  }
`;

const Media = () => {
  return (
    <AnimatePresence>
      <Header>Better Bloops</Header>
      <Grid
        style={{ padding: '7vw' }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={parentEl(0.2, 0.75)}
      >
        <Video url="https://www.youtube.com/watch?v=TPlX1ehN5eE" />
        <Video url="https://www.youtube.com/watch?v=P3D5rqJa5Z0" />
        <Video url="https://www.youtube.com/watch?v=-yAf4Y0lBvA" />
        <Video url="https://www.youtube.com/watch?v=f0HgKuovId0" />
        <Video url="https://www.youtube.com/watch?v=fydnSMVtxSY" />
        <Video url="https://www.youtube.com/watch?v=l9xfq38bTNc" />
      </Grid>
    </AnimatePresence>
  );
};

export default Media;
