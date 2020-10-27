// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MenuItem, NavItemsWrapper } from './styles/NavItemsStyles';
import { TypeScale } from '@identity/type';

const NAV_ITEMS = [
  { id: 1, title: 'bloop troop', route: '/bloop-troop' },
  { id: 2, title: 'media', route: '/media' },
  { id: 2, title: 'firmware', route: '/firmware' },
  { id: 2, title: 'downloads', route: '/downloads' },
];

const item = {
  open: { opacity: 1, y: 0, x: 0 },
  closed: { opacity: 0, y: -20, x: -10 },
};

const NavItems = ({ setOpenMenu, isMobile }) => (
  <NavItemsWrapper isMobile={isMobile}>
    {NAV_ITEMS.map(({ id, title, route }) => (
      <MenuItem variants={item}>
        <Link href={route} passHref key={id}>
          <a>
            <TypeScale.P
              onClick={() => {
                if (isMobile) {
                  setOpenMenu(false);
                }
              }}
            >
              {title}
            </TypeScale.P>
          </a>
        </Link>
      </MenuItem>
    ))}
  </NavItemsWrapper>
);

export default NavItems;
