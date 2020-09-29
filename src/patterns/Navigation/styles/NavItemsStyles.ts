import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MenuItem = styled(motion.button)`
  background: none;
  border: none;

  p {
    text-transform: uppercase;
    margin: 12px 0;
    padding: 8px 16px;
    transition: all 250ms ease;
    :hover {
      color: rgba(26, 26, 26, 0.4);
    }
  }
`;
