import { motion } from 'framer-motion';
import styled from 'styled-components';

export const BtnWrapper = styled(motion.button)`
  margin-top: 30px;
  font-size: 16px;
  padding: 14px;
  background: none;
  border: 2px solid black;
  border-radius: 5px;

  svg {
    transform: translateY(3px);
    margin-left: 5px;
  }
`;
