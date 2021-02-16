import { motion } from 'framer-motion';
import styled from 'styled-components';

export const BtnWrapper = styled(motion.button)`
  margin-top: 30px;
  margin-right: 25px;
  font-size: 16px;
  padding: 14px;
  background: none;
  border: 2px solid black;
  border-radius: 5px;
  white-space: nowrap;
  cursor: pointer;
  transition: all 250ms linear;
  :hover {
    border: 2px solid #428fa4;
    color: #428fa4;
  }
  svg {
    transform: translateY(3px);
    margin-left: 5px;
  }
`;
