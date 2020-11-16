import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Nav = styled(motion.nav)`
  //position: fixed;
  height: 80px;
  //top: 0;
  //bottom: 0;
  //left: 0;
  //right: 0;
  z-index: 9999;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled(motion.header)`
  padding: 0 7vw;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    margin-top: 2vh;
    width: 40px;
    ${props => props.theme.breakpoints.TABLET} {
      width: 80px;
    }
  }
`;
