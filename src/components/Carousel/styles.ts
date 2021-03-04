// @ts-nocheck
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { viewCalc } from '@lib/helperMethods';

export const StoriesWrapper = styled(motion.section)`
  display: flex;
  flex-direction: ${props => props.reverse && 'row-reverse'};

  margin: 60px auto;
  align-items: center;
  min-height: 100%;

  ul {
    width: 100%;
    position: relative;
  }
  ${props => props.theme.breakpoints.DESKTOP} {
    max-width: 1224px;
  }
`;

export const Bloop = styled(motion.li)`
  list-style: none;
`;

export const LI = styled(motion.p)`
  outline: none;
  width: 100%;
  text-align: right;
  font-size: ${props =>
    props.isActive
      ? 'calc(48px + 13 * (100vw - 1000px) / 1440)'
      : 'calc(24px + 13 * (100vw - 100px) / 1440)'};
  font-weight: bold;
  transition: all 500ms ease;
  padding: 8px 0;
  color: ${props => (props.isActive || props.hasFocus ? '#a8d1e4' : '#949494')};

  white-space: nowrap;
  :hover {
    color: #a8d1e4;
  }
`;

export const Box = styled(motion.div)`
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: ${props => (!props.reverse ? 'flex-end' : 'flex-start')};
`;
