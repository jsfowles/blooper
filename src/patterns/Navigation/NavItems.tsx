// @ts-nocheck
import React from 'react';
import Link from 'next/link';
import { MenuItem, NavItemsWrapper } from './styles/NavItemsStyles';
import { TypeScale } from '@identity/type';

const NAV_ITEMS = [
  { id: 1, title: 'resources', route: '/resources' },
  { id: 2, title: 'modifiers', route: '/modifiers' },
  {
    id: 3,
    title: 'interface',
    route: 'https://chasebliss.com/wp-content/uploads/2021/02/blooper.3.0.html',
    external: true,
  },
  {
    id: 4,
    title: 'midi',
    route: '/midi',
  },
  { id: 5, title: 'FAQ', route: '/faq' },
];

const item = {
  open: { opacity: 1, y: 0, x: 0 },
  closed: { opacity: 0, y: -20, x: -10 },
};

const NavItems = ({ setOpenMenu, isMobile }) => (
  <NavItemsWrapper isMobile={isMobile}>
    {NAV_ITEMS.map(({ id, title, route, external }) => (
      <MenuItem key={id} variants={item}>
        <Link href={route} passHref scroll>
          <a target={external === true && '__blank'}>
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
