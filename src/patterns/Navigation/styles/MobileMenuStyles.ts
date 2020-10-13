import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Overlay = styled(motion.div)`
  background-color: #ffffffdd;
  position: absolute;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const MobileMenuWrapper = styled(motion.div)`
  .burger {
    z-index: 1;
  }
`;
