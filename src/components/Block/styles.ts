import styled from 'styled-components';
import { motion } from 'framer-motion';

interface StyleProps {
  bg?: string;
  isOdd?: boolean;
}

export const BlockWrapper = styled(motion.div)<StyleProps>`
  padding: 60px 7vw;
  background: ${props => (props.bg ? props.bg : 'white')};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;

  h2 {
    display: inline-block;
    font-size: 48px;
    ${props => props.theme.breakpoints.TABLET} {
      font-size: 64px;
    }

    svg {
      margin-left: 25px;
    }
  }
  p {
    font-size: 18px;
    max-width: 40ch;

    ${props => props.theme.breakpoints.TABLET} {
      font-size: 24px;
    }
  }

  img {
    width: 100px;
  }

  ${props => props.theme.breakpoints.TABLET} {
    padding: 120px 7vw;
    align-items: ${props => (!props.isOdd ? 'flex-end' : 'flex-start')};
    text-align: ${props => (!props.isOdd ? 'right' : 'left')};
  }

  button {
    margin-top: 30px;
    font-size: 16px;
    padding: 14px;
    background: none;
    border: 2px solid black;
    border-radius: 5px;

    svg {
      margin-left: 5px;
    }
  }
`;

export const Caret = styled(motion.div)`
  :before {
    content: '';
    position: absolute;
    right: 0;
    border-top: 34px solid #ff0000;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
  }

  :after {
    content: '';
    position: absolute;
    right: 1px;
    border-top: 29px solid #eeeeee;
    border-left: 29px solid transparent;
    border-right: 29px solid transparent;
  }
`;
