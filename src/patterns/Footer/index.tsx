import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row } from '@identity/grid';
// import Logo from '@components/Logo';

const Footer = () => {
  return (
    <motion.footer
      style={{
        background: 'white',
        boxShadow: 'var(--box-shadow)',
      }}
    >
      <Container space={{ padding: 'vertical-md' }}>
        <Row>
          <motion.div>
            <div>Blooper</div>
          </motion.div>
        </Row>
      </Container>
    </motion.footer>
  );
};

export default Footer;
