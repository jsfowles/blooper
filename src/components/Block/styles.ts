import styled from 'styled-components';
import { motion } from 'framer-motion';

interface StyleProps {
  bg: string;
  isOdd: boolean;
}

export const BlockWrapper = styled(motion.div)<StyleProps>`
  padding: 120px 7vw;
  background: ${props => (props.bg ? props.bg : 'white')};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.isOdd ? 'flex-end' : 'flex-start')};
  text-align: ${props => (props.isOdd ? 'right' : 'left')};
  h2 {
    font-size: 64px;
  }
  p {
    font-size: 24px;
    width: 56ch;
    max-width: max-content;
  }

  img {
    width: 100px;
  }
`;
