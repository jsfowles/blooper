// @ts-nocheck
import React, { useState } from 'react';
import Link from 'next/link';
import { NavItems } from '@patterns/Navigation';
import { useMediaQuery } from 'react-responsive';

import {
  Nav,
  Menu,
  ButtonDiv,
  Hamburger,
  Line,
  PopUpMenu,
} from './styles/HeaderStyles';
import { useScrollData } from 'scroll-data-hook';
// import Logo from '@components/Logo';
import { TypeScale } from '../../identity/type';
import { parentEl } from '../../identity/motion';
import { AnimatePresence } from 'framer-motion';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const {
    scrolling,
    time,
    speed,
    direction,
    position,
    relativeDistance,
    totalDistance,
  } = useScrollData();

  const isMobile = useMediaQuery({
    query: '(max-device-width: 768px)',
  });

  return (
    <Nav>
      <Menu>
        <Link passHref href="/">
          <a>
            <TypeScale.H1>blooper</TypeScale.H1>
          </a>
        </Link>
        <Hamburger
          onClick={() => {
            if (isMobile) {
              setOpenMenu(!openMenu);
            }
          }}
          onHoverStart={() => {
            if (!isMobile) {
              setOpenMenu(true);
            }
          }}
          onHoverEnd={() => {
            if (!isMobile) {
              setOpenMenu(false);
            }
          }}
        >
          <Line />
          <Line />
          <Line />
          <AnimatePresence initial={false}>
            {openMenu && (
              <PopUpMenu
                key="menu"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={parentEl(0, 0)}
              >
                <Link passHref href="/firmware">
                  <NavItems setOpenMenu={setOpenMenu} />
                </Link>
              </PopUpMenu>
            )}
          </AnimatePresence>
        </Hamburger>
      </Menu>
    </Nav>
  );
};

export default Header;
