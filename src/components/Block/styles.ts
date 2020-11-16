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
    font-size: 64px;
  }
  p {
    font-size: 24px;
    max-width: 40ch;
  }

  img {
    width: 100px;
  }

  ${props => props.theme.breakpoints.TABLET} {
    padding: 120px 7vw;
    align-items: ${props => (!props.isOdd ? 'flex-end' : 'flex-start')};
    text-align: ${props => (!props.isOdd ? 'right' : 'left')};
  }
`;
