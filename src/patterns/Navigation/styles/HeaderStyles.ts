import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Menu = styled(motion.header)`
  padding: 20px 7vw;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: white;
  position: fixed;
  height: 80px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  ${props => props.theme.breakpoints.TABLET} {
    box-shadow: none;
    position: relative;
  }

  img {
    position: fixed;
    z-index: 100;
    top: 20px;
    left: 7vw;
    width: 40px;
    ${props => props.theme.breakpoints.TABLET} {
      width: 70px;
    }
  }
`;
