// @ts-nocheck
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { viewCalc } from '@lib/helperMethods';

export const StoriesWrapper = styled(motion.section)`
  display: flex;
  justify-content: space-between;

  ul {
    width: 100%;
    position: relative;
  }
  ${props => props.theme.breakpoints.DESKTOP} {
    max-width: 1224px;
  }
`;

export const Bloop = styled(motion.li)`
  background-color: ${props => props.bgColor};
  padding: 4vw 7vw;
  list-style: none;
`;

export const LI = styled(motion.p)`
  outline: none;
  width: 100%;
  text-align: left;
  font-size: 28px;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${props => (props.boxWidth ? `${props.boxWidth}` : '100%')};
`;
