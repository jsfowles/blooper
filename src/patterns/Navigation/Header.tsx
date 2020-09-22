// @ts-nocheck
import React from 'react';

import { NavItems } from '@patterns/Navigation';
import { Nav, Menu } from './styles/HeaderStyles';
import { useScrollData } from 'scroll-data-hook';
// import Logo from '@components/Logo';
import { TypeScale } from '../../identity/type';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `polygon(0 0,100% 0,100% 80px,92% 30px,85% 140px,67% 45px,0 80px)`,
    transition: {},
  }),
  closed: {
    clipPath: 'polygon(0 0,100% 0,100% 80px,92% 80px,85% 80px,67% 80px,0 80px)',
    transition: {},
  },
};

const Header = () => {
  const {
    scrolling,
    time,
    speed,
    direction,
    position,
    relativeDistance,
    totalDistance,
  } = useScrollData({
    onScrollStart: () => {
      console.log('Started scrolling');
    },
    onScrollEnd: () => {
      console.log('Finished scrolling');
    },
  });
  console.log(scrolling);
  return (
    <Nav
      scrollPosition={scrolling}
      // initial="open"
      // animate={scrolling ? 'open' : 'closed'}
      // variants={sidebar}
    >
      <Menu>
        <TypeScale.H5 fontColor="white">chase bliss audio</TypeScale.H5>
        <NavItems />
      </Menu>
    </Nav>
  );
};

export default Header;
