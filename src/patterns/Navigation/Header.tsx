// @ts-nocheck
import React from 'react';
import Link from 'next/link';
import { NavItems, MobileMenu } from '@patterns/Navigation';
import { useMediaQuery } from 'react-responsive';

import { Menu } from './styles/HeaderStyles';
import { motion } from 'framer-motion';

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
    <Menu>
      <Link passHref href="/">
        <motion.img
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
  );
};

export default Header;
