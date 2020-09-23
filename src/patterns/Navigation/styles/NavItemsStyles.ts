import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MenuItem = styled(motion.button)`
  background: none;
  border: none;

  p {
    margin: 12px 0;
    padding: 8px 16px;
    border-radius: 50px;
    background: linear-gradient(
      to right,
      var(--blue) 0%,
      var(--blue-dark) 70%,
      var(--blue-medium) 90%
    );

    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border: 1px solid var(--gray);
    box-shadow: 5px 5px 16px rgb(163, 177, 198, 0.3),
      -9px -9px 16px rgba(255, 255, 255, 1);
    transition: 0.3s;
    background-size: 200% auto;

    :hover {
      background-position: left bottom;
      background-size: 100% auto;
    }
  }
`;
