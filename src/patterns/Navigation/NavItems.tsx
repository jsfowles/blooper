// @ts-nocheck
import React from 'react';
import Link from 'next/link';
import { MenuItem, NavItemsWrapper } from './styles/NavItemsStyles';
import { TypeScale } from '@identity/type';

const NAV_ITEMS = [
  { id: 1, title: 'home', route: '/' },
  { id: 2, title: 'resources', route: '/resources' },
  { id: 3, title: 'modifiers', route: '/modifiers' },
  {
    id: 4,
    title: 'interface',
    route: 'https://chasebliss.com/wp-content/uploads/2020/09/blooper.2.0.html',
  },
  { id: 5, title: 'midi', route: '/midi' },
  { id: 6, title: 'FAQ', route: '/faq' },
];

const item = {
  open: { opacity: 1, y: 0, x: 0 },
  closed: { opacity: 0, y: -20, x: -10 },
};

const NavItems = ({ setOpenMenu, isMobile }) => (
  <NavItemsWrapper isMobile={isMobile}>
    {NAV_ITEMS.map(({ id, title, route }) => (
      <MenuItem key={id} variants={item}>
        <Link href={route} passHref scroll>
          <a>
            <TypeScale.P
              whileHover={{ scale: 1.1 }}
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
