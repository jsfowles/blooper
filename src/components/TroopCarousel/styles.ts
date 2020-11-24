// @ts-nocheck
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { viewCalc } from '@lib/helperMethods';

export const StoriesWrapper = styled(motion.section)`
  display: flex;
  width: ${viewCalc(1520)};
  padding-top: 5%;
  margin: 0 auto;
  padding-bottom: 25vh;

  ul {
    width: 100%;
    position: relative;
  }
`;

export const Bloop = styled(motion.li)`
  width: max-content;
  list-style: none;
`;

export const Header = styled(motion.h1)`
  padding-top: 10%;
  text-align: center;
  font-size: 32px;

  ${props => props.theme.breakpoints.TABLET} {
    font-size: 52px;
    padding-top: 5%;
  }
`;

export const LI = styled(motion.p)`
  outline: none;
  width: 14ch;
  text-align: left;
  font-size: 48px;
  font-weight: bold;
  transition: all 500ms ease;
  padding: 8px 0;
  color: ${props => (props.isActive || props.hasFocus ? '#a8d1e4' : '#949494')};
  transform: scale(${props => (props.isActive ? 1.4 : 1)});
  padding-left: ${props => (props.isActive ? '54px' : 0)};
  white-space: nowrap;
  :hover {
    color: #a8d1e4;
  }
`;

export const Figure = styled(motion.figure)`
  display: flex;

  svg {
    height: 70vh;
  }
`;

export const Box = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`;
