import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Nav = styled(motion.nav)`
  background: var(--blue);
  position: fixed;
  height: 140px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  display: flex;
  justify-content: space-between;

  a,
  h5 {
    opacity: 0;
    transition: all 250ms ease;
  }

  clip-path: polygon(
    0 0,
    100% 0,
    100% 80px,
    92% 30px,
    85% 140px,
    67% 45px,
    0 80px
  );

  transition: all 250ms ease;
  :hover {
    height: 80px;
    a,
    h5 {
      display: block;
      opacity: 1;
    }
    clip-path: polygon(
      0 0,
      100% 0,
      100% 80px,
      92% 80px,
      85% 80px,
      67% 80px,
      0 80px
    );
  }
`;

export const Menu = styled(motion.header)`
  max-width: calc(1024px + 7vw);
  width: 100%;
  padding: 0 7vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
