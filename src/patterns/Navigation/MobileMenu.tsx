// @ts-ignore
import React, { useState } from 'react';
import Burger from '@animated-burgers/burger-squeeze';
import { AnimatePresence } from 'framer-motion';
import {
  Overlay,
  MobileMenuWrapper,
} from '@patterns/Navigation/styles/MobileMenuStyles';
import { NavItems } from '@patterns/Navigation/index';

const mobileMenuMotion = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.17, 0.67, 0.83, 0.67],
      delayChildren: 0.25,
      staggerChildren: 0.07,
      staggerDirection: 1,
    },
  },
  closed: {
    opacity: 0,
    y: '-100vh',
    transition: {
      ease: [0.17, 0.67, 0.83, 0.67],
      staggerChildren: 0.07,
      staggerDirection: -1,
      when: 'afterChildren',
    },
  },
};

const MobileMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <MobileMenuWrapper>
      <Burger
        isOpen={openMenu}
        onClick={() => setOpenMenu(!openMenu)}
        style={{ fontSize: 6 }}
      />
      <AnimatePresence exitBeforeEnter>
        {openMenu && (
          <Overlay
            variants={mobileMenuMotion}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <NavItems isMobile setOpenMenu={setOpenMenu} />
          </Overlay>
        )}
      </AnimatePresence>
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
