import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MenuItem = styled(motion.li)`
  background: none;
  border: none;
  list-style: none;
  p {
    text-transform: uppercase;

    transition: all 250ms ease;
    :hover {
      color: rgba(26, 26, 26, 0.4);
    }
  }
`;

export const NavItemsWrapper = styled(motion.ul)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: flex-end;
  padding: 80px 14vw;

  p {
    font-size: 24px;
    padding-bottom: 24px;
  }

  ${props => props.theme.breakpoints.TABLET} {
    height: initial;
    justify-content: space-between;
    max-width: 450px;
    flex-direction: row;
    padding: initial;

    p {
      font-size: initial;
      padding-bottom: initial;
    }
  }
`;
