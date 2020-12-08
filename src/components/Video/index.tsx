// @ts-nocheck
import React from 'react';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { childEl } from '@identity/motion';

export const Wrapper = styled(motion.div)`
  box-shadow: var(--box-shadow);
  position: relative;
  overflow: hidden;
  height: 0;
  padding-top: 56.25%;
  border-radius: 25px;
`;

export const Ratio = styled(motion.div)`
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Video = ({ url }) => {
  return (
    <Wrapper>
      <Ratio>
        <ReactPlayer url={url} />
      </Ratio>
    </Wrapper>
  );
};

export default Video;
