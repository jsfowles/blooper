import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Nav = styled(motion.nav)`
  position: fixed;
  height: 80px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 5px 0px rgba(50, 50, 50, 0.1);
`;

export const Menu = styled(motion.header)`
  padding: 0 7vw;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-family: antarctican-mono;
    font-weight: 500;
    font-style: normal;
    font-size: 14px;
    letter-spacing: 0.15em;
    line-height: 1em;
    transition: all 250ms ease;
    :hover {
      color: rgba(26, 26, 26, 0.4);
    }
  }
`;
