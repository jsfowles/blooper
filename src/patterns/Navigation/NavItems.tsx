// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MenuItem } from './styles/NavItemsStyles';
import { TypeScale } from '@identity/type';

const NAV_ITEMS = [
  { id: 1, title: 'home', route: '/' },
  { id: 2, title: 'firmware', route: '/firmware' },
  { id: 2, title: 'manuals', route: '/manuals' },
];

const NavItems = ({ setOpenMenu }) => (
  <motion.nav>
    {NAV_ITEMS.map(({ id, title, route }) => (
      <MenuItem>
        <Link href={route} passHref key={id}>
          <a>
            <TypeScale.P onClick={() => setOpenMenu(false)}>
              {title}
            </TypeScale.P>
          </a>
        </Link>
      </MenuItem>
    ))}
  </motion.nav>
);

export default NavItems;
