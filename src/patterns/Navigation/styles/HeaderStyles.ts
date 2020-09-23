import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PopUpMenu = styled(motion.div)`
  position: absolute;
  top: 40px;
  right: 40px;
  padding: 32px;
  background: var(--green);
  border-radius: 20px;
  background-color: var(--white);
  /* border: 1px solid var(--gray); */
  box-shadow: 5px 5px 16px rgb(163, 177, 198, 0.3),
    -9px -9px 16px rgba(255, 255, 255, 1);
`;

export const Nav = styled(motion.nav)`
  position: fixed;
  height: 120px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  display: flex;
  justify-content: space-between;

  h1 {
    background: linear-gradient(to right, var(--blue-dark) 0%, var(--blue) 40%);
    line-height: initial;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    text-align: center;
    width: max-content;
    position: absolute;
    top: 25px;
    left: 7vw;
    z-index: 9999;
    overflow: hidden;
  }
`;

export const Menu = styled(motion.header)`
  padding: 0 7vw;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const ButtonDiv = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #bcdeee;
`;

export const Line = styled.span`
  width: 24px;
  height: 3px;
  background: var(--blue-medium);
  display: block;
  margin: 3px auto;
  transition: all 250ms ease;
`;

export const Hamburger = styled(motion.button)`
  width: max-content;
  position: absolute;
  top: 45px;
  right: 7vw;
  background: transparent;
  border: none;
  z-index: 9999;

  :hover {
    ${Line} {
      background: var(--blue);
    }
  }
  :before {
    z-index: 9999;
    content: '';
    position: absolute;
    width: 28;
    height: 28;
    border: transparent;
    top: -2px;
    right: 0;
    border-radius: 100%;
    transition: ${props => props.theme.constants.transitionMedium};
  }
`;
