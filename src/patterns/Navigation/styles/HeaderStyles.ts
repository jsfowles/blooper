import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Menu = styled(motion.header)`
  padding: 20px 7vw;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 40px;
    ${props => props.theme.breakpoints.TABLET} {
      width: 70px;
    }
  }
`;
