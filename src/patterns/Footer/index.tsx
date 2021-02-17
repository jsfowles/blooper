import React from 'react';
import { motion } from 'framer-motion';

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
      <motion.img
        style={{ width: 250, position: 'absolute', zIndex: 1 }}
        src="/images/logo.png"
      />

      <motion.img
        style={{ width: 100, position: 'absolute', left: '25%', top: 30 }}
        src="/images/s10.png"
        className="s10"
      />
      <motion.img
        style={{ width: 50, position: 'absolute', right: '20%' }}
        src="/images/s5.png"
        className="s5"
      />
    </motion.footer>
  );
};

export default Footer;
