import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MenuItem = styled(motion.li)`
  background: none;
  border: none;
  list-style: none;

  p {
    font-size: 24px;
  }
`;

export const NavItemsWrapper = styled(motion.ul)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: flex-end;
  padding: 80px 14vw;

  ${props => props.theme.breakpoints.TABLET} {
    height: initial;
    justify-content: space-between;
    max-width: 500px;
    flex-direction: row;
    padding: initial;
  }
`;
