import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Nav = styled(motion.nav)`
  //position: fixed;
  //height: 80px;
  //top: 0;
  //bottom: 0;
  //left: 0;
  //right: 0;
  z-index: 9999;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled(motion.header)`
  padding: 0 7vw;
  width: 100%;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 40px;
    ${props => props.theme.breakpoints.TABLET} {
      width: 70px;
    }
  }
`;
