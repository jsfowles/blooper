import React from 'react';
import { motion } from 'framer-motion';

import Image from '@components/Image';

const Footer = () => {
  return (
    <motion.footer
      style={{
        position: 'relative',
        zIndex: -2,
        height: 300,
        background: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p style={{ fontSize: 24, textAlign: 'center' }}>contact</p>
      <Image
        style={{ width: 100, position: 'absolute' }}
        src="/images/s7.png"
        className="s7"
      />
      <Image
        style={{ width: 100, position: 'absolute', left: '25%', top: 30 }}
        src="/images/s10.png"
        className="s10"
      />
      <Image
        style={{ width: 50, position: 'absolute', right: '20%' }}
        src="/images/s5.png"
        className="s5"
      />
    </motion.footer>
  );
};

export default Footer;
