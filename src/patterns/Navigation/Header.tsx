// @ts-nocheck
import React, { useState } from 'react';
import Link from 'next/link';
import { NavItems, MobileMenu } from '@patterns/Navigation';
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
            <TypeScale.P>CHASE BLISS AUDIO</TypeScale.P>
          </a>
        </Link>
        {isMobile ? <MobileMenu /> : <NavItems />}
      </Menu>
    </Nav>
  );
};

export default Header;
