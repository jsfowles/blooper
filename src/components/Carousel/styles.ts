// @ts-nocheck
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { viewCalc } from '@lib/helperMethods';

export const StoriesWrapper = styled(motion.section)`
  display: flex;
  flex-direction: ${props => props.reverse && 'row-reverse'};
  justify-content: space-between;
  width: ${viewCalc(1540)};
  margin: 60px auto;
  max-width: 1024px;
  min-height: 550px;

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
  text-align: left;
  font-size: ${props =>
    props.isActive
      ? 'calc(55px + 13 * (100vw - 1000px) / 1200)'
      : 'calc(35px + 13 * (100vw - 100px) / 1200)'};
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
  align-items: ${props => props.reverse && 'flex-end'};
`;
