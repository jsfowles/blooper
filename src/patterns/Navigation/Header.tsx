import React from 'react';

import { motion } from 'framer-motion';
import { Container, Row } from '@identity/grid';
import { NavItems } from '@patterns/Navigation';
// import Logo from '@components/Logo';

const Header = () => {
  return (
    <motion.header
      style={{
        background: '#ffffff',
        boxShadow: 'var(--box-shadow)',
      }}
    >
      <Container space={{ padding: 'vertical-md' }}>
        <Row justifyContent="space-between">
          <motion.div
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <div>Blooper</div>
            <NavItems />
          </motion.div>
        </Row>
      </Container>
    </motion.header>
  );
};

export default Header;
