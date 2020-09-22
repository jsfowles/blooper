import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MenuItem = styled(motion.div)`
  background: linear-gradient(
    to right,
    var(--blue) 0%,
    var(--blue-dark) 70%,
    var(--blue-medium) 90%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 15px;
  padding: 8px 16px;
  border-radius: 50px;
  line-height: 2px;
  border: 1px solid var(--gray);
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 0.3),
    -9px -9px 16px rgba(255, 255, 255, 1);
  transition: 0.3s;
  background-size: 200% auto;

  :hover {
    background-position: left bottom;
    background-size: 100% auto;
  }
`;
