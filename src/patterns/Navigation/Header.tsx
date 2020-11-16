// @ts-nocheck
import React from 'react';
import Link from 'next/link';
import { NavItems, MobileMenu } from '@patterns/Navigation';
import { useMediaQuery } from 'react-responsive';

import { Nav, Menu } from './styles/HeaderStyles';
import Image from '@components/Image';
import { TypeScale } from '@identity/type';

const Header = () => {
  const isMobile = useMediaQuery({
    query: '(max-device-width: 768px)',
  });
  const [offset, setOffset] = React.useState(0);

  React.useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offset]);

  return (
    <Nav>
      <Menu>
        <Link passHref href="/">
          <Image
            whileHover={{ scale: 1.1 }}
            src="/images/s1.png"
            transition={{ type: 'spring', stiffness: 60 }}
            animate={{
              rotate: offset * 0.1,
            }}
          />
        </Link>
        {isMobile ? <MobileMenu /> : <NavItems />}
      </Menu>
    </Nav>
  );
};

export default Header;
