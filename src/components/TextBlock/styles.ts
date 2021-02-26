import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TextBlockWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 2vh 7vw;

  ${props => props.theme.breakpoints.TABLET} {
    padding: 0 7vh 7vw;
  }
  h1 {
    text-align: center;
    font-size: 60px;

    ${props => props.theme.breakpoints.TABLET} {
      font-size: 124px;
    }
  }

  p {
    padding-top: 18px;
    font-size: 18px;
    max-width: 56ch;

    ${props => props.theme.breakpoints.TABLET} {
      text-align: center;
      padding-top: 24px;
      font-size: 21px;
    }
  }
`;
