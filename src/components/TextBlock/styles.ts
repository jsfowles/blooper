import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TextBlockWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 7vh 7vw;

  h1 {
    text-align: center;
    font-size: 80px;

    ${props => props.theme.breakpoints.TABLET} {
      font-size: 124px;
    }
  }

  p {
    padding-top: 24px;
    font-size: 18px;
    max-width: 56ch;

    ${props => props.theme.breakpoints.TABLET} {
      text-align: center;
      padding-top: 48px;
      font-size: 21px;
    }
  }
`;
